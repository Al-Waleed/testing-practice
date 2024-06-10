import {
  capitalize,
  reverseString,
  reverseWord,
  calculator,
  cipher,
  analyzeArray,
} from "./index";

test("capitalize", () => {
  expect(capitalize("waleed")).toBe("Waleed");
});

test("reverse", () => {
  expect(reverseString("waleed")).toBe("deelaw");
});

test("reverse words", () => {
  expect(reverseWord("waleed tariq")).toBe("deelaw qirat");
});

test("calculator add function", () => {
  expect(calculator.add(5, 6)).toBe(11);
});

test("calculator subtract function", () => {
  expect(calculator.sub(5, 6)).toBe(-1);
});

test("calculator multiply function", () => {
  expect(calculator.multiply(5, 6)).toBe(30);
});

test("calculator divide function", () => {
  expect(calculator.divide(12, 6)).toBe(2);
});

test("Caesar cipher", () => {
  expect(cipher("ab c", 3)).toBe("de f");
});

test("Caesar cipher", () => {
  expect(cipher("hi this is me", 3)).toBe("kl wklv lv ph");
});

test("Caesar cipher", () => {
  expect(cipher("hi this is me", 7)).toBe("op aopz pz tl");
});

test("Caesasr cipher", () => {
  expect(cipher("abcdefghijklmnopqrstuvwxy   z", 102)).toBe(
    "yzabcdefghijklmnopqrstuvw   x"
  );
});

test("Caesar cipher", () => {
  expect(cipher("hi THIS is me", 7)).toBe("op AOPZ pz tl");
});

test("Caesar cipher", () => {
  expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze 2", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6, 0, 0, 0,1])).toEqual({
    average: 2.5,
    min: 0,
    max: 8,
    length: 10,
  });
});
