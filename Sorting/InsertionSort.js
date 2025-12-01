function InsertionSort (arr){
   
   for (let i=1;i<arr.length;i++){
    let curr=a[i];
    let prev=i-1;
    while(prev>=0 && arr[prev]>curr){
        arr[prev+1]=arr[prev]
        prev--
    }
    arr[prev+1]=curr
   }
   console.log(arr)
}

a=[40,20,60,10,50,30]
InsertionSort(a)