function removeDublicateFromSortedArray(num,val){
 let x=0;
 for (let i=0;i<num.length;i++){
    if(num[i]!=val){
        num[x]=num[i];
        x=x+1;
    }
 }
 console.log(x)
}

let a=[1,2,3,4,5,6,7,8,9]

removeDublicateFromSortedArray(a,3)
