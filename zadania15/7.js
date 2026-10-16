const axios = require("axios")

async function getWithRetry(url, attempts) {
    for (let i = 0; i < attempts; i++) {
        try {
            let response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log("Попытка " + (i + 1) + " не удалась");

            if (i === attempts - 1) {
                throw error;
            }
        }
    }
}

getWithRetry("https://jsonplaceholder.typicode.com/users", 3)
    .then(data => console.log(data))
    .catch(error => console.log("Все попытки не удались"));