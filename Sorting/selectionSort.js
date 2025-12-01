function selectionSort (arr){
    let n=arr.length
    for (let i=0;i<n-1;i++){
        let min=i
        for (let j=i+1;j<n;j++){
            if(a[j]<a[min]){
                a[j]=a[j]^a[min]
                a[min]=a[j]^a[min]
                a[j]=a[j]^a[min]
            }
        }
    }
    return console.log(arr)
}


let a=[4,2,1,0]
selectionSort(a)