
function singleNumber (nums){
let result=nums[0]
for (let i=1;i<nums.length;i++){
    result ^=nums[i]
}
console.log(result);

}

let a =[1,1,2,4,4,5,5]
singleNumber(a)