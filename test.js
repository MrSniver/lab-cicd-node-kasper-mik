const { add, subtract, multiply } = require('./app');

describe('Calculator Functions', () => {
    test('add: 2 + 2 should equal 4', () => {
        expect(add(2, 2)).toBe(4);
    });

    test('add: -1 + 1 should equal 0', () => {
        expect(add(-1, 1)).toBe(0);
    });

    test('subtract: 5 - 3 should equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('subtract: 10 - 5 should equal 5', () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test('multiply: 3 * 4 should equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiply: -2 * 5 should equal -10', () => {
        expect(multiply(-2, 5)).toBe(-10);
    });
});