/*
	Task 1
*/

function createObject(obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'function') {
        createObject[key] = obj[key].bind(obj);
      } else {
        createObject[key] = obj[key];
      }
    })

  return createObject;
}

// Expected result

const obj1 = {
  testField: 1,
  getTestField: function () {
    return this.testField;
  }
};

const getTestField1 = obj1.getTestField;

getTestField1() // => undefined, context was lost

const obj2 = createObject({
  testField: 1,
  getTestField: function () {
    return this.testField;
  }
});

const getTestField2 = obj2.getTestField;

getTestField2(); // => 1, context was binded by createObject function
