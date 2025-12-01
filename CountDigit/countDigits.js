
function CountDigit(num) {
    let count =0
    if(num===0){
        count ++
    }
    num=Math.abs(num)
    while (num >0) {
        num=Math.floor(num/10)
        count++;
    }
    console.log(count);
    
}
let num =-1
CountDigit(num)

