function countTinyPairs(a, b, k) {
	let count = 0; // store how many tiny pairs
	let a_len = a.length - 1
	// console.log(a_len)
	for (let i = 0; i < a.length; i++){
		if(a[i].toString() + b[a_len - i].toString() < k){
			count += 1
		}
	}
	return count;
}


let a = [124,24,30]
let b = [11,2,32]
let k = 897
console.log(countTinyPairs(a, b, k))