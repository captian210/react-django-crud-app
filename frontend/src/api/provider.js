import api from './index'

export async function fetchAllListData() {
    const users = await api().get(`all`)
    return users
}

export async function addUser(userName) {
    const users = await api().post(`create`, { name: userName })
    return users
}