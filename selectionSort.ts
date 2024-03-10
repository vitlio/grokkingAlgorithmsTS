export function selectionSort(arr: number[], ord: string = 'desc'): number[] {

  let sortedArr: number[] = [];

  if(arr.length === 0){
    return [];
  }

  while(arr.length){
    let smlr: number = arr[0];
    let idx: number = 0;

    for(let i: number = 0; i < arr.length; i++){
      if(ord === 'asc' ? smlr > arr[i] : smlr < arr[i]){
        smlr = arr[i];
        idx = i;
      }              
    }
    sortedArr.push(smlr);
    arr.splice(idx, 1);
  }
  
  return sortedArr;
}