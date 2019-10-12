const gifts = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(gifts) {
  let i = 0; 
  while (i < gifts.length) {
    console.log();
    gifts[i]=`Thank you, ${gifts[i]}, for the wonderful surprise gift!`;
    i++; 
  }

  return gifts;
}

writeCards(gifts);


function countdown(number) {
 for(let i =number;i>=0;i--){
    console.log(number);  
    number-=1;
 }

  }