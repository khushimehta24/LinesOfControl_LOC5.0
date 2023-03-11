
import axios from "axios"

export default axios.create({
    baseURL: "https://234738ca9e8cf860.api-eu.cometchat.io/v3",

    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "apiKey": "7765f6f7e67c3a9296b781ebcee9de96ea00b5a0"
    },
    "json": true
});