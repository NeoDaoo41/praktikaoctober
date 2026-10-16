const axios = require("axios")

let url = "https://jsonplaceholder.typicode.com/todos";

async function getTasks() {
    let response = await axios.get(url);
    console.log(response.data);
}

async function createTask() {
    let response = await axios.post(url, {
        title: "Выучить JavaScript",
        completed: false,
        userId: 1
    });

    console.log(response.data);
}

async function updateTask(id) {
    let response = await axios.put(url + "/" + id, {
        title: "Новая задача",
        completed: true,
        userId: 1
    });

    console.log(response.data);
}

async function deleteTask(id) {
    let response = await axios.delete(url + "/" + id);
    console.log("Статус удаления:", response.status);
}

getTasks();
createTask();
updateTask(1);
deleteTask(1);