function mutateTheArray(a, n){
	let b = new Array(n);

	for(let i = 0; i <= n-1; i++){
		if(a[i - 1] === undefined){
			a[i - 1] = 0;
		} else if(a[i + 1] === undefined){
			a[i + 1] = 0
		}
		b[i] = a[i - 1] + a[i] + a[i + 1]
		}
	return b;
}

const a = [4 ,-5 ,0 ,-1 ,1]
const n = 5

console.log(mutateTheArray(a, n))