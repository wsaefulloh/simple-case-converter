const { sentenceCase, capitalizeEachWord } = require('../index');

describe('sentenceCase', () => {
    test('should capitalize first letter', () => {
        expect(sentenceCase('hello world')).toBe('Hello world');
    });

    test('should add period when option enabled', () => {
        expect(sentenceCase('hello world', { period: true }))
            .toBe('Hello world.');
    });

    test('should trim whitespace', () => {
        expect(sentenceCase('   hello world   '))
            .toBe('Hello world');
    });

    test('should throw error for non-string input', () => {
        expect(() => sentenceCase(123))
            .toThrow(TypeError);
    });
});

describe('capitalizeEachWord', () => {
    test('should capitalize each word', () => {
        expect(capitalizeEachWord('hello world'))
            .toBe('Hello World');
    });

    test('should add period when option enabled', () => {
        expect(capitalizeEachWord('hello world', { period: true }))
            .toBe('Hello World.');
    });

    test('should handle multiple spaces', () => {
        expect(capitalizeEachWord('hello    world'))
            .toBe('Hello World');
    });

    test('should throw error for non-string input', () => {
        expect(() => capitalizeEachWord(null))
            .toThrow(TypeError);
    });
});
