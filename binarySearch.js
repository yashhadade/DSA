function binarySerach(arr,target){
let l=0
let r=arr.length
let mid=(l+r)/2
while(l<=r){
    let mid = Math.floor((l + r) / 2);
   if(arr[mid]==target) return console.log(arr[mid],mid)

    if(arr[mid]<target){
        l=mid+1
    }
    else r=mid-1
}
return console.log("Target is not Present")
}

let a =[-1,0,2,5,9,12]

binarySerach(a,-1)