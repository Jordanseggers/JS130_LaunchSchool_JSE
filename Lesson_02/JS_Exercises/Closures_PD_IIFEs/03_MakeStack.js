function newStack() {
  let stack = [];
  return {
    push(value) {
      stack.push(value);
    },
    
    pop() {
      return stack.pop();
    },
    
    printStack() {
      for(let i = stack.length; i >= 0; i-= 1) {
        console.log(stack[i]);
      }
    }
  };
}