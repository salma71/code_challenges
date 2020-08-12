function isCryptSolution(crypt, solution) {
    function decrypt(str){
        str = str.split("")
        for(var i in str){
            str[i] = solution2[str[i]]
        }
        return parseInt(str.join(""))
    }
    
    var solution2 = {}
    var zeros = []
    for(var i in solution){
        solution2[solution[i][0]] = solution[i][1]
        if(solution[i][1] == "0") zeros.push(solution[i][0])
    }
    return decrypt(crypt[0]) + decrypt(crypt[1]) == decrypt(crypt[2]) 
           && (zeros.indexOf(crypt[0][0]) == -1 || crypt[0].length == 1)
           && (zeros.indexOf(crypt[1][0]) == -1 || crypt[1].length == 1)
           && (zeros.indexOf(crypt[2][0]) == -1 || crypt[2].length == 1)
}