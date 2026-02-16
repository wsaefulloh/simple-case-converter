'use strict';

function assertString(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Parameter must be a string');
    }
}

function ensurePeriod(text) {
    return text.endsWith('.') ? text : text + '.';
}

function applyOptions(text, { period = false } = {}) {
    return period ? ensurePeriod(text) : text;
}

function capitalizeFirstChar(text) {
    if (!text) return text;

    return text.charAt(0).toUpperCase() + text.slice(1);
}

function sentenceCase(text, options = {}) {
    assertString(text);

    const trimmed = text.trim();
    if (!trimmed) return trimmed;

    const formatted = capitalizeFirstChar(trimmed);

    return applyOptions(formatted, options);
}

function capitalizeEachWord(text, options = {}) {
    assertString(text);

    const trimmed = text.trim();
    if (!trimmed) return trimmed;

    const formatted = trimmed
        .split(/\s+/)
        .map(capitalizeFirstChar)
        .join(' ');

    return applyOptions(formatted, options);
}


const simpleCaseConverter = {
    sentenceCase,
    capitalizeEachWord
};

module.exports = simpleCaseConverter;