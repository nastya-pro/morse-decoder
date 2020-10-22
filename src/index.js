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

function splitExpression(expr) {
    let arr = []
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }
    return arr
}

function transform(el){
    if (el==="**********"){return el}
    let result=""
    for(let i=0;i<el.length;i+=2){
        let pair=el.slice(i,i+2)
        if(pair==="10"){
            result+="."
        } else if(pair==="11"){
            result+="-"
        }
    }
    return result
}

function codeToChar(code){
    if (code==="**********"){
        return " "
    } else {
        return MORSE_TABLE[code]
    }
}

function decode(expr) {
    let splitted = splitExpression(expr)
    let codes = splitted.map(transform)
    return codes.map(codeToChar).join("")
}

module.exports = {
    decode
}