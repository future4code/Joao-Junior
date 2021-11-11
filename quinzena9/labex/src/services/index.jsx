import axios from "axios"

export const login = async ( { email, password }) => {
    let error
    let response
    try {
        response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-helio-banu/login", { email, password })
    } catch (e) {
        error = e.response
    }
    return {
        token: response && response.data.token,
        error
    }
}