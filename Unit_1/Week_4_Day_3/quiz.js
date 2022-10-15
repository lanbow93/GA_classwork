let numberArray = [3,2,4];


var twoSum = function(nums, target) {
    //Defining variables I need outside of the loop
    let firstNumber;
    let secondNumber;


    for (let num = 0; num < nums.length; num++) {
      compare = target - nums[num]
         for(let pairNumber = 0; pairNumber < nums.length; pairNumber++) {
            if (pairNumber !== num) {
                if (compare === nums[pairNumber]) {
                    return [num, pairNumber]
                } 
            }
        }
    }
};

console.log(twoSum(numberArray,6));