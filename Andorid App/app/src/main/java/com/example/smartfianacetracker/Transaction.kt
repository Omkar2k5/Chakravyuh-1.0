package com.example.smartfianacetracker

data class Transaction(
    val amount: Double = 0.0,
    val timestamp: Long = System.currentTimeMillis(),
    val upiId: String = "",
    val merchantName: String = "Unknown" // Default value if not found
) 