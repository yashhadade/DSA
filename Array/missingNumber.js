function missingNumber(nums){
    let length=nums.length
    let sum =length+1    
    sum=length *sum 
    sum=sum/2;
    let sum2=0;
    for(let i=0;i<length;i++){
        sum2+=nums[i]
    }
    console.log(sum-sum2)
}
let a =[0,1,2,3,5]
missingNumber(a)