function mergeSort(arr,st,mid,ed){
let i=st
let j=mid+1
let a=0
let temp =[]
while (i<=mid&&j<=ed){
   if(arr[i]<=arr[j]){
    temp[a++]=arr[i++]
   }else{
    temp[a++]=arr[j++]
   }
}
while (i<=mid){
    temp[a++]=arr[i++]
}
while (j<=ed){
    temp[a++]=arr[j++]
}
for (let x=0;x<temp.length;x++){
arr[st+x]=temp[x]
}
}
function sort(arr,st,ed){
    if(st>=ed) return
    let mid=Math.floor(st+((ed-st)/2))
    sort(arr,st,mid);
    sort(arr,mid+1,ed)
    mergeSort(arr,st,mid,ed)
    }
let a = [12, 31, 35, 8, 32, 17];
sort(a, 0, a.length - 1);
console.log(a);