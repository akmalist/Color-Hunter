function picker(arr) {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

export { picker };
