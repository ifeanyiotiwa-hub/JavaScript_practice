function diffArray(arr1, arr2) {
    var newArr = [];
     newArr.push(...arr1.filter(e => arr2.indexOf(e) === -1));
     newArr.push(...arr2.filter(e => arr1.indexOf(e) === -1));

    return newArr;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))