/*  A regular expression (or regex) is a sequence of characters that forms a search pattern.

Character classes:
.: Matches any character except newline.
\w: Matches any word character (letters, digits, or underscores).
\d: Matches any digit (0-9).
\s: Matches any whitespace character (space, tab, newline).
\W: Matches any non-word character.
\D: Matches any non-digit character.
\S: Matches any non-whitespace character.
[abc]: Matches any of the characters ‘a’, ‘b’, or ‘c’.
[^abc]: Matches any character except ‘a’, ‘b’, or ‘c’.
[a-g]: Matches any character between ‘a’ and ‘g’.

Anchors:
^abc$: Matches the string that starts and ends with “abc”.
\b\B: Matches a word boundary (between word and non-word characters).

Escaped characters:
\.\*\\: Escapes special characters (‘.’, ‘*’, and '').

Groups & Lookaround:
(abc): Captures the group “abc”.
\1: Backreference to group #1.
(?:abc): Non-capturing group.
(?=abc): Positive lookahead for “abc”.
(?!abc): Negative lookahead for “abc”.
*/

const regexDot = /./;
const regexWord = /\w/;
const regexDigit = /\d/;
const regexWhitespace = /\s/;
const regexNonWord = /\W/;
const regexNonDigit = /\D/;
const regexNonWhitespace = /\S/;
const regexABC = /[abc]/;
const regexNotABC = /[^abc]/;
const regexRange = /[a-g]/;

const sampleText = "The quick brown fox jumps over the lazy dog.";

// Dot: Matches any character except newline
console.log("Occurrences of 'i':", sampleText.match(/i/g));

// Word character: Matches any word character (letters, digits, or underscores)
console.log("Word characters:", sampleText.match(/\w/g));

// Digit: Matches any digit (0-9)
console.log("Digits:", sampleText.match(/\d/g));

// Whitespace: Matches any whitespace character (space, tab, newline)
console.log("Whitespace characters:", sampleText.match(/\s/g));

// Non-word character: Matches any non-word character
console.log("Non-word characters:", sampleText.match(/\W/g));

// Non-digit character: Matches any non-digit character
console.log("Non-digit characters:", sampleText.match(/\D/g));

// Non-whitespace character: Matches any non-whitespace character
console.log("Non-whitespace characters:", sampleText.match(/\S/g));

// Matches 'abc': Find occurrences of the substring "abc"
console.log("Occurrences of 'abc':", sampleText.match(/abc/g));

// Matches '^abc$': Check if the string starts and ends with "abc"
console.log("Starts and ends with 'abc':", /^abc$/.test(sampleText));

// Word boundary: Find word boundaries
console.log("Word boundaries:", sampleText.match(/\b\B/g));

// Escaped characters: Replace escaped characters
console.log("Escaped characters:", sampleText.replace(/\.\*\\/g, "ESCAPED"));

// Captured group: Capture the word "brown"
const re = /quicks(?<color>brown).+?(jumps)/dgi;
const result = re.exec(sampleText);
console.log("Color captured group:", result.groups.color);


