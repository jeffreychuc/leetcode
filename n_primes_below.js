const nPrimes = (n) => {
  // generate array with values of 0 -> n
  let ret = Array.from({length: n+1}, (v, k) => k);
  // console.log(ret);
  // only need to check up to math.sqrt(n)
  let maxCheck = Math.sqrt(n);

  for (let i = 2; i <= maxCheck; i++) {
    // if value is true, set all multiples to false
    if (ret[i]) {
      for (let j = i+i; j < n; j+=i) {
        ret[j] = false;
      }
    }
  }
  // remove 0, 1
  ret.shift();
  ret.shift();
  // filter out false values
  return ret.filter((val) => val);
}
console.log(nPrimes(1000000));
