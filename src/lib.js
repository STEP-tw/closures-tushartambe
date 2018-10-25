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

const makeFiboGenerator = undefined;
const makeCycler = undefined;

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
