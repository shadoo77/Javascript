let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log('My entree array elements are :');
favoriteAnimals.forEach(function(print) {
    console.log(print);
});
// now after an adding an element 
favoriteAnimals.push('turtle');
console.log('My new array elements are :');
favoriteAnimals.forEach(function(print) {
    console.log(print);
});
// now insert an element after 'blowfish' and before 'capricorn'
favoriteAnimals.splice(1, 0, 'meerkat');
console.log('My new array elements after inserting a new element are :');
favoriteAnimals.forEach(function(print) {
    console.log(print);
});
console.log(`The array has a length of: ${favoriteAnimals.length}`);
// now delete an element 'giraffe' 
favoriteAnimals.splice(3, 1);
console.log('My new array elements after deleting element "giraffe" :');
favoriteAnimals.forEach(function(print) {
    console.log(print);
});
// finding the index of 'meerkat' element
console.log("The index of 'meerkat' element is :" + favoriteAnimals.indexOf('meerkat'));