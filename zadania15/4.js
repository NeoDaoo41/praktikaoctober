const axios = require("axios")

Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/users"),
    axios.get("https://jsonplaceholder.typicode.com/posts")
])
.then(result => {
    console.log("Пользователи:", result[0].data);
    console.log("Посты:", result[1].data);
})
.catch(error => console.log("Ошибка:", error.message));