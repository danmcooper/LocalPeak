var s = [15,2,3,4, 5, 6, 7, 8, 9, 3, 2,1];

var peak = function localPeak(numArray, start, end) {

	if ((end - start) < 2) {
		return (numArray[start] >= numArray[end] ? start: end);
	}

	// check left-most - if higher, return index
	if (numArray[start] >= numArray[start+1]) return start;

	// check right-most - if higher, return index
	if (numArray[end] >= numArray[end-1]) return end;

	// if middle, return middle
	var middle = start + parseInt((end - start)/2);
	if ((numArray[middle] >= numArray[middle-1]) &&
		(numArray[middle] >= numArray[middle+1])) return middle;

	// check middle left - if higher, call localPeak with left
	if (numArray[middle] <= numArray[middle-1]) {
		return localPeak(numArray, start, middle-1);
	}

	// middle right
	return localPeak(numArray, middle+1, end);
}

console.log(peak(s, 0, s.length-1));