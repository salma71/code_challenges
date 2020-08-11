function concatenationsSum(a){
	let res = []
	let temp = a.slice(0)
	for(let i = 0; i < a.length; i++){
		for(let j = 0; j < temp.length ; j++) {
				res.push(a[i].toString() + a[j].toString());
			}
		}
	return concat_arr(res);
}

let a = [11, 22];
let arr = [ '1111', '1122', '2211', '2222' ];

// helper function to add all elements in the resulting array
function concat_arr(arr){
	return (Array.from(arr, Number).reduce((a, b) => a + b));
}
console.log(concatenationsSum(a)) //6666