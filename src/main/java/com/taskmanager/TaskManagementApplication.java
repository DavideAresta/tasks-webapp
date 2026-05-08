package com.taskmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Main application class for Task Management System
 * Enables caching, async processing, and transaction management
 */
@SpringBootApplication
@EnableCaching
@EnableAsync
@EnableTransactionManagement
public class TaskManagementApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(TaskManagementApplication.class, args);
    }
}