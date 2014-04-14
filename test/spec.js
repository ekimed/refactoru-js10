describe("splice", function() {
  it("should remove elements from an array", function() {
    expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
  });

  it("should return the original element unchanged", function(){
  	var a = ['a','b','c','d','e'];
  	splice(a,2,2);
  	expect(a).toEqual(['a','b','c','d','e']);
  });

  it("should remove elements and insert new elements with the fourth argument", function(){
  	expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);
  });

  it("should insert elements without removing anything", function(){
  	expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
  });

  it("should insert elements at the end of array when given arbitrarily high index", function(){
  	expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
  	expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);
  });

  it("should insert arbitrary num of values using mult arguments", function(){
  	expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z']);
  });

});

// TESTS (Normally you'd have to write these yourself! But a magical elf left these for you...)

// You should be able to remove elements from an array.
// assertArraysEqual(splice(['a','b','c','d','e'], 2, 2),  ['a','b','e']);

// The original array should remain unchanged (pure function).
// var a = ['a','b','c','d','e'];
// splice(a, 2, 2);
// assertArraysEqual(a,  ['a','b','c','d','e']);

// You can m  insert an item with the fourth argument.
// assertArraysEqual(splice(['a','b','c','d','e'], 1, 2, 'z'),  ['a','z','d','e']);

// You can insert elements without removing anything.
// assertArraysEqual(splice(['a','b','c','d','e'], 1, 0, 'z'),  ['a','z','b','c','d','e']);

// Inserting at an arbitrarily high index should just insert at the end.
// assertArraysEqual(splice(['a','b','c'], 99, 0, 'z'),  ['a','b','c','z']);
// assertArraysEqual(splice(['a','b','c'], 99, 1, 'z'),  ['a','b','c','z']);

// You should be able to insert an arbitrary number of values using multiple arguments.
// assertArraysEqual(splice(['a','b','c'], 99, 1, 'x','y','z'),  ['a','b','c','x','y','z']);

