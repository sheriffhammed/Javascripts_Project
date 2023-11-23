//const input = 'turpentine and turtles';
const input = 'full stack engineer';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let i = 0; i<input.length; i++)
{
  if (input[i] === 'e')
  {
    resultArray.push(input[i]);
  }
   if (input[i] === 'u')
  {
    resultArray.push(input[i]);
  }
  //console.log(i);
for (let k = 0; k<vowels.length; k++)
{
  // console.log(vowels[k]);
 //console.log(k);
 if(vowels[k] === input[i])
 {
    //console.log(input[i]);
    //console.log(resultArray.push(input[i]));
    resultArray.push(input[i]);
  }
  
}
}
console.log(resultArray.join('').toUpperCase());