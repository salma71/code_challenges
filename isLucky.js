function isLucky(n) {
    let arrayOfDigits = Array.from(String(n), Number);
    let half_2 = arrayOfDigits.slice((arrayOfDigits.length)/2)
		let half_1 = arrayOfDigits.slice(0, (arrayOfDigits.length)/2)
		console.log(half_2)
		console.log(half_1)
    let add_1 = half_1.reduce((a, b) => a + b)
    let add_2 = half_2.reduce((a,b) => a + b)
    if(add_1 === add_2){
        return true;
    }
    return false;
}

let n = 1230;

console.log(isLucky(n))