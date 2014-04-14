var splice = function(arr, start, numToReplace, replace) {
	var newArray = arr;
	// Insert multiple number of arguments starting at arbitrarily high index 
	if(start>=arr.length){
		
		for(var i=3; i<arguments.length; i++){
			// arr.push(arguments[i]);
			newArray.push(arguments[i]);
		};

	}

	else{

		if (numToReplace === 0){
			var beginning = [],
			middle = [],
			end = [];

			for (var i = 0; i < start; i ++){
				beginning.push(arr[i]);
			};
			for (var i = 3; i < arguments.length; i++) {
				middle.push(arguments[i]);
			};

			for (var i = start; i < arr.length; i++) {
				end.push(arr[i]);
			};

			newArray = beginning.concat(middle, end);
		}
		

		else {
			var beginning = [],
			middle = [],
			end = [];

			for (var i = 0; i < start; i ++){
				beginning.push(arr[i]);
			};
			for (var i = 3; i < arguments.length; i++) {
				middle.push(arguments[i]);
			};
			for (var i = start+numToReplace; i < arr.length; i++){
				end.push(arr[i]);
			};
			newArray = beginning.concat(middle, end);
		
		}
	}

	return newArray;
};
