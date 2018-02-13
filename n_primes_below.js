const nPrimes = (n) => {
  let ret = Array.from({length: n+1}, (v, k) => k);
  console.log(ret);
  let maxCheck = Math.sqrt(n);
  for (let i = 2; i <= maxCheck; i++) {
    if (ret[i]) {
      for (let j = i+i; j < n; j+=i) {
        ret[j] = false;
      }
    }
  }
  ret.shift();
  ret.shift();
  ret = ret.filter((val) => val);
  console.log(ret);
}
console.log(nPrimes(1000000000));
