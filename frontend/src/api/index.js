export default function api() {
    const options = (method, data) => ({
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    const BASE_URL = 'http://localhost:8000/';

    return {
        post: async(path, data) => {
            const response = await fetch(BASE_URL + `${path}`, options('POST', data))
            return await response.json()
        },
        get: async(path) => {
            const response = await fetch(BASE_URL + path, options('GET'))
            return await response.json();
            // return await response.json()
        },
    }
}