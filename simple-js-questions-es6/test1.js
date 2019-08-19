let name = 'Rick';

function greetMe() {
  console.log(`Hi ${name}!`);
}

name = 'Morty';

greetMe();

// 1. What name will it print and why


// R: Morty, because Morty was assigned to name right before calling greetMe function 
