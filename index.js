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
    if(!acc){
        acc = isArray[0]
        isArray = isArray.slice(1)
    }
    for(const item of isArray){
        acc = callback(acc, item, isArray)
    }
    return acc
}

function myFind(collection, predicate){
    let IsArray = collectionIsArray(collection)
    for(const item of IsArray){
        if (predicate(item)){
            return item
        }
    }
    return undefined
} 

function myFilter(collection, predicate){
    let IsArray = collectionIsArray(collection)
    let newArray = []
    for(const item of IsArray){
        if (predicate(item)){
            newArray.push(item)
        }
    }
    return newArray
}

function mySize(collection){
    let IsArray = collectionIsArray(collection)
    return IsArray.length
}

function myFirst(array, n){
    if(!n){
         return array[0]
    }
    return array.slice(0, n)
}

function myLast(array, n){
    if(!n){
        let arrayLength = array.length
        return array[(arrayLength)-1]
   }
   return array.slice(-n)
}

function myKeys(obj){
    let ObjArray = []
    for(const [key] of Object.entries(obj)){
        ObjArray.push(key)
    }
    return ObjArray
}

function myValues(obj){
    let ObjArray = []
    for(const [key, value] of Object.entries(obj)){
        ObjArray.push(value)
    }
    return ObjArray
}