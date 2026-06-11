const connection = require("../config/db");

async function getTotalPopulation(req, res) {
  try {
    const q1 =
      "SELECT SUM(Population) AS tPopulation FROM country";

    const [resultDB] = await connection.execute(q1);

    res.status(200).send({
      success: true,
      tPopulation: resultDB[0].tPopulation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
}

async function getTotalContries(req, res) {
  try {
    const q2 =
      "SELECT COUNT(*) AS cCount FROM country";

    const [resultDB] = await connection.execute(q2);

    res.status(200).send({
      success: true,
      countryCount: resultDB[0].cCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
}

async function getTopTenPopulatedCountries(req, res) {
  try {
    const q3 = `
      SELECT Name, Population
      FROM country
      ORDER BY Population DESC
      LIMIT 10
    `;

    const [resultDB] = await connection.execute(q3);

    res.status(200).send({
      success: true,
      countries: resultDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error" });
  }
}

async function getTopTenLeastPopulatedCountries(req, res) {
  try {
    const q4 = `
      SELECT Name, Population
      FROM country
      ORDER BY Population ASC
      LIMIT 10
    `;

    const [resultDB] = await connection.execute(q4);

    res.status(200).send({
      success: true,
      countries: resultDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}

async function getAveragePopulation(req, res) {
  try {
    const q5 = `
      SELECT AVG(Population) AS avgPopulation
      FROM country
    `;

    const [resultDB] = await connection.execute(q5);

    res.status(200).send({
      success: true,
      avgPopulation: Math.round(resultDB[0].avgPopulation),
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}

async function getPopulationByContinent(req, res) {
  try {
    const q6 = `
      SELECT Continent,
             SUM(Population) AS totalPopulation
      FROM country
      GROUP BY Continent
      ORDER BY totalPopulation DESC
    `;

    const [resultDB] = await connection.execute(q6);

    res.status(200).send({
      success: true,
      continents: resultDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}

async function getPopulationByCountry(req, res) {
  try {
    const { countryName } = req.params;

    const q7 = `
      SELECT Name, Population
      FROM country
      WHERE Name = ?
    `;

    const [resultDB] = await connection.execute(q7, [countryName]);

    res.status(200).send({
      success: true,
      country: resultDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}

async function getTotalLanguages(req, res) {
  try {
    const q8 = `
      SELECT COUNT(DISTINCT Language) AS totalLanguages
      FROM countrylanguage
    `;

    const [resultDB] = await connection.execute(q8);

    res.status(200).send({
      success: true,
      totalLanguages: resultDB[0].totalLanguages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}



async function getTopTenLanguages(req, res) {
  try {
    const q9 = `
      SELECT Language,
             COUNT(*) AS countryCount
      FROM countrylanguage
      GROUP BY Language
      ORDER BY countryCount DESC
      LIMIT 10
    `;

    const [resultDB] = await connection.execute(q9);

    res.status(200).send({
      success: true,
      languages: resultDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}


async function getCountriesGDPPerCapita(req, res) {
  try {
    const q10 = `
      SELECT Name,
             Population,
             GNP,
             ROUND(GNP / Population, 2) AS GDPPerCapita
      FROM country
      WHERE Population > 0
      ORDER BY GDPPerCapita DESC
    `;

    const [resultDB] = await connection.execute(q10);

    res.status(200).send({
      success: true,
      countries: resultDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}

async function getAverageLifeExpectancy(req, res) {
  try {
    const q11 = `
      SELECT ROUND(AVG(LifeExpectancy), 2) AS avgLifeExpectancy
      FROM country
      WHERE LifeExpectancy IS NOT NULL
    `;

    const [resultDB] = await connection.execute(q11);

    res.status(200).send({
      success: true,
      avgLifeExpectancy: resultDB[0].avgLifeExpectancy,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "Server error",
    });
  }
}




module.exports = {
  getTotalPopulation,
  getTotalContries,
  getTopTenPopulatedCountries,
  getTopTenLeastPopulatedCountries,
  getAveragePopulation,
  getPopulationByContinent,
  getPopulationByCountry,
getTotalLanguages,
getTopTenLanguages,
getCountriesGDPPerCapita,
getAverageLifeExpectancy,
};