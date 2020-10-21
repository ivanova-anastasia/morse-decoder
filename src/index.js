const MORSE_TABLE = {
  " ": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

let toMorse = (value) => {
  switch (value) {
    case "00":
      return "";
    case "10":
      return ".";
    case "11":
      return "-";
    default:
      console.log("unknown value: " + value);
  }
};

function decode(expr) {
  let morseArr = expr.match(/.{10}/g).map((value) => {
    if (value === "**********") return " ";
    else {
      return value.match(/.{2}/g).map(toMorse).join("");
    }
  });

  return morseArr
    .map((letter) => {
      return MORSE_TABLE[letter];
    })
    .join("");
}

module.exports = {
  decode,
};
