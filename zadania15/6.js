const axios = require("axios")

async function getData(url, ms) {
    try {
        let response = await axios.get(url, {
            timeout: ms
        });

        return response.data;
    } catch (error) {
        console.log("Ошибка или таймаут:", error.message);
    }
}

getData("https://jsonplaceholder.typicode.com/users", 3000);