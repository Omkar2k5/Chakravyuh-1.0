package com.example.smartfianacetracker

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.example.smartfianacetracker.databinding.ActivityMainBinding
import com.google.firebase.database.FirebaseDatabase

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Initialize Firebase structure
        initializeFirebaseStructure()
        
        checkAndRequestPermissions()
    }

    private fun initializeFirebaseStructure() {
        try {
            // Set the database URL explicitly
            val database = FirebaseDatabase.getInstance("https://smart-fiance-tracker-default-rtdb.asia-southeast1.firebasedatabase.app/")
            
            // Disable persistence temporarily for testing
            database.setPersistenceEnabled(false)
            
            val ref = database.getReference("transactions")
            
            // Create an initial test transaction
            val testTransaction = Transaction(
                amount = 100.0,
                timestamp = System.currentTimeMillis(),
                upiId = "test@upi",
                merchantName = "Test Merchant"
            )
            
            // Test connection with a test transaction
            ref.push().setValue(testTransaction)
                .addOnSuccessListener {
                    Log.d("Firebase", "Test transaction saved successfully")
                    binding.statusText.text = "Database Connected & Test Transaction Saved"
                }
                .addOnFailureListener { e ->
                    Log.e("Firebase", "Database connection failed", e)
                    binding.statusText.text = "Database Error: ${e.message}"
                }
        } catch (e: Exception) {
            Log.e("Firebase", "Error initializing Firebase", e)
            binding.statusText.text = "Firebase Init Error: ${e.message}"
        }
    }

    private fun checkAndRequestPermissions() {
        val permissions = arrayOf(
            Manifest.permission.RECEIVE_SMS,
            Manifest.permission.READ_SMS,
            Manifest.permission.POST_NOTIFICATIONS
        )

        val permissionsToRequest = permissions.filter {
            ContextCompat.checkSelfPermission(this, it) != PackageManager.PERMISSION_GRANTED
        }.toTypedArray()

        if (permissionsToRequest.isNotEmpty()) {
            ActivityCompat.requestPermissions(
                this,
                permissionsToRequest,
                SMS_PERMISSION_CODE
            )
        } else {
            startSmsService()
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == SMS_PERMISSION_CODE) {
            if (grantResults.all { it == PackageManager.PERMISSION_GRANTED }) {
                startSmsService()
                Toast.makeText(this, "Service Started", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this, "Permissions required to monitor SMS", Toast.LENGTH_LONG).show()
            }
        }
    }

    private fun startSmsService() {
        val serviceIntent = Intent(this, SmsService::class.java)
        startForegroundService(serviceIntent)
        binding.statusText.text = "SMS Monitoring Service is Running"
    }

    companion object {
        private const val SMS_PERMISSION_CODE = 1
    }
} 