const { divide, multiply } = require('./calculator');

describe('divide()', () => {
  test('divides 6 by 3 to get 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});

describe('multiply()', () => {
  test('multiplies 2 by 3 to get 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies by 0 to get 0', () => {
    expect(multiply(10, 0)).toBe(0);
  });
});
