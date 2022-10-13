const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// There is an array I want you to grab a middle element and move it to the left.
// stop when that middle element is at its most left
// console logging it every time a move has been made
// [1, 2, 3, 4, 5, 6, 7, 8, 10] <----- starting
// [1, 2, 3, 5, 4, 6, 7, 8, 10]
// [1, 2, 5, 3, 4, 6, 7, 8, 10]
// [1, 5, 2, 3, 4, 6, 7, 8, 10]
// [5, 1, 2, 3, 4, 6, 7, 8, 10]

function moveCenterToLeft(numberArray) {
    if(numberArray.length % 2 === 1) {
        counter = Math.floor((numberArray.length / 2))
        for (let i=0; i<counter; i=i) {
            let holdLeft = numberArray[counter-1];
            let middleNumber = numberArray[counter]
            numberArray.splice(counter-1, 2, middleNumber, holdLeft)
            counter--;
            console.log(numberArray)
        }
    } else {
        counter = Math.floor((numberArray.length / 2))
        for (let i=0; i<counter; i=i) {
            let holdLeft = numberArray[counter-1];
            let middleNumber = numberArray[counter]
            let rightNumber = numberArray[counter + 1]
            numberArray.splice(counter-1, 3, middleNumber,rightNumber,holdLeft)
            counter--;
            console.log(numberArray)
        }
    }
}

moveCenterToLeft(arr)