const axios = require("axios")
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log(response.data))
    .catch(error => {
        console.log("Ошибка:", error.message);
    });