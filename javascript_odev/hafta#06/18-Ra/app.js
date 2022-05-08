const axios = require("axios");

rs = axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  console.log("Status Code:", res.status);
  console.log("Data in Response body:", res.data);
});
