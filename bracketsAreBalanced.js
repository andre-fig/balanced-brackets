function bracketsAreBalanced(str) {
    const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '['
    };
    const stack = [];
  
    for (const char of str) {
      if (char in bracketPairs) {
        if (stack.pop() !== bracketPairs[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }