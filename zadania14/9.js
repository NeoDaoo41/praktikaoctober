function groupByAge(people) {
    let result = {};

    for (let i = 0; i < people.length; i++) {
        let age = people[i].age;

        if (!result[age]) {
            result[age] = [];
        }

        result[age].push(people[i]);
    }

    return result;
}