import "./style.css";

export function capitalize(str) {
  const splitted = str.split("");
  splitted[0] = splitted[0].toUpperCase();
  return splitted.join("");
}

export function reverseString(str) {
  const splitted = str.split("");
  const reversed = splitted.reverse();
  return reversed.join("");
}

export function reverseWord(str) {
  const splittedWords = str.split(" ");
  const result = [];
  splittedWords.forEach((word) => {
    const arr = [...word];
    result.push(arr.reverse().join(""));
  });
  let finalResult = "";
  result.forEach((word, index) => {
    if (result.length - 1 === index) {
      finalResult = finalResult + word;
    } else {
      finalResult = finalResult + word + " ";
    }
  });
  return finalResult;
}

export const calculator = {
  add(a, b) {
    return parseInt(a) + parseInt(b);
  },
  sub(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export function cipher(str, key) {
  const splitted = [...str];
  let result = "";
  splitted.forEach((char) => {
    while (key > 26) key -= 26;
    // for upper case letters
    if (upperAlphabet.includes(char)) {
      let charIndex = upperAlphabet.indexOf(char) + key;
      if (charIndex > 25) charIndex -= 26;
      result += upperAlphabet[charIndex];
      // for small case letters
    } else if (alphabet.includes(char)) {
      let charIndex = alphabet.indexOf(char) + key;
      if (charIndex > 25) charIndex -= 26;
      result += alphabet[charIndex];
      // for any character that's not a letter
    } else {
      result += char;
    }
  });

  return result;
}

export function analyzeArray(arr) {
  const results = {
    average: 0,
    min: 9999999999999999999999999999999999,
    max: 0,
    length: 0,
  };

  let sum = 0;
  arr.forEach((num) => {
    sum += num;
    if (results.min > num) results.min = num;
    if (results.max < num) results.max = num;
    results.length = arr.length;
  });

  results.average = sum / results.length;

  return results;
}
