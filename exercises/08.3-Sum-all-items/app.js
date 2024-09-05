function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let i = 0; i < theArray.length; i++) {
		total += theArray[i];
	}
	return total;
	/*let total = theArray.reduce((accumulator, currenValue) => accumulator + currenValue, 0);
	return total*/
}
