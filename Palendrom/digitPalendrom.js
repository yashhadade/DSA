

function digitPalendrom(num){
let revserse=0
let isNegative=false
if(num<0){
    isNegative=true
}
num=Math.abs(num)
    while (num>0){
        let digit=num%10
        revserse=revserse*10 + digit
        num=Math.floor(num/10)
    }
     return console.log(isNegative?-revserse:revserse)
}
digitPalendrom(-143)