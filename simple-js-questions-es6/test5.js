const getSumAsync = async (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 3000);
  });
};


const start = () => {

  const sum = getSumAsync(3, 5);
  console.log('The sum was: ', sum);

  // We expect that sum will have the value 8, after 3 seconds, but what we see printed in the console is:
  // The sum was:  Promise {<pending>}
  // 1. What did we do wrong? How can it be fixed?
  // 2. Create another async function, getProdAsync, which returns the multiplication result of the 2 numbers
  //    and returns the result in 2 seconds
  // 3. Call both async functions and return the result of whichever function returns first  (optional)
}


start();



// -------------------------------- SOLUTIONS -------------------------------
// 1. start funtion should be async, not getSumAsync


const getSumAsync = (num1, num2) => {
  return new Promise((resolve, reject) => {
	  setTimeout(() => {
		  resolve(num1 + num2);
		}, 3000);
	});
};


const getProdAsync = (num1, num2) => {          // 2. Create another async function, getProdAsync...
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num1 * num2);
		}, 2000);
	});
};


const start = async () => {

  const sum = await getSumAsync(3, 5);
	console.log('The sum was: ', sum);
	const prod = await getProdAsync(3, 5);
	console.log('The prod was: ', prod);
}


const race = async () => {                      // 3. Call both async functions and return the result...

  const result = await Promise.race([getSumAsync(3, 5), getProdAsync(3, 5)])
	console.log('The first result was: ', result);
}

start();
race();

