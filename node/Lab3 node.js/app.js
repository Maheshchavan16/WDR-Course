//Write a function fetchData() that returns a Promise. The promise should resolve with the message "Data fetched successfully!" after 2 seconds. Create another function displayData() that calls fetchData() and logs the resolved value to the console.

const { resolve } = require("node:dns");

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

function displayData() {
  fetchData().then((result) => {
    console.log(result);
  });
}

displayData();


// Create a Promise chain to simulate the following workflow: 
// Fetch user data (resolves with "User data fetched" after 1 second). 
// ● Process the user data (resolves with "User data processed" after 1 second). 
// ● Save the processed data (resolves with "User data saved" after 1 second). 
// Write a function that implements this chain and logs each step’s result to the console. 


function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data fetched");
    }, 1000);
  });
}

function processUserData(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data processed");
    }, 1000);
  });
}

function saveUserData(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data saved");
    }, 1000);
  });
}

fetchUserData()
  .then((result) => {
    console.log(result);
    return processUserData(result);
  })
  .then((result) => {
    console.log(result);
    return saveUserData(result);
  })
  .then((result) => {
    console.log(result);
  });


//Simulate fetching data from three different APIs. Write a function fetchAPIs() that returns a Promise using Promise.all. Each API simulation should resolve with a different message ("API 1 data", "API 2 data", "API 3 data") after 1 second. Log all the resolved results together. 

function fetchAPIs() {
  const api1 = new Promise((resolve) => {
    setTimeout(() => resolve("API 1 data"), 1000);
  });

  const api2 = new Promise((resolve) => {
    setTimeout(() => resolve("API 2 data"), 1000);
  });

  const api3 = new Promise((resolve) => {
    setTimeout(() => resolve("API 3 data"), 1000);
  });

  return Promise.all([api1, api2, api3]);
}

fetchAPIs().then((results) => {
  console.log(results);
});

