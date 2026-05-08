package com.taskmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Main application class for Task Manager
 * Enables async processing and scheduling for automation features
 */
@SpringBootApplication
@EnableAsync
@EnableScheduling
public class TaskManagerApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(TaskManagerApplication.class, args);
    }
}