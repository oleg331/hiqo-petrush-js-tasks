/*
	Task 10
*/

function isEqual(elemX, elemY) {
  const keys = Object.keys;
  const isObj = obj => typeof obj === 'object';

  const typeX = typeof elemX;
  const typeY = typeof elemY;

  return isObj(elemX) && typeX === typeY
    ? keys(elemX).length === keys(elemY).length &&
        keys(elemX).every(key => isEqual(elemX[key], elemY[key]))
    : elemX === elemY;
}

// function isEqual(objX, objY) {
//   const isObj = obj => typeof obj === "object";
//   const objectsEquality = (obj1, obj2) => !isObj(obj1) && !isObj(obj2);

//   if (objectsEquality(objX, objY)) return false;

//   var compareObjItems = (objXItem, objYItem) => {
//     if (isObj(objXItem)) {
//       if (!isEqual(objXItem, objYItem)) return false;
//     } else {
//       if (!objectsEquality(objXItem, objYItem)) return false;
//       else if (objXItem !== objYItem) return false;
//     }
//   };

//   for (var key in objX) {
//     if (objX.hasOwnProperty(key)) {
//       if (compareObjItems(objX[key], objY[key]) === false)
//         return false;
//     }
//   }

//   return true;
// }

// Expected result

const object1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};
const object2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};

isEqual(object1, object2); // => true
