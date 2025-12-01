var findDuplicates = function(nums) {
let temp={}
 for (let i=0;i<nums.length;i++){
    let b=nums[i]
    if(temp[b]){
        temp[b]+=1;
    }else{
        temp[b]=1
    }
 }
 let values =Object.keys(temp)
 nums.length=0
 for (let i=0;i<values.length;i++){
    let val=values[i]
    if(temp[val]==2){
        nums.push(Number(val))
    }
 }
 console.log(nums)
};
let nums = [4,3,2,7,8,2,3,1];
findDuplicates(nums)