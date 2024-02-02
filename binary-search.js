function linearSearch (arr, target) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === target) {
  //     return i; // Target found, return the index
  //   }
  // }
  // return -1;
  return arr.indexOf(target);
};

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let hi = arr.length -1;
  let lo = 0;
  // While high and low indices do not overlap...
  while(hi >= lo) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((hi + lo) / 2);
    // Compare the target value to the midpoint value
    if(arr[mid] === target) {
      // If the target equals the midpoint...
        // Return the midpoint index
      return mid;
    } else if (arr[mid] < target) {
      // If the target is higher than the midpoint...
        // Move the low pointer to midpoint + 1
      lo = mid + 1;
    } else {
      // If the target is less than the midpoint...
        // Move the high pointer to midpoint - 1
      hi = mid - 1;
    }
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]
