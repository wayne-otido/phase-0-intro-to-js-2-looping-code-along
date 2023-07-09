// Code your solutions in this file

gifts=[]

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
countDown(10)

function writeCards(names, occasion) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
  
    return messages;
  }