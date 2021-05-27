const { add , multi } = require('../my-test')

test('two plus two is four', () => {
    expect(add(2, 2)).toBe(4);
});

test('two multiple two is four', () => {
    expect(multi(2, 3)).toBe(6);
});
