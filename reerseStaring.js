
function revserseString(str){
   for(let i=0;i<str.length/2;i++){
        let b=str[i]
        str[i]=str[str.length-1-i];
        str[str.length-1-i]=b
   } 
   console.log(str)
}
let a= ["h","e","l","l","o"]
revserseString(a)

