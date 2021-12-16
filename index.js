function collectionIsArray(collection){
    return (collection instanceof Array) ? collection.slice() : Object.values(collection) ;
}

function myEach(collection, callbackFn){
    let IsArray = collectionIsArray(collection)
       for(const item of IsArray){
           callbackFn(item)
        }
    return collection
}

function myMap(collection, callbackFn){
    let IsArray = collectionIsArray(collection)
    let newArray = []
    for(const item of IsArray){
        let newItem = callbackFn(item)
        newArray.push(newItem)
    }
    return newArray
}

function myReduce(collection, callback, acc){
    let isArray = collectionIsArray(collection)
    let accumulator = 0
    for(const item of isArray){
            let newAcc = callback(acc, item, isArray)
            console.log(newAcc)
            let accumulator =+ newAcc
            console.log(accumulator)
    }
    return accumulator
}

function myFind(collection, predicate){
    let IsArray = collectionIsArray(collection)
    for(const item of IsArray){
        predicate(item)
    }
} 