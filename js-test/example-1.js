import { createAll, cleanConsole } from "./data";
const companies = createAll();

cleanConsole(1, companies);

const getUsers = (companies) => {
  const users = [];
  companies.map((company) => {
    users.push(company["users"]);
  });
  return users;
};

// Next function replace "undefined" value in "firstName" and "lastName" keys with "" character value also, returns all firstname and lastnames with uppercase at first letter.

const changeUndefined = (users) => {
  // Replacing and uppercase first letter
  for (let i = 0; i < users.length; i++) {
    users[i].map((user) => {
      user["firstName"] === undefined
        ? (user["firstName"] = "")
        : (user["firstName"] =
            user["firstName"][0].toUpperCase() + user["firstName"].slice(1));
      user["lastName"] === undefined
        ? (user["lastName"] = "")
        : (user["lastName"] =
            user["lastName"][0].toUpperCase() + user["lastName"].slice(1));
    });

    // Sorting user names
    users[i].sort((user1, user2) => {
      if (user1["firstName"] > user2["firstName"]) {
        return 1;
      }
      if (user1["firstName"] < user2["firstName"]) {
        return -1;
      }
      if (user1["lastName"] < user2["lastName"]) {
        return -1;
      }
      return 0;
    });
  }
  return users;
};

const getCompaniesName = (companies) => {
  const companiesName = [];
  companies.map((company) => {
    companiesName.push(
      company["name"][0].toUpperCase() + company["name"].slice(1)
    );
  });
  return companiesName;
};

const assamblingData = (companiesName, users, companies) => {
  for (let j = 0; j < companies.length; j++) {
    for (let i = 0; i < users[j].length; i++) {
      companies[j]["users"][i]["firstName"] = users[j][i]["firstName"];
      companies[j]["users"][i]["lastName"] = users[j][i]["lastName"];
    }
    companies[j]["name"] = companiesName[j];
  }
  companies.sort((company1, company2) => {
    if (company1.users.length > company2.users.length) {
      return -1;
    }
    if (company1.users.length < company2.users.length) {
      return 1;
    }
    return 0;
  });

  return companies;
};

const modifyCompanies = (companies) => {
  const users = getUsers(companies);
  const companiesName = getCompaniesName(companies);
  const usersModified = changeUndefined(users);
  const modifiedCompanies = assamblingData(
    companiesName,
    usersModified,
    companies
  );
  return modifiedCompanies;
};

console.log("----SOLUTION EXAMPLE 1 --- ", modifyCompanies(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order
