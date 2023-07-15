'use strict';

function validateBrackets(str) {

  const stack = [];

  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    else if (char === ')' ||char === ']' || char === '}') {
      const openBracket = stack.pop(); //Pop the last opening bracket (openBracket) from the stack.
      // brackets[stack.pop()]
      //                (            }
      if (brackets[openBracket] !== char) // this to check if the closing bracket for openBracket in the brackets object matches char.
        return false;
    }
  }
  return stack.length === 0; //if the stack was empty
}






console.log("try 1 : {} the resulte is  " + validateBrackets("{}"));
console.log();

console.log("try 2 : {}(){} the resulte is  " + validateBrackets("{}(){}"));
console.log();

console.log("try 3 : ({[}]) the resulte is  " + validateBrackets("({[}])"));
console.log();

console.log("try 4 : ()[[Extra Characters]] the resulte is  " + validateBrackets("()[[Extra Characters]]"));
console.log();

console.log("try 5 : {}{Code}[Fellows](()) the resulte is  " + validateBrackets("{}{Code}[Fellows](())"));
console.log();

console.log("try 6 : [({}] the resulte is  " + validateBrackets("[({}]"));
console.log();

console.log("try 7 : (]( the resulte is  " + validateBrackets("(]("));
console.log();

console.log("try 8 : {(}) the resulte is  " + validateBrackets("{(})"));
console.log();

console.log("try 9 : { the resulte is  " + validateBrackets("{"));
console.log();

console.log("try 10 : ) the resulte is  " + validateBrackets(")"));
console.log();

console.log("try 11 : [} the resulte is  " + validateBrackets("[}"));


