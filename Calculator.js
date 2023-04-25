class Calculator {
    add(a, b) {
      return +a + +b;
    }
  
    subtract(a, b) {
      return +a - +b;
    }
  
    multiply(a, b) {
      return +a * +b;
    }
  
    divide(a, b) {
      const result = +a / +b;
      if (isNaN(result) || b === '0') {
        throw new Error('Invalid parameters');
      }
      return result;
    }
  }
  
export default new Calculator()
  