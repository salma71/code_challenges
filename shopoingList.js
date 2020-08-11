function shoppingList(items) {
    let res = 0;
		let temp = items.replace(/[^0-9.]+/g, " ").replace('..','').split(' ')
		console.log(temp)
		// for(let i in temp){
		// 	if(te)
		// }
    let prices =/^\d+(\.\d{1,2})?$/
    for(let i in temp){
        if(prices.test(temp[i])){
            res += parseFloat(temp[i]);
        }
    }
    return res;
}

let items = "wanna 22.2&15.3olo 0.00 and 12.12kk0.02 ..34"
console.log(shoppingList(items))