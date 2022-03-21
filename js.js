
let myArr = [1, 2, 3, 4];

document.getElementById("old").innerHTML = JSON.stringify(myArr);

let removeSpecificIndex = (indexes, myArr) => {

    for (let i = 0; i < indexes.length; i++) {
        debugger
        let index = i > 0 ? indexes[i] - 1 : indexes[i];
        myArr = myArr.filter((item, idx, arr) => idx !== index);
        // myArr.splice(index,1);

    }

    document.getElementById("show").innerHTML = JSON.stringify(myArr);
};

removeSpecificIndex([0,3], myArr);

document.body.style.background = '#43424d'





// function countAllCharacters(a) {
//     let aplhabetCount = {};

//     for (let i = 0; i < a.length; i++) {
//         aplhabetCount.hasOwnProperty(a[i]) ?  aplhabetCount[a[i]] = aplhabetCount[a[i]] + 1 : aplhabetCount[a[i]] = 1; 
//     }

//     return aplhabetCount;
// }
// console.log(countAllCharacters("aabbcdd"));
// console.log(countAllCharacters("mynameisahmed"));
// console.log(countAllCharacters("aquickbrownfoxjumpsoverthelazydog"));

