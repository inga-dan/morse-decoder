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
    let strMors = '';
    let sol = ''; 
    let a = expr.split('');
    for (let i = 1; i < expr.length; i++) {
        if (a[i] == '0' && a[i - 1] == '1') {
            strMors += '.';
            if (i % 10 == 9) {
                strMors += ',';
            }
            i += 1;
        }
        else if (a[i] == '1' && a[i - 1] == '1') {
            strMors += '-';
            if (i % 10 == 9) {
                strMors += ',';
            }
            i += 1;
        }
        else if (a[i] == '*' && a[i - 1] == '*') {
            strMors += ' ,';
            if (i % 10 == 9) {
                strMors += ',';
            }
            i += 9;
        }
        else if (a[i] == '*' && a[i - 1] != '*') {
            strMors += ' ,';
            if (i % 10 == 9) {
                strMors += ',';
            }
            i += 10;
        }
        else if (a[i] == '0' && a[i - 1] == '0') {
            if (i % 10 == 9) {
                strMors += ',';
            }
            i += 1;
        }
    }
    let words = strMors.split(',');
    for (let j = 0; j < words.length - 1; j++) {
        if (words[j] == ' '){
            sol += ' ';
            j++;
        }
        sol +=  MORSE_TABLE[words[j]];
    }
    return sol;
}

module.exports = {
    decode
}