const arr = [1, 2, [3, 4, [5, 6]], [7, 8]];
//How to get the number 6
console.log(arr[2][2][1]);

//How to get the number 8
console.log(arr[3][1]);

// Google the array sort method and sort this array [5,4,3,2,1]
let arrToSort = [5, 4, 3, 2, 1];
arrToSort.sort();
console.log(arrToSort);

//google the array slice method and grab the middle three elements of this array [2,3,3,3,4]
let arrToSlice = [2, 3, 3, 3, 4];
const slicedArray = arrToSlice.slice(1, 4);

// google the array indexOf method and find the index of the number 7 in this array [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1]
let arrToSearch = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];
let foundSeven = arrToSearch.indexOf(7);

//google the string split method take the string "Hello World" and turn it into an array of letters
let strToSplit = "Hello World";
let strSplit = strToSplit.split(" ").join("").split("");
console.log(strSplit);

//google the array join method and turn this array into a word ["s","u","c","c","e","s"]
let strToJoin = ["s", "u", "c", "c", "e", "s", "s"];
let joinedStr = strToJoin.join("");
