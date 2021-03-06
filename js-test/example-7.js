import { cleanConsole, createAll } from "./data";
const companies = createAll();
var companiesClone = Array.from(companies);
cleanConsole(7, companies);

console.log("EXAMPLE 7 part 1: Display name of company ---");

const displayName = (id) => {
  const companyToDisplay = companies.filter(
    (company) => company["id"] == id
  )[0];
  return companyToDisplay["name"];
};

console.log("---- SOLUTION EXAMPLE 7 part 1 --- ", displayName(0));

console.log("EXAMPLE 7 part 2: Delete company ---");

const deleteCompany = (id) => {
  let newCompanies = companies.filter((company) => company["id"] !== id);
  return newCompanies;
};

console.log("---- SOLUTION EXAMPLE 7 part 2 --- ", deleteCompany(0));

console.log("EXAMPLE 7 part 3: Put/Patch data company (except users) ---");

const patchToCompany = (id) => {
  let company = companies.filter((company) => company["id"] === id)[0];
  Object.keys(company).map((key) => {
    if (key != "users") {
      company["name"] = "Tesla"; // Name atrribuite to change must be typed.
    }
    company = { ...company };
  });
  return companies;
};

console.log("---- SOLUTION EXAMPLE 7 part 3 --- ", patchToCompany(1));

console.log("EXAMPLE 7 part 4: Add user to company ---");

const addUser = (id) => {
  const company = companies.filter((company) => company["id"] === id)[0];
  company["users"].push({
    firstName: "Juan",
    lastName: "Delgado",
    age: 35,
    car: true,
    id: company["users"].length,
  });
  company["usersLength"] = company["users"].length;
  return companies;
};

console.log("---- SOLUTION EXAMPLE 7 part 4 --- ", addUser(0));

console.log("EXAMPLE 7 part 5: Put data company (except users) ---");

const putToCompany = (id) => {
  let company = companies.filter((company) => company["id"] === id)[0];
  Object.keys(company).map((key) => {
    if (key != "users") {
      company["name"] = "Tesla"; // Name atrribuite to change must be typed.
    }
    company = { ...company };
  });
  return companies;
};

console.log("---- SOLUTION EXAMPLE 7 part 5 --- ", putToCompany(1));

console.log("EXAMPLE 7 part 6: Delete user from company ---");

const deleteUser = (idCompany, idUser) => {
  let company = companiesClone.filter(
    (company) => company["id"] === idCompany
  )[0];
  let users = company["users"].filter((user) => user["id"] !== idUser);
  companiesClone[idCompany]["users"] = users;
  companiesClone[idCompany]["usersLength"] = users.length;

  return companiesClone;
};

console.log("---- SOLUTION EXAMPLE 7 part 6 --- ", deleteUser(1, 2));

console.log("EXAMPLE 7 part 7: User Patch ---");

const patchUser = (idCompany, idUser) => {
  const companiesClone = companies.slice();
  let company = companiesClone.filter(
    (company) => company["id"] === idCompany
  )[0];
  let user = company["users"].filter((user) => user["id"] === idUser)[0];
  user["lastName"] = "Tesla"; // Name atrribuite to change in user, must be typed.
  console.log(user);
  companiesClone[idCompany]["users"][idUser] = user;
  return companiesClone;
};

console.log("---- SOLUTION EXAMPLE 7 part 7 --- ", patchUser(3, 5));

console.log("EXAMPLE 7 part 8: User Put ---");

const putUser = (idCompany, idUser) => {
  let company = companiesClone.filter(
    (company) => company["id"] === idCompany
  )[0];
  let user = company["users"].filter((user) => user["id"] === idUser)[0];
  user["lastName"] = "Tesla"; // Name atrribuite to change in user, must be typed.
  console.log(user);
  companiesClone[idCompany]["users"][idUser] = user;
  return companiesClone;
};

console.log("---- SOLUTION EXAMPLE 7 part 8 --- ", putUser(5, 3));

console.log("EXAMPLE 7 part 9: Change user to another company");

const changeUserCompany = (id1, id2, idUser) => {
  let companiesToChange = companiesClone.filter(
    (company) => company["id"] === id1 || company["id"] === id2
  );
  let userTochange = companiesToChange[0]["users"].filter(
    (user) => user["id"] === idUser
  )[0];
  userTochange["id"] = companiesToChange[1]["users"].length;
  companiesToChange[1]["users"].push(userTochange);
  companiesToChange[1]["usersLength"] = companiesToChange[1]["users"].length;

  let users = companiesToChange[0]["users"].filter(
    (user) => user["id"] !== idUser
  );
  companiesClone[id1]["users"] = users;
  companiesClone[id1]["users"]["usersLength"] = users.length;
  companiesClone[id2] = companiesToChange[1];

  return companiesClone;
};

console.log("---- SOLUTION EXAMPLE 7 part 9 --- ", changeUserCompany(0, 1, 3));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPA??OL

// Parte 1: Crear una funci??n tomando como par??metro un "id" de "company" y
// devolviendo el nombre de esta "company".

// Parte 2: Crear una funci??n tomando como par??metro un "id" de "company" y
// quitando la "company" de la lista.

// Parte 3: Crear una funci??n tomando como par??metro un "id" de "company" y
// permitiendo hacer un PATCH/PUT (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

// Parte 4: Crear una funci??n tomando como par??metro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 a??os y
// due??o de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado autom??ticamente. La funci??n tambi??n debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una funci??n tomando como par??metro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una funci??n tomando como par??metro un "id" de "company" y un
// "id" de "user". La funci??n debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una funci??n tomando como par??metro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una funci??n tomando como par??metro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una funci??n tomando como par??metro dos "id" de "company" y
// un "id" de "user". La funci??n debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated 