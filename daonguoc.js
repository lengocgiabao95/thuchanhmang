let array = [-3,5,1,3,2,10];
let first = 0;
let last = array.length - 1;
while ( first < last) {
    let b = array[first];
    array[first] = array[last];
    array[last] = b ;
    first ++;
    last --;

    
}
console.log(array);
