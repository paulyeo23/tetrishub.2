function ArrayChallenge(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  const difference = arr[arr.length - 1] - arr[0];

  return difference - arr.length + 1;
}

// keep this function call here
console.log(ArrayChallenge(readline()));
