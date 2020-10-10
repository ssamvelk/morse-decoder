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
  const len = expr.length
  const answer = []
    
  for(let i = 0; i < len; i = i + 10) {
    let x = expr.slice(i, i+10)

    if (x === '**********') x = ' '
    else {
      let y = ''
      for(let i = 0; i < x.length; i = i + 2) {
        if (x.slice(i,i+2) === '10') y += '.'
        else if (x.slice(i,i+2) === '11') y += '-'
      }
      x = y
    }
    answer.push(x)
  }

  for(let i = 0; i < answer.length; i = i + 1) {
    if (answer[i] === ' ') continue
    answer[i] = MORSE_TABLE[answer[i]]
  }

  return answer.join('')
}

module.exports = {
    decode
}