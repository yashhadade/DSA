function removeDublicateFromSortedArray(num){
 let x=0;
 for (let i=0;i<num.length;i++){
    if(num[i]>num[x]){
        x=x+1;
        num[x]=num[i]
    }
 }
 console.log(x+1)
}

let a=[1,2,3,3,4,4,5,5,6,7,7,8,8,9,9]

removeDublicateFromSortedArray(a)
