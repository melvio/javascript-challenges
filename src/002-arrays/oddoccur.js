/**
 * Return the only element that is not paired in a further completely paired array .
 *
 * complexity: O(n)
 */
export default function oddOccurrencesInArray(a) {
    let map = {};
    for (const elem of a) {
        if (!(elem in map)) {
            map[elem] = 1;
        } else {
            delete map[elem];
        }
    }
    let total = 0;
    for (const key in map) {
        total += parseInt(key);
    }

    return total;
}


