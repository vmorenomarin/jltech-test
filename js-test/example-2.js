import { cleanConsole, createAll } from "./data";
const companies = createAll();

cleanConsole(2, companies);

const hasCarValidator = (companies, hasCar) => {
  companies.map((company) => {
    const userHasCar = [];
    company["users"].map((user) => {
      if (user["car"] == hasCar) {
        userHasCar.push(user);
      }
    });
    const companyNewUsers = { ...company, users: userHasCar };
    const newUsersLength = companyNewUsers["users"].length;
    companyNewUsers["usersLength"] = newUsersLength;
    companies[companies.indexOf(company)] = companyNewUsers;
  });
  return companies;
};

console.log("---- SOLUTION EXAMPLE 2 --- ", hasCarValidator(companies, false));

// // -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter
