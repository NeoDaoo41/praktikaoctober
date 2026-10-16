const axios = require("axios")

window.addEventListener("offline", () => {
    console.log("Интернет отключён");
});

window.addEventListener("online", () => {
    console.log("Интернет восстановлен");
});

async function loadUsers() {
    if (!navigator.onLine) {
        console.log("Нет интернета");
        return;
    }

    try {
        let response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(response.data);
    } catch (error) {
        console.log("Не удалось загрузить данные");
    }
}

loadUsers();