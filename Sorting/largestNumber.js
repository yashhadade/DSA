var largestNumber = function(nums) {
    mergeSort(nums,0,nums.length-1)
        if (nums[0] === "0") return "0";

    return nums.join("");

};

function mergeSort(nums,st,ed){
    if (st>=ed)return
        let mid =Math.floor(st+(ed-st)/2)
        mergeSort(nums,mid+1,ed)
        mergeSort(nums,st,mid)
        merge(nums,st,mid,ed)
}
function merge(nums,st,mid,ed){
    let i=st;
    let j=mid+1
    let temp=[]
    while (i<=mid&&j<=ed){
        let a=nums[i].toString()
        let b=nums[j].toString()
        if(a+b>=b+a){
        temp.push(nums[i++]);
        }else{
            temp.push(nums[j++])
        }
    }
    while (i<=mid){
        temp.push(nums[i++]);
    }
     while (j<=ed){
        temp.push(nums[j++])
    }
    for (let i=0;i<temp.length;i++){
        nums[st+i]=temp[i]
    }
}
let nums = [10,2]

largestNumber(nums)
