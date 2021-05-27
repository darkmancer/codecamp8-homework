const login = require('../login')

test('if username and password are correct, return true', () => {
    expect(login("test", "test")).toBe(true)
})

test('if username and password are correct, return false', () => {
    expect(login("test", "xxxx")).toBe(false)
})

test('if username is empty, return username is required', () => {
    expect(login("", "xxxx")).toBe('username is required')
})

test('if password is empty, return password is required', () => {
    expect(login("test", "")).toBe('password is required')
})

test('if username is incorrect, return username or password is incorrect', () => {
    expect(login("asb", "pass12")).toBe('username or password is incorrect')
})
