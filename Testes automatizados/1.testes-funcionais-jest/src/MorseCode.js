class MorseCodeConverter {
  constructor() {
    this.morseDict = {
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--..",
      0: "-----",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      " ": "/",
    };
  }

  toMorse(text) {
    text = text.toUpperCase();
    let morseCode = [];
    for (const char of text) {
      if (!(char in this.morseDict)) {
        throw new Error(`Unsupported character: ${char}`);
      }
      morseCode.push(this.morseDict[char]);
    }
    return morseCode.join(" ");
  }
}

module.exports = MorseCodeConverter;
