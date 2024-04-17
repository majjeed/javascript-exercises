const findTheOldest = function(people) {
    return people.reduce((prevPerson, currPerson) => {
        let currYear = (new Date).getFullYear();
        let prevPersonDeath = 'yearOfDeath' in prevPerson ? prevPerson.yearOfDeath : currYear;
        let currPersonDeath = 'yearOfDeath' in currPerson ? currPerson.yearOfDeath : currYear;
        return (prevPersonDeath - prevPerson.yearOfBirth) > (currPersonDeath - currPerson.yearOfBirth) ?
                prevPerson : currPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
