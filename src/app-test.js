const sum = {};

sum.validate = (firstNumber, secondNumber)=>{
  if (firstNumber === null || secondNumber === null || typeof firstNumber === 'undefined' || typeof secondNumber === 'undefined') {
    return 'Error';
  }
  return firstNumber + secondNumber;
};

module.exports = sum;