const findMaxOccuringElement = (array) => {
    const array_object = {}
    const array_object_keys = []

    array.forEach(item => {
        if (array_object[item]) {
            array_object[item] += 1
            return
        }
        array_object[item] = 1
    })
    for (let key in array_object) {
        if (array_object[key] >= 2) {
            array_object_keys.push(array_object[key])
        }
    }

    const max_key = Math.max(...array_object_keys);
    console.log(Object.keys(array_object).find(key => array_object[key] === max_key))

}

const array = [1, 2, 3, 4, 4, 7, 7, 7];
findMaxOccuringElement(array)