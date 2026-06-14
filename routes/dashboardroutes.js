const express = require("express");
const dashboardController = require("../controllers/dashboardController");

const router = express.Router();

router.get("/tp", dashboardController.getTotalPopulation);
router.get("/tc", dashboardController.getTotalContries);
router.get("/top10", dashboardController.getTopTenPopulatedCountries);
router.get("/least10",dashboardController.getTopTenLeastPopulatedCountries);
router.get(
  "/avg-population",
  dashboardController.getAveragePopulation
);
router.get(
  "/continent-population",
  dashboardController.getPopulationByContinent
);


router.get(
  "/country-population/:countryName",
  dashboardController.getPopulationByCountry
);




router.get(
  "/total-languages",
  dashboardController.getTotalLanguages
);


router.get(
  "/top-languages",
  dashboardController.getTopTenLanguages
);


router.get(
  "/gdp-per-capita",
  dashboardController.getCountriesGDPPerCapita
);


router.get(
  "/average-life-expectancy",
  dashboardController.getAverageLifeExpectancy
);

router.get(
  "/top-life-expectancy",
  dashboardController.getTopLifeExpectancyCountries
);

router.get(
  "/lowest-life-expectancy",
  dashboardController.getLowestLifeExpectancyCountries
);

router.get(
  "/city/:cityName",
  dashboardController.getCityByName
);

router.get("/largest-cities", dashboardController.getLargestCities);

router.get("/total-cities", dashboardController.getTotalCities);

router.get(
  "/countries/population/:minPop",
  dashboardController.getCountriesByMinPopulation
);

router.get(
  "/countries-less-population/:maxPop",
  dashboardController.getCountriesWithLessPopulation
);

router.get(
  "/country-languages/:countryName",
  dashboardController.getLanguagesByCountry
);

module.exports = router;

