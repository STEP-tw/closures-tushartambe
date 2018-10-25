const makeConstant = function(anyInput) {
  const constantInput = anyInput;
  return function() {
    return constantInput;
  }
}

const makeCounterFromN = function(counter) {
  return function() {
    return counter++;
  }
}

const makeCounterFromZero = function() {
  let counter = 0;
    return function() {
    return counter++;
  }
}
const makeDeltaTracker = function(initialValue) {
  return function(deltaValue) {
    
    if(!deltaValue) {
      deltaValue = 0;
    }

    return {old:initialValue, delta:deltaValue, new:initialValue = (initialValue+deltaValue)};
  }
}

const firstTermForCalculation = function(firstTerm,secondTerm) {
  return firstTerm - secondTerm;
}

const secondTermForCalculation = function(firstTerm,secondTerm) {
  return secondTerm - firstTerm;
}
const makeFiboGenerator = function(firstTerm,secondTerm) {
  if(!firstTerm && !secondTerm) {
    firstTerm = 0;
    secondTerm = 1;
  }
  if(!secondTerm) {
    secondTerm = firstTerm;
    firstTerm = 0;
  }

  secondTerm = secondTermForCalculation(firstTerm,secondTerm);
  firstTerm = firstTermForCalculation(firstTerm,secondTerm);

  return function() {
    result = firstTerm+secondTerm;
    firstTerm = secondTerm;
    secondTerm = result;
    return result = result;
  }
}

const makeCycler = function(chain) {
  rotatePoint = 0;
  let originalChain = [];
  for(let counter=0;counter<chain.length;counter++) {
    originalChain[counter] = chain[counter];
  }

  const arrayLength = originalChain.length;
  return function() {
    if(rotatePoint == arrayLength) {
      rotatePoint = 0;
    }
    result = originalChain[rotatePoint];
    rotatePoint ++;
    return originalChain[rotatePoint-1];
  }
} 

const curry = function(actionToDo,doWith) {
  return function(firstElement,secondElement) {
    return actionToDo(doWith,firstElement,secondElement);
  }
}

const compose = function(firstAction,secondAction) {
  return function(firstDataSet,sendDataSet) {
    let result = secondAction(firstDataSet,sendDataSet);
    return firstAction(result);
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
