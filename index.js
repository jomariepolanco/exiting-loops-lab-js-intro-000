function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] < stopValue) {
      array[i] = changeValue;
    } else if (array[i] >= stopValue) {
      break
    }
  }
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue;
    }
  }
}

function findBy(array, findFn) {

}
