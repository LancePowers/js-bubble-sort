function bubbleSort(arr){
  var newArr = [];
  while (arr.length) {
    var largest = Math.max();
    var position = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] > largest){
        largest = arr[i];
        position = i;
      }
    }
    newArr.push(arr.splice(position,1)[0]);
  }
  return newArr.reverse();
}

module.exports = bubbleSort;
