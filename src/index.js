const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = expr.split("");
    const code = [];
    for (let i = 0; i < arr.length; i += 10) {
      code.push(arr.slice(i, i + 10));
    }
    const transarr = code.map(x => x.join("").match(/(11|10)/gm)).map(x => x === null ? " " : x.map(y => +y === 10 ? "." : "-"));
    let result = '';
    transarr.map(x => x === " " ? (result += " ") : (result += MORSE_TABLE[x.join("")]));
    return result;
  }
module.exports = {
    decode
}