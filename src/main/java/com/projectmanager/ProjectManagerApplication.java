package com.projectmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Main application class for Project Manager
 * Enables JPA repositories, caching, async processing, and transaction management
 */
@SpringBootApplication
@EnableJpaRepositories
@EnableCaching
@EnableAsync
@EnableTransactionManagement
public class ProjectManagerApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(ProjectManagerApplication.class, args);
    }
}
