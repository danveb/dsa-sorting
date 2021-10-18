const bubbleSort = (array) => {
    // for loop 
    for(let i = 0; i < array.length; i++) {
        // inner for loop - i
        for(let j = 0; j < array.length - i; j++) {
            // if array[j] > array[j+1] 
            if(array[j] > array[j+1]) {
                // swap elements 
                let temp = array[j]
                array[j] = array[j+1] 
                array[j+1] = temp 
            }
        }
    }
    // returns the array
    return array 
}

module.exports = bubbleSort;