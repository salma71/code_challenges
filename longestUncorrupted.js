function longestUncorruptedSegment(sourceArray, destinationArray) {
    // return array [length of longest uncorp array, start index of the original one]
    let res = [0,0];
    // compare each element in source arr with the corresd dest array 
        // if equal, 
        // store the index in the a temp variable
        // slice the remaining array and loop over comparing the rest of element
            // if true
            // push in a temp array 
	let length = 0;
	let ind = 0;
	let arr = [];
	let count = 0;
	if(sourceArray[0] === destinationArray[0]){
		for(let j = 0; j < sourceArray.length; j++){
			if(sourceArray[j] === destinationArray[j] 
			&& sourceArray[j+1] === destinationArray[j+1]){
				if(count > )
				arr.push(j)
				count = arr.length
			}
		}
	res[0] = arr.length;
	res[1] = arr[0]
	}
	return res
}


let sourceArray = [99919628, 77504204, 18846830, 86785029, 86230362, 96953294, 53208680, 95327090, 68996760, 26366538, 90490275, 62583792, 87514087, 96921389, 21309822]

let destinationArray= [99919628, 77503204, 18546830, 86785029, 86230362, 96953264, 53208680, 95327090, 68996760, 26366538, 90420275, 62583792, 87514087, 39692139, 21303822]

console.log(longestUncorruptedSegment(sourceArray, destinationArray))