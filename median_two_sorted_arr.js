const n1 = [1, 3];
const n2 = [2];

var findMedianSortedArrays = function(nums1, nums2) {
  let medianArr = [];
  let numToAcquire = (nums1.length + nums2.length);
  let average = false;
  numToAcquire = numToAcquire/2;
  if ((numToAcquire % 2) === 0) {
    average = true;
    numToAcquire = Math.ceil(numToAcquire);
  }
  else  {
    numToAcquire -= 1;
  }
  console.log('grabbing ', numToAcquire, ' objects');
  let currVal;
  for (let i = 0; i < numToAcquire; i++) {
    if (nums1[0] === undefined) {
      currVal = nums2.shift();
    }
    else if (nums2[0] === undefined)  {
      currVal = nums1.shift();
    }

    else if (nums1[0] <= nums2[0]) {
      currVal = nums1.shift();
    }
    else  {
      currVal = nums2.shift();
    }
    console.log('currVal is, ', currVal);
    if (currVal !== undefined)  {
      medianArr.push(currVal);
    }
  }
  console.log('average?, ',average);
  console.log(medianArr);
  if (average)  {
    return (medianArr.pop() + medianArr.pop())/2;
  }
  return medianArr.pop();
};

console.log(findMedianSortedArrays(n1, n2));
