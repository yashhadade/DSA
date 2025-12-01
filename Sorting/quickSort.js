function quickSort(arr,st,end){
    if(st<end){
        let pivIndex=partition(arr,st,end)
        quickSort(arr,st,pivIndex-1);
        quickSort(arr,pivIndex+1,end);
    }
    return arr
}
function partition(arr,start,end){
    let idx=start-1
    let pivot=arr[end]
    for (let i=start;i<end;i++){
        if(arr[i]<=pivot){
            idx++
            let temp=arr[idx]
            arr[idx]=arr[i];
            arr[i]=temp
        }
    }
    idx++;
    let temp=arr[end]
    arr[end]=arr[idx]
    arr[idx]=temp
    return idx
}
let nums=[5,2,6,4,1,3]

let result =quickSort(nums,0,nums.length-1)
console.log(result)