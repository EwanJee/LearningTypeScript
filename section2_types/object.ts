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

enum Role { ADMIN = 2, READ_ONLY = 'a', AUTHOR = 'a' };

const person2 : {
    person: {
        name: string;
        age: number;
    },
    hobbies: string[];
    role: [number, Role];
} = {
    person : {
        name: 'Maximilian',
        age: 30
    },
    hobbies: ['Sports', 'Cooking'],
    role: [2, Role.READ_ONLY]
};


console.log(person.name);
console.log(person2.role[1]);


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for(const hobby of person2.hobbies){
    console.log(hobby.toUpperCase());
}
/**
 * any 타입이 있다.
 * tuple 타입. 배열의 길이와 타입이 고정된 배열.
 * 
 * 
 */
