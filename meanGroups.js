function meanGroups(a){
	let obj = {};
	for(let i = 0; i < a.length; i++) {
		if(!obj[calc_mean(a[i])]) {
			obj[calc_mean(a[i])] = [i];
		} else {
		obj[calc_mean(a[i])].push(i)
		}
	}
	return Object.values(obj)
}

// helper to calculate mean value for each array
function calc_mean(arr) {
	return (arr.reduce((acc, val) => acc + val) / arr.length ) 
}



let a = [[-5, 2, 3],
					[0, 0],
					[0],
					[-100, 100]];

console.log(meanGroups(a));//meanGroups(a) = [[0, 1, 2, 3]]

console.log(calc_mean([-5,2,3]))