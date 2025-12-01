function secondStartPattern(n){
    for (let i=0;i<n;i++){
        let row ="";
        for (let j=n;j>i;j--){
            row+=` ${"*"}` // or row +=" *"
        }
        console.log(row)
    }
}

secondStartPattern(5)

//  *
//  * *
//  * * *
//  * * * *

//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5