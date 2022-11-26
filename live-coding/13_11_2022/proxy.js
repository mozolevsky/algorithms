// Proxy task 
// https://www.patterns.dev/posts/proxy-pattern/


/**
 * Task: to create a logger proxy for person object
 * when we get value from object to show `The value of ${prop} is ${obj[prop]}`
 * when we set console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
 * *restrict to set nullish values
 */

const person = {
    name: "Max",
    age: 42,
    nationality: "American"
};

const personWithLogger = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
        return Reflect.get(obj, prop)
    },
    set: (obj, prop, value) => {       
        if (value) {
            console.log(`Changed ${prop} from ${Reflect.get(obj, prop)} to ${value}`);
            Reflect.set(obj, prop, value);
        } else {
            console.log(`Nullish values are not supported`)
        }
    }
})

console.log(personWithLogger.age = 0)
console.log(person)
