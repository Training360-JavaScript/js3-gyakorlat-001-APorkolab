const removeDuplicatesFromArray = (array) => {
	var set = new Set(array);
	return Array.from(set);
}



export default removeDuplicatesFromArray;