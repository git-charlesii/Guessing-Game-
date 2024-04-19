const userPrompt = window.prompt('guess a number between 3 and 20');
const answer = 14;
function guessGame (){
  
  // const answer = 14;
    if (userPrompt > answer){
      window.alert('too high, try again')
      window.prompt('guess a number between 3 and 20');
      
    } 
    else if (userPrompt < answer){
      window.alert('too low, try again')
      window.prompt('guess a number between 3 and 20')
      
    }
    else if (userPrompt === answer){
      window.alert('Bingo!')
   }   
    else {
      window.alert('Not a valid number')
      window.prompt('guess a number');
    }

    
   
}
guessGame()
console.log(answer);
console.log(userPrompt);