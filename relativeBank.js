var findRelativeRanks = function(score) {
    let n = score.length;

    let arr= score.map((val,idx)=>[val,idx])
    console.log("arr",arr)
    let ans=Array(n)
    // arr.sort((a,b)=>b[0]-b[0])
    // // Create array of [score, index]
    // let arr = score.map((val, idx) => [val, idx]);

    // // Sort by score in descending order
    let sortedArry=arr.sort((a, b) => b[0] - a[0]);
    console.log("sortedArry",sortedArry)
    // // let ans = Array(n);

    for (let i = 0; i < n; i++) {
        console.log("ans",ans)
        let index = arr[i][1];
        console.log(index)
        
        if (i === 0) ans[index] = "Gold Medal";
        else if (i === 1) ans[index] = "Silver Medal";
        else if (i === 2) ans[index] = "Bronze Medal";
        else ans[index] = (i + 1).toString(), console.log("else",i)
    }

    return console.log(ans.length,ans);
};
let score = [5,4,3,2,1]
findRelativeRanks(score)