const axios = require("axios");

rs = axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  const headerDate =
    res.headers && res.headers.date ? res.headers.date : "no response date";
  console.log("Status Code:", res.status);
  console.log("Date in Response header:", headerDate);
  console.log("Data in Response body:", res.data);
});
