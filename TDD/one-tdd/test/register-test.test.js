const register = require("../register");

describe("Test function register", () => {
  test("if username, name are not empty and password is match, return true", () => {
    expect(register("เอ", "pass1234", "pass1234", "A")).toBe(
      "username can not be alphanumeric"
    );
  });
  test("if username, name are not empty and password is match, return true", () => {
    expect(register("test5", "pass1234", "pass1234", "A")).toBe(true);
  });
  test('if username is already used, return "username is already used"', () => {
    expect(register("test", "pass1234", "pass1234", "A")).toBe(
      "username is already used"
    );
  });

  test('if username is empty, return "username is required"', () => {
    expect(register("", "pass1234", "pass1234", "A")).toBe(
      "username is required"
    );
  });

  test('if password is empty, return "password is required"', () => {
    expect(register("test6", "", "pass1234", "A")).toBe("password is required");
  });

  test('if confirm password is empty, return "confirm password is required"', () => {
    expect(register("test6", "pass1234", "", "A")).toBe(
      "confirm password is required"
    );
  });

  test('if name is empty, return "name is required"', () => {
    expect(register("test6", "pass1234", "pass1234", "")).toBe(
      "name is required"
    );
  });

  test('if password and confirm password are not match, return "password and confirm password is not match"', () => {
    expect(register("test6", "pass1234", "pass4567", "B")).toBe(
      "password and confirm password is not match"
    );
  });

  test('if password is lower than 8 characters, return "password can not lower than 8 characters"', () => {
    expect(register("test6", "pass12", "pass12", "a")).toBe(
      "password can not lower than 8 characters"
    );
  });
});
