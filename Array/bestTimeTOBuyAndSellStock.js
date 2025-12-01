function bestTimeTOBuyAndSellStock (price){
    // O(2n) time Complexity
    // let max=0;
    // for(let i=0;i<price.length-1;i++){
    //     for (let j=i+1;j<price.length;j++){
    //         let profit=price[j]-price[i]
    //         max=Math.max(max,profit)
    //     }
    // }
    // console.log("max",max)

    let min=price[0];
    let maxProfit=0
    for (let i=0;i<price.length;i++){
        min=Math.min(min,price[i])
        maxProfit=Math.max(maxProfit,price[i]-min)
    }
    console.log("maxProfit = "+maxProfit)
    
}

let a=[7,6,5,4,3,2,1]
bestTimeTOBuyAndSellStock(a)