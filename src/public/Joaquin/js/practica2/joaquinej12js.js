function reduce(array, binaryOperation, initialValue){
    let total = initialValue;
    for (let i = 0; i < array.length; i++) {
      total = binaryOperation(total, array[i]);
    }
    return total;
   }
   