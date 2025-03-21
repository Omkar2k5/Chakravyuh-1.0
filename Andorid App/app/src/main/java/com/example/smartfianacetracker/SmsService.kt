package com.example.smartfianacetracker

import android.app.*
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Build
import android.os.Bundle
import android.os.IBinder
import android.provider.Telephony
import android.util.Log
import androidx.core.app.NotificationCompat
import com.google.firebase.database.FirebaseDatabase
import java.util.regex.Pattern
import java.util.Date
import java.util.Calendar

class SmsService : Service() {
    private lateinit var smsReceiver: SmsReceiver
    private val channelId = "SmsForegroundService"
    
    override fun onCreate() {
        super.onCreate()
        createNotificationChannel()
        registerSmsReceiver()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val notification = NotificationCompat.Builder(this, channelId)
            .setContentTitle("SMS Monitoring Service")
            .setContentText("Listening for transactions...")
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .build()

        startForeground(1, notification)
        return START_STICKY
    }

    override fun onDestroy() {
        super.onDestroy()
        unregisterReceiver(smsReceiver)
    }

    override fun onBind(intent: Intent?): IBinder? = null

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val serviceChannel = NotificationChannel(
                channelId,
                "SMS Monitoring Service",
                NotificationManager.IMPORTANCE_LOW
            )
            getSystemService(NotificationManager::class.java)?.createNotificationChannel(serviceChannel)
        }
    }

    private fun registerSmsReceiver() {
        smsReceiver = SmsReceiver()
        registerReceiver(smsReceiver, IntentFilter("android.provider.Telephony.SMS_RECEIVED"))
    }

    class SmsReceiver : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            Log.d(TAG, "SMS Received")
            if (intent.action == Telephony.Sms.Intents.SMS_RECEIVED_ACTION) {
                val messages = Telephony.Sms.Intents.getMessagesFromIntent(intent)
                messages.forEach { sms ->
                    val messageBody = sms.messageBody
                    Log.d(TAG, "Message content: $messageBody")
                    
                    if (messageBody.lowercase().contains("debit")) {
                        Log.d(TAG, "Debit transaction detected")
                        processTransactionSMS(messageBody)
                    } else {
                        Log.d(TAG, "Not a debit transaction message")
                    }
                }
            }
        }

        private fun processTransactionSMS(message: String) {
            try {
                Log.d(TAG, "Processing SMS: $message")
                
                // Simplified amount pattern to match IPPB format
                val amountPattern = Pattern.compile("Rs\\.(\\d+\\.\\d{2})", Pattern.CASE_INSENSITIVE)
                val amountMatcher = amountPattern.matcher(message)
                
                // Updated pattern specifically for IPPB format
                val merchantPattern = Pattern.compile("UPI to\\s+([^\\s]+(?:\\s+[^\\s]+)*?)\\s+on", Pattern.CASE_INSENSITIVE)
                val merchantMatcher = merchantPattern.matcher(message)

                if (amountMatcher.find()) {
                    val amountStr = amountMatcher.group(1) ?: "0"
                    val amount = amountStr.toDoubleOrNull() ?: 0.0
                    
                    // Extract merchant name
                    val merchantName = if (merchantMatcher.find()) {
                        merchantMatcher.group(1)?.trim() ?: "Unknown"
                    } else {
                        "Unknown"
                    }
                    
                    Log.d(TAG, "Extracted amount: $amount")
                    Log.d(TAG, "Found merchant: $merchantName")
                    
                    val transaction = Transaction(
                        amount = amount,
                        timestamp = System.currentTimeMillis(),
                        upiId = "", // IPPB format doesn't include UPI ID
                        merchantName = merchantName
                    )

                    // Save to Firebase
                    saveTransaction(transaction)
                } else {
                    Log.d(TAG, "No amount found in message")
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error processing SMS", e)
                e.printStackTrace() // Add stack trace for better debugging
            }
        }

        private fun saveTransaction(transaction: Transaction) {
            try {
                val database = FirebaseDatabase.getInstance("https://smart-fiance-tracker-default-rtdb.asia-southeast1.firebasedatabase.app/")
                val ref = database.getReference("transactions")
                
                // Create a new document with auto-generated ID
                val transactionId = ref.push().key ?: return
                
                Log.d(TAG, "Saving transaction with ID: $transactionId")
                Log.d(TAG, "Transaction details: Amount=${transaction.amount}, Merchant=${transaction.merchantName}")
                
                // Save transaction directly under transactions collection
                ref.child(transactionId)
                    .setValue(transaction)
                    .addOnSuccessListener {
                        Log.d(TAG, "Transaction saved successfully")
                    }
                    .addOnFailureListener { e ->
                        Log.e(TAG, "Error saving transaction", e)
                        e.printStackTrace() // Add stack trace for better debugging
                    }
            } catch (e: Exception) {
                Log.e(TAG, "Error in saveTransaction", e)
                e.printStackTrace() // Add stack trace for better debugging
            }
        }

        companion object {
            private const val TAG = "SmsReceiver"
        }
    }
} 