// using array - assignment of array - show length of array - show elements of array using for loop
let firstArray : String[] = ['First','second','third','fourth','fift'];

let i : number = 0;
console.log('Lenght of Array  '+firstArray.length);
for(i=0;i < firstArray.length;i++){
 console.log(i+' - '+firstArray[i]);
}

// Arrays - using Pop() Method and display elements using for loop
console.log('\nLength of Array before pop '+firstArray.length);
console.log('\nExtract last array value using pop() '+firstArray.pop());
console.log('\nLength of Array after pop '+firstArray.length);
for(i=0;i < firstArray.length;i++){
    console.log('After pop '+i+' - '+firstArray[i]);
   };

// Arrays - using Push() Method and display elements
console.log('\nusing Push '+i+' - '+firstArray.push("fifth by push()"));
console.log('\nLength of Array after push '+firstArray.length);

// Arrays - using shift() Method and display elements using for loop
console.log('\nLength of Array before shift() '+firstArray.length);
console.log('\nExtract first array value using shift() '+firstArray.shift());
console.log('\nLength of Array after shift() '+firstArray.length);
for(i=0;i < firstArray.length;i++){
    console.log('After shift '+i+' - '+firstArray[i]);
   };

// Arrays - using unshift() Method and display elements using for loop

console.log('\nExtract first array value using shift() '+firstArray.unshift("first by unshift"));
console.log('\nLength of Array after unshift() '+firstArray.length);
for(i=0;i < firstArray.length;i++){
    console.log('After shift '+i+' - '+firstArray[i]);
   };

// Arrays - using splice() Method and display elements using for loop

console.log('\nExtract first array value using splice(3,0) '+firstArray.splice(3,0,"add first by splice()","add 2nd by splice()"));
console.log('\nLength of Array after splice() '+firstArray.length);
for(i=0;i < firstArray.length;i++){
    console.log('After splice '+i+' - '+firstArray[i]);
   };

// Arrays - using slice() Method and display elements using for loop

let sliceArray = firstArray.slice();
console.log('\nLength of Array after slice() of firstArray '+sliceArray.length);
for(i=0;i < sliceArray.length;i++){
    console.log('After slice() of firstArray '+i+' - '+sliceArray[i]);
   };

// Arrays - using slice(using parameter) Method and display elements using for loop
sliceArray = firstArray.slice(1);
console.log('\nLength of Array after slice(1) of firstArray '+sliceArray.length);
   for(i=0;i < sliceArray.length;i++){
       console.log('After slice(1) of firstArray '+i+' - '+sliceArray[i]);
      };

// Arrays - using split(using parameter " ") Method and display elements using for loop
let sentence = 'A quick brown fox jumps over the lazy dog'
let splitArray = sentence.split(" ");
console.log('\nLength of Array after split(" ") of sentence '+splitArray.length);
    for(i=0;i < splitArray.length;i++){
    console.log('After split of sentence '+i+' - '+splitArray[i]);
    };

// Arrays - using split(using parameter "o") Method and display elements using for loop
splitArray = sentence.split("o");
console.log('\nLength of Array after split("o") of sentence '+splitArray.length);
    for(i=0;i < splitArray.length;i++){
    console.log('After split("o") of sentence '+i+' - '+splitArray[i]);
    };

// Arrays - using split(using parameter " ") Method for toTitleCase without function  elements using for loop
splitArray = sentence.split(" ");
sentence="";
splitArray.forEach(element => {
    console.log(element[0].toUpperCase()+element.slice(1));
    sentence = sentence + element[0].toUpperCase()+element.slice(1)+' ';
});
console.log(sentence);

// Arrays - using split(using parameter " ") Method for toTitleCase() with function and using for each loop
function toTitleCase(sentenceSupply : String) : string
{ let sentence: string = "";
  let splitArray = sentenceSupply.split(" ");
  splitArray.forEach(element => {
        console.log(element[0].toUpperCase()+element.slice(1));
        sentence = sentence + element[0].toUpperCase()+element.slice(1)+' ';
    
    });
    return sentence;
};


console.log(toTitleCase('A quick brown fox jums over the lazy dog'));

// Arrays - using split(using parameter " ") Method for toTitleCase using for of loop

sentence = 'A quick brown fox jumps over the lazy dog'
splitArray = sentence.split(" ");
let u : string;
sentence = "";
for (u of splitArray)
{
    console.log(u[0].toUpperCase()+u.slice(1))+' ';
    sentence = sentence + u[0].toUpperCase()+u.slice(1)+' ';
}
console.log(sentence);
