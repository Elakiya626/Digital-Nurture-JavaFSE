package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // HQL Query
    @Query("FROM Country")
    List<Country> getAllCountriesHQL();

    // Native SQL Query
    @Query(value = "SELECT * FROM country", nativeQuery = true)
    List<Country> getAllCountriesNative();

}