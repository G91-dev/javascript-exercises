const findTheOldest = function(people) {
    people.map (
        (person) => {
            if(typeof(person.yearOfDeath) == 'undefined') {
            person.yearOfDeath = new Date().getFullYear()}
        });
    let ages = [];
    console.log(ages);
    let maxAge;
    console.log(maxAge);

    people.map ((person) => {ages.push(person.yearOfDeath - person.yearOfBirth)});
    console.log(ages);
    maxAge = Math.max(...ages);
    console.log(maxAge);
    return people.find (person => (person.yearOfDeath - person.yearOfBirth) === maxAge);
};



// Do not edit below this line
module.exports = findTheOldest;
