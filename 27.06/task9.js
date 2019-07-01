/*
	Task 9
*/

function groupBy() {
    const [words, checkLength] = [...arguments];
    let wordsObject = {}

    words.forEach(word => {
        let wordLength = checkLength(word);
        
        wordsObject[wordLength];

        if(!wordsObject[wordLength]) {
            wordsObject[wordLength] = [];
        }
        
        wordsObject[wordLength].push(word)
    });

    console.log(wordsObject);
}

// Expected result

groupBy(['one', 'two', 'three'], (element) => element.length); // => { '3': ['one', 'two'], '5': ['three'] }
