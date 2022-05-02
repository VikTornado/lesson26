"use strict";

const getData = (url) => {
    return fetch(url).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(
                `Отправка данных "${response.url}", завершилось ошибкой: "${response.status}: ${response.statusText}"`
            )
        }
    })
}

const sendData = (url, data = {}) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(
                `Отправка данных "${response.url}", завершилось ошибкой: "${response.status}: ${response.statusText}"`
            )
        }
    })
}

getData('db.json')
    .then((response) => sendData("https://jsonplaceholder.typicode.com/posts", response))
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });