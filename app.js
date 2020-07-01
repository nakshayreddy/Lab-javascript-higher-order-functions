const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifiedFood = foods1.slice(1, 4);
console.log(modifiedFood);

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

isEven = (numberArray) => {
  var isEvenuumber = numberArray.filter((value) => {
    if (value % 2 == 0) return true;
    else return false;
  });
  return isEvenuumber;
};
console.log(isEven([2, 4, 9, 10]));

isPrime = (numberArray) => {
  var isprimenum = numberArray.filter((value) => {
    for (let i = 2; i <= value - 1; i++)
      if (value % i == 0) return true;
      else return false;
  });
  return isprimenum;
};
console.log(isPrime([1, 3, 4, 5, 6, 7]));

isEven = (numberArray) => {
  var Evennumber = numberArray.filter((value) => {
    if (value % 2 === 0) return true;
    else return false;
  });
  return Evennumber;
};
console.log(isEven([2, 4, 9, 10]));

const myArray = [11, 34, 20, 5, 53, 16];
let array = myArray.map(function (item) {
  return item * item;
});
console.log(array);

const myArray1 = [2, 3, 5, 10];
let mapreduce = myArray1
  .map(function (item) {
    return item;
  })
  .reduce(function (a, b) {
    return a * b;
  });
console.log(mapreduce);
