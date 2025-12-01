function conciCativeOnce (nums){
    let p1 =0;
    let p2=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]==1){
            p1++
        }else {
            p2=Math.max(p2,p1)
            p1=0
        }
    }
    console.log(Math.max(p2,p1))
    
}
let a =[1,1,0,1,1,1,0,1,1,0,1,1,1,1,1]
conciCativeOnce(a)