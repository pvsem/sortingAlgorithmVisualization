/* Bubble sort: repeatedly swap the adjacent elements if 
they are in wrong order */
export function bubbleSort(arr) {
  const length = arr.length;
  //let isSorted;

  for (let i = 0; i < length; i++) {
    //isSorted = true;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr,j,j+1)
        //isSorted = false;
      }
      //if(isSorted) return;
    }
  }
  return arr;
}

/* insertion sort: To sort an array of size n in ascending order:
1: Iterate from arr[1] to arr[n] over the array.
2: Compare the current element (key) to its predecessor.
3: If the key element is smaller than its predecessor, compare it to the elements before.
Move the greater elements one position up to make space for the swapped element. */
export function insertionSort(arr) {
	for(let i=1;i<arr.length;i++){
		let j=i
		while(j > 0 && arr[j-1]>arr[j]){
			swap(arr,j,j-1)
			j=j-1
		}
	}
	return arr;
}

/* Selection sort: The algorithm divides the input list into two parts:
a sorted sublist of items which is built up from left to right at the front (left) of the list
and a sublist of the remaining unsorted items that occupy the rest of the list. 
Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. 
The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element 
in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element 
(putting it in sorted order), and moving the sublist boundaries one element to the right. */
/* iMin - current minimum (index of a current minimum item to be precise)
i - current item (index of a current item) */
export function selectionSort(arr) {
	const len = arr.length
	for(let j=0;j<len-1;j++){
		let iMin = j;

		for(let i = j+1;i< len; i++){
			if(arr[i]<arr[iMin])
			iMin = i;
		}
		if(iMin !=j){
			swap(arr,j,iMin)
		}
	} 
	return arr;
}

/* heap sort:
1) Built max-heap (An almost complete binary tree in which the parent node 
is always greater than its children is called a max-heap.)
2) Deleting the root element(and put it in last position)
3) Heapify(fix the max-heap) */
export function heapSort(arr){
    let length = arr.length;
    for(let i=Math.floor(length/2)-1;i>=0;i--){
        max_heapify(arr,i,length);            //Building max heap
    }
    for(let i = length-1;i>=0;i--){
        swap(arr,0,i);              //Deleting root element
        max_heapify(arr,0,i);           //Building max heap again
    }
    return arr;
}

function max_heapify(arr,i,length){
    let left = 2*i;              //Left child index
    let right = 2*i+1;           //Right child index
    let maximum;
    if(right<length){                 //Checks if right child exist
        if(arr[left]>=arr[right]){    //Compares children to find maximum
            maximum = left;
        }
        else{
            maximum = right;
        }
    }
    else if(left<length){                //Checks if left child exists
        maximum = left;
    }
    else return;                    //In case of no children return
    if(arr[i]<arr[maximum]){            //Checks if the largest child is greater than parent
        swap(arr,i,maximum);          //If it is then swap both
        max_heapify(arr,maximum,length);       //max-heapify again
    }
    return;
}

/* merge sort: 
1) Divide the unsorted list into n sublists, 
each containing one element (a list of one element is considered sorted).
2) Repeatedly merge sublists to produce new sorted sublists
until there is only one sublist remaining. This will be the sorted list. */
export function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left).concat(right);
}

/* quick sort: It works by selecting a 'pivot' element from the array 
and partitioning the other elements into two sub-arrays, 
according to whether they are less than or greater than the pivot. 
The sub-arrays are then sorted recursively. */
export function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
  return arr;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
}
