const person = {
    name: 'Alvin',
    age: 33,
    location: {
        city: 'Tustin',
        temp: 68
    }
};

const { name, age } = person;
console.log(`${name} is ${age}.`);