const merge = (arr1, arr2) => {
    // create empty Array 
    const results = [] 
    // create pointers i, j
    let i = 0
    let j = 0 

    // while loop: i < arr1.length && j < arr2.length 
    while(i < arr1.length && j < arr2.length) {
        // check: if arr1[i] < arr2[j] 
        if(arr1[i] < arr2[j]) {
            // push i to new array 
            results.push(arr1[i]) 
            // increase i
            i++
        } else {
            results.push(arr2[j]) 
            // increase j
            j++ 
        }
    }
    // while loop: 
    while(i < arr1.length) {
        results.push(arr1[i])
        i++ 
    }
    while(j < arr2.length) {
        results.push(arr2[j]) 
        j++
    }
    return results 
}

const mergeSort = (array) => {
    // base case
    if(array.length <= 1) return array 
    // recursive case
    const mid = Math.floor(array.length/2) 
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))

    return merge(left, right) 
}

module.exports = { merge, mergeSort};