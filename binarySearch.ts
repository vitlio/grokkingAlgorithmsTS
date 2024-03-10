export function binarySearch(arr: number[], num: number): boolean{
    if(arr.length === 0) return false;
    
    let low: number = 0;
    let high: number = arr.length - 1;
    let idx: number = 0;
    arr.sort();
    while(low <= high){
        idx = Math.floor((low + high) / 2);
        if(arr[idx] == num) return true;
        if(arr[idx] < num) low = idx + 1;
        if(arr[idx] > num) high = idx - 1;

    }
    
    return false;
}
