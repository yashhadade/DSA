
function isPowerOfTwo(n){

    if(n==0||n==1) return n

    return isPowerOfTwo(n/2)

}
let result =isPowerOfTwo(538721)?true :false

console.log("result "+result)