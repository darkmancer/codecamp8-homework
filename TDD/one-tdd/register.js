const db = require('./db')
const data = db()

function register(username, password, confirmPassword, name) {
    if(!username) return 'username is required'
    if(!password) return 'password is required'
    if(!confirmPassword) return 'confirm password is required'
    if(!name) return 'name is required'
    if(!username.match(/^[0-9a-zA-Z]+$/)) return 'username can not be alphanumeric'

    const user = data.find(item => item.username === username)
    if (user) return 'username is already used'

    if (password.length < 8) return 'password can not lower than 8 characters'
    

    if (password !== confirmPassword) return 'password and confirm password is not match'

    if (password === confirmPassword) return true 

    return false
}


module.exports = register