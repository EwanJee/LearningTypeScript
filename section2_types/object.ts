/**
 * Object Types
 */

const person : {
    name: string;
    age: number;
} = {
    name: 'Maximilian',
    age: 30
};

const person2 = {
    person : {
        name: 'Maximilian',
        age: 30
    },
    hobbies: ['Sports', 'Cooking']
};
console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person2.hobbies){
    console.log(hobby.toUpperCase());
}
