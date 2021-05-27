const db = require('./db')
const data = db()

function login(username, password) {
    // if (username === "test" && password === "test") return true

    // return false

    if(!username) return 'username is required'
    if(!password) return 'password is required'

    const user = data.find(item => item.username === username)
    if (!user) return 'username or password is incorrect'

    const index = data.findIndex((item) => item.username === username)
    if (username === data[index].username && password === data[index].password ) return true

    return false
}

module.exports = login