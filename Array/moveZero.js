function moveZero(nums){
let p1=0;
// let p2=0;

for (let i=0;i<nums.length;i++){
    if(nums[i]!=0){
        nums[p1]=nums[i]
        p1++
    }
}
for(let i =p1;i<nums.length;i++){
    nums[i]=0
}
console.log(nums)
}
let a=[0,1,0,4,5]
moveZero(a)