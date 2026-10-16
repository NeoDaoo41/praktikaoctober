const axios = require("axios")
axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "Моя запись",
    body: "Текст записи",
    userId: 1
})
.then(response => console.log(response.data))