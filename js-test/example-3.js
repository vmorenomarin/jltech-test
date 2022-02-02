import { cleanConsole, createAll } from "./data";
import modifyCompanies from "./example-1";
const companies = createAll();

cleanConsole(3, companies);

const verifyCapitalized = (companies) => {
  let counter_companies = 0;
  let counter_users = 0;
  let initialusers = 0;
  companies.map((company) => {
    initialusers = initialusers + company.usersLength;
  });

  companies.map((company) => {
    company.name[0] === company.name[0].toUpperCase()
      ? counter_companies++
      : counter_companies;

    company.users.map((user) => {
      (user["firstName"] === "" ||
        user["firstName"][0] === user["firstName"][0].toUpperCase()) &&
      (user["lastName"] === "" ||
        user["lastName"][0] === user["lastName"][0].toUpperCase())
        ? counter_users++
        : counter_users;
    });
  });
  console.log(counter_users, initialusers);
  return companies.length === counter_companies &&
    counter_users === initialusers
    ? true
    : false;
};
const newCompanies = modifyCompanies(companies);
console.log(
  "---- SOLUTION EXAMPLE 3 --- ",
//   verifyCapitalized(companies)
    verifyCapitalized(newCompanies)
  //   modifyCompanies(companies)
);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
