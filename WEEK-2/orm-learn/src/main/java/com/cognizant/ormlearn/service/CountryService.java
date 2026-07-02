package com.cognizant.ormlearn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Existing method
    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    // HQL Method
    @Transactional
    public List<Country> getAllCountriesHQL() {
        return countryRepository.getAllCountriesHQL();
    }

    // Native Query Method
    @Transactional
    public List<Country> getAllCountriesNative() {
        return countryRepository.getAllCountriesNative();
    }

}