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
    let exprArr = expr.split('');
    let result = '';
    let currentLetter;
    for(let i = 0; i < exprArr.length; i += 10) {
        currentLetter = '';
        for(let j = i; j < i + 10; j += 2) {
            if(exprArr[j] === '*') {
                currentLetter = ' ';
            } else if(exprArr[j] === '0') {
            } else if(exprArr[j+1] === '0') {
                currentLetter += '.';
            } else {
                currentLetter += '-';
            }
        }
        if(currentLetter === ' ') {
            result += ' ';
        } else {
            result += MORSE_TABLE[currentLetter];
        }
    }
    return result;
}

module.exports = {
    decode
}