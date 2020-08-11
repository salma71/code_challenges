function isListPalindrome(l) {
    let curr = l;
    let arr = [];
    
    if(l == null)
        return true;
    // push all the elements to a stack
    while(curr != null){
        arr.push(curr.value);
        // move the head
        curr = curr.next;
    }
    let curr2 = l;
    let len = arr.length;
    // traverse the list & check by poping from stack
    while(curr2 != null){
        let lastNum = arr.pop();
        if(curr2.value != lastNum){
            return false;
        }
        
        if(len / 2 === arr.len){
            return true;
        }
        curr2 = curr2.next;
    }
    return true;
}