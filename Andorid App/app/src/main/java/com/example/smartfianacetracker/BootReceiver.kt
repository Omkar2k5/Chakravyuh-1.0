package com.example.smartfianacetracker

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log

class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == Intent.ACTION_BOOT_COMPLETED) {
            Log.d("BootReceiver", "Device rebooted, restarting service...")
            val serviceIntent = Intent(context, SmsService::class.java)
            context.startForegroundService(serviceIntent)
        }
    }
} 