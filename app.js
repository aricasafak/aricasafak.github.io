//let arry = [4,76,23,89,43,2,23233,76,68,342,123,7,79,435,4614,5,9356,5,15234,123]
let arry = [{name:"peter",salary: 100},{name:"peter",salary: 200},{name:"peter",salary: 400}]
//let result = arry.reduce(function(prev, element, index, array) {
//   return element > prev ? element : prev;
//}, 0);
let result = arry.reduce(function(prev, element, index, array) {
   return prev + element.salary;
}, 0);
console.log(result)

let array2 = [[4,5], [6,7,8,9],[6,7,8,99]];
let result2 = array2.reduce(function(prev, element){
   return prev + element.reduce(function(prev2, element2){
      return prev2 + element2;
   }, 0);
},0)

console.log(result2);