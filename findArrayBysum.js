function findSubarrayBySum(s, arr) {
    for (i = 0; i < arr.length; i++) {
        let sub_sum = 0
        for (j = i; j < arr.length; j++){
            if ((sub_sum += arr[j]) == s) {
                return [i+1, j+1]
            }
        } 
    }
    return [-1]
}

//For s = 21 and arr = [4, 8, 9, 10, 3, 8], the output should be
//findSubarrayBySum(s, arr) = [1, 3].

//The sum of elements from the 1st position to the 3rd position (1-based) is equal to 21: 4 + 8 + 9.