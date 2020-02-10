'use strict';

const mixFloat32 = (arrays, multiplier) => {
    const first = arrays[0]
    const length = first.length
    const concat = new Float32Array(length);

    for (let i=0; i<length; i++) {
        concat[i] = 0
        for (let j=0; j<arrays.length; j++) {
            let array = arrays[j]
            let val = array[i % array.length]
            if (j>0) val *= multiplier;

            concat[i] += val
        }
    }

    return concat;
};


module.exports = mixFloat32
