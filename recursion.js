// function fun(num){
//     if(num==0) return // Base Case   
//     console.log(num)
//     num--;
//     fun(num)
// }
// fun(1000)


function sum(num){
    if(num==1) return 1;
    return num * sum(num - 1)
}
let result =sum(5)
console.log("result", result)

// let a =[5,2,3,4,0]
// function sumOfArray(num){
//     if (num ==0) return a[0];
//     return a[num] + sumOfArray(num-1)
// }
// let result =sumOfArray(a.length-1)
// console.log("result", result)

// function sumOfOddNumbers (num){
//     let isOdd=(a[num]%2 !=0);
//     if(num==0){
//         if(isOdd){
//             return a[num]
//         }
//         else{
//             return 0
//         }
//     }
//     if (isOdd){
//         return a[num] + sumOfOddNumbers(num-1)
//     }else{
//         return sumOfOddNumbers(num -1)
//     }
// }

// let result =sumOfOddNumbers(a.length-1)
// console.log("result", result)

