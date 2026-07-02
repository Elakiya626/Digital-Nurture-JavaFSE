package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(
                        OrmLearnApplication.class,
                        args
                );

        LOGGER.info("Inside main");

        countryService = context.getBean(CountryService.class);

        // Existing JPA Method
        testGetAllCountries();

        // HQL Method
        testGetAllCountriesHQL();

        // Native Query Method
        testGetAllCountriesNative();
    }

    // Existing JPA Repository Method
    private static void testGetAllCountries() {

        LOGGER.info("===== JPA findAll() =====");

        List<Country> countries = countryService.getAllCountries();

        countries.forEach(country -> LOGGER.debug("{}", country));

        LOGGER.info("=========================");
    }

    // HQL Query
    private static void testGetAllCountriesHQL() {

        LOGGER.info("===== HQL Query =====");

        List<Country> countries = countryService.getAllCountriesHQL();

        countries.forEach(country -> LOGGER.debug("{}", country));

        LOGGER.info("=====================");
    }

    // Native SQL Query
    private static void testGetAllCountriesNative() {

        LOGGER.info("===== Native Query =====");

        List<Country> countries = countryService.getAllCountriesNative();

        countries.forEach(country -> LOGGER.debug("{}", country));

        LOGGER.info("========================");
    }
}