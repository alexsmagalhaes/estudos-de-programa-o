const MorseCode = require("./MorseCode");

describe("Testes com o código Morse", () => {
  let converter;

  beforeEach(() => {
    converter = new MorseCode();
  });

  it("Conversão para código Morse", () => {
    expect(converter.toMorse("Alex")).toBe(".- .-.. . -..-");
  });

  it("Conversão com caractere não definido", () => {
    const char = "[";

    expect(() => converter.toMorse(char)).toThrow(
      `Unsupported character: ${char}`
    );
  });
});
