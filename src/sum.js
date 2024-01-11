let arr1 = ["Kaosara", "Lauren"]
let arr2 = ["Kaosara"]

function findMissingElements (arr1, arr2) {

    let newArray = []

    for (let i = 0; i < arr1.length; i++)

    for (let j = 0; j < arr2.length; j++)

if (arr1 [i] != arr2 [j]) {

    newArray.push (arr1 [i])
}
return newArray;
}

findMissingElements (arr1, arr2)

export { findMissingElements};
