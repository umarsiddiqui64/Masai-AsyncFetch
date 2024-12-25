// delayedFetch function
function delayedFetch(dataArray) {
    return dataArray.map((item, index) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(item);
            }, 2000 * (index + 1));
        });
    });
}

// executeFetch function
async function executeFetch(promisesArray) {
    for (let promise of promisesArray) {
        const result = await promise;
        console.log(result);
    }
}

// Example Usage
const data = ["apple", "banana", "cherry", "date"];
const promises = delayedFetch(data);
executeFetch(promises);
