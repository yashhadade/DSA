function fibonacciNumber (n){
    if(n==0||n==1)return n
    
    return fibonacciNumber(n-1)+fibonacciNumber(n-2)
}

let result =fibonacciNumber(6)
console.log(result)