/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
//Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
  // ADD YOUR CODE HERE
  if(a>b){
    console.log(`${a} is the bigger number!`)
  } else if(a<b){
    console.log(`${b} is the bigger number!`)
  } else{
    console.log(`${a} and ${b} are equal numbers`)
  }
};

maxOfTwoNumbers(4,4) 





/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (a, b, c) => {
  // ADD YOUR CODE HERE
  const array1= []
  array1.push(a,b,c)
  
  const sortedArray = array1.sort()
  console.log(sortedArray.pop())

};
maxOfThree(5, 1, 6);





/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (letter) => {
  // ADD YOUR CODE HERE
  const input = letter.toLowerCase()
  if(input == 'a'||input =='e'||input =='i'||input =='o'||input =='u'){
  console.log(` ${letter} is a vowel`)
  } else if(input == 'y'){
    console.log(`${letter} is SOMETIMES a vowel, like in the word \'rythm\'`)
  }
  else {
    console.log(`${letter} is NOT a vowel`)
  }

};
isCharacterAVowel('Y') 





/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
all the numbers in an array of numbers. 
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (...params) => {
  // ADD YOUR CODE HERE
  const array2= params
  
  let sum =0
  for(i=0; i<=params.length-1; i++){
    sum = sum + array2[i]      
  }
  console.log(sum)
};

sumArray(2, 4, 6)

productArray = (...params) => {
  // ADD YOUR CODE HERE
  const array3= params
  
  let product = 1
  for(i=0; i<=params.length-1; i++){
    product = product * array3[i]      
  }
  console.log(product)
};

productArray(2, 4, 6)





/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
 
argAmount = (...params) =>{
  console.log(`You passed ${params.length} arguments`)
  return params.length;
};
argAmount(1, 12, 123)





/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  // ADD YOUR CODE HERE
  const splitString = str.split("")
  const reverseArray = splitString.reverse();

  const joinArray = reverseArray.join("")
   console.log(reverseArray)
};

reverseString('lliwdoog')




/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (...params) => {
  // ADD YOUR CODE HERE    
  
  const array4 = []
  for(i=0; i<=params.length-1; i++){
    array4.push(params[i].length)     
  }
  array4.sort()
  console.log(array4.pop())

};
findLongestWord('what', 'is', 'the', 'longest')






/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words 
that are longer than i characters long.
*/
filterLongWords = (param1, param2) => {
  // ADD YOUR CODE HERE
  const result = param2.filter(param2 => param2.length > param1);
  console.log(result)
  return result;
};

filterLongWords(4, ['adsf', 'awerfewg', 'awerfawe34rf'])
