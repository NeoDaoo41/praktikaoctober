const axios = require("axios")


let urls = [
    "/users",
    "/posts",
    "/comments",
    "/albums",
    "/неправильный-путь"
];

Promise.allSettled(
    urls.map(path =>
        axios.get("https://jsonplaceholder.typicode.com" + path)
    )
).then(results => {
    results.forEach((result, index) => {
        console.log(
            index + 1,
            result.status
        );
    });
});