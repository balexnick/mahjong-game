const isPrime = (num:number) => {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

export const getPrimeArray = (num:number) => {
  const primeArray:number[] = [];
  let newPrimeArray:number[] = [];

  for (let i = 1; i < num; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  
  newPrimeArray = [...primeArray, ...primeArray].sort(() => Math.random() - 0.5);

  return newPrimeArray;
};