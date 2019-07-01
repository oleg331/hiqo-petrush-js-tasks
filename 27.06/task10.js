/*
	Task 10
*/

function isEqual() {
    let [value, other] = [...arguments],
        type = Object.prototype.toString.call(value);
    
	if (type !== Object.prototype.toString.call(other)) return false;
	else if ('[object Object]'.indexOf(type) < 0) return false;

	var compareObjItems = (item1, item2) => {
		var itemType = Object.prototype.toString.call(item1);

		if ('[object Object]'.indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		} else {
			if (itemType !== Object.prototype.toString.call(item2)) return false;
			else if (item1 !== item2) return false;
		}
    };
    
    for (var key in value) {
        if (value.hasOwnProperty(key)) {
            if (compareObjItems(value[key], other[key]) === false) return false;
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
			e: 5,
		}
	}
};
const object2 = {
	a: 1,
	b: {
		c: 3,
		d: {
			e: 5,
		}
	}
};

isEqual(object1, object2); // => true
