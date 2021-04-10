export default function cyclicRotation(a, k) {
    let aLength = a.length;
    let kNormalized = k % aLength;
    if (k === 0 || kNormalized === 0 || aLength === 0) {
        return a;
    }

    let startArray = a.slice(kNormalized);
    let endArray = a.slice(0, kNormalized);

    return startArray.concat(endArray);
}
