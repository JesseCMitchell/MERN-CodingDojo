/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

// go through each array and track the smallest element, each time adding it to a new merged array
function orderedIntersection(sortedA, sortedB) {
    let mergedArr = [];
    let i = 0;
    let j = 0;

    while (i < sortedA.length && j < sortedB.length) {
        let unmerged1 = sortedA[i];
        let unmerged2 = sortedB[j];

        // if next comes from sortedA
        if (unmerged1 === unmerged2) {
            if(unmerged1 !== mergedArr[mergedArr.length -1]) {
                mergedArr.push(unmerged1);
            }
            i++;
            j++;
        } else if(unmerged1 < unmerged2){
            i++;
        } else if(unmerged1 > unmerged2){
            j++;
        }
    }   
    return mergedArr;
}
console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));