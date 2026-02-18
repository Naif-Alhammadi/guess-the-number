'use strict'
let randomNumber=Math.trunc(Math.random()*20+1);
let highest=0;
let currBouns=20;
// function for displayingTheMessage
const displayingTheMessage=function (Message)
{
  document.querySelector('.message').textContent=Message;
}
// plaiying the game again
  document.querySelector('.again').addEventListener('click',function(){
    currBouns=20;
    randomNumber=Math.trunc(Math.random()*20+1);
      document.querySelector('.thechoosennumber').textContent=`YOUR NUMBER IS : ${''}`;
       document.querySelector('.innumber').value='';
        document.querySelector('.addedbouns').textContent=`Your current bouns : ${currBouns}`;
        document.querySelector('body').style.backgroundColor='rgb(53, 48, 48)';
           displayingTheMessage("?!");
  });

  // game starting
document.querySelector('.check').addEventListener('click',function(){
    let userNumber = Number(document.querySelector('.innumber').value);
    if(!((userNumber<=20)&&(userNumber>0)))
      {
       displayingTheMessage("Not a valide number");
      }
       // win the game
       else if(userNumber===randomNumber)
        {
          document.querySelector('.lostbouns').textContent;
          document.querySelector('.thechoosennumber').textContent=`YOUR NUMBER IS : ${userNumber}`;
          displayingTheMessage(`You Won ${randomNumber}`);
          document.querySelector('body').style.backgroundColor='#128a2c';
          // checking the highest
          if(highest<=currBouns)
            {
highest=currBouns;
document.querySelector('.lostbouns').textContent=`Your Highest bouns ${highest}`;
            }
            }
            // differnt number from the randNumber
            else if(userNumber!==randomNumber)
            {
   document.querySelector('.thechoosennumber').textContent=`YOUR NUMBER IS : ${userNumber}`;
          currBouns--;
             userNumber>randomNumber?  displayingTheMessage("Number is bigger"):  displayingTheMessage("Number is smaller");
            }
            // loosing the game
            if(currBouns===0)
              {
                document.querySelector('body').style.backgroundColor='#991111';
                setTimeout(() => {
                  alert("You lost")
                }, 10);
              }
              document.querySelector('.addedbouns').textContent=`Your current bouns : ${currBouns}`;      
            });