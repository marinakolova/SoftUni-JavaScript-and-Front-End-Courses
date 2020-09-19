function biggerNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    
    if(firstNumber >= secondNumber){
        return firstNumber;
    }
    else{
        return secondNumber;
    }
  }