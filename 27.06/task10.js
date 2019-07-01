/*
	Task 10
*/

function isEqual(firstObj, secondObj) {
  const isObj = obj => typeof obj === "object";
  const objectsEquality = (obj1, obj2) => !isObj(obj1) && !isObj(obj2);

  if (objectsEquality(firstObj, secondObj)) return false;

  var compareObjItems = (firstObjItem, secondObjItem) => {
    if (isObj(firstObjItem)) {
      if (!isEqual(firstObjItem, secondObjItem)) return false;
    } else {
      if (!objectsEquality(firstObjItem, secondObjItem)) return false;
      else if (firstObjItem !== secondObjItem) return false;
    }
  };

  for (var key in firstObj) {
    if (firstObj.hasOwnProperty(key)) {
      if (compareObjItems(firstObj[key], secondObj[key]) === false)
        return false;
    }
  }

  return true;
}

// Expected result

const object1 = {
	a: 1,
	b: {
	  c: 3,
	  d: {
		e: 5
	  }
	}
  };;
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
