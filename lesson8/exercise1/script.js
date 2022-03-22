// const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
// console.log(shopping);

// const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
// console.log(shopping[0]);
// // returns "bread"

// const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
// shopping[0] = "tahini";
// console.log(shopping);

// const random = ['tree', 795, [0, 1, 2]];
// console.log(random[2][2]); //2

// const birds = ['Parrot', 'Falcon', 'Owl'];
// console.log(birds.indexOf('Owl'));   //  2
// console.log(birds.indexOf('Rabbit')); // -1

// const cities = ['Manchester', 'Liverpool'];
// cities.push('Cardiff');
// console.log(cities);

// cities.push('Bradford', 'Brighton');
// console.log(cities);

// const cities = ['Manchester', 'Liverpool'];
// const newLength = cities.push('Bristol');
// console.log(cities);     // [ "Manchester", "Liverpool", "Bristol" ]
// console.log(newLength);  // 3

// const cities = ['Manchester', 'Liverpool'];
// cities.unshift('Edinburgh');
// console.log(cities);

// const cities = ['Manchester', 'Liverpool'];
// cities.pop();
// console.log(cities);     // [ "Manchester" ]

// const cities = ['Manchester', 'Liverpool'];
// const removedCity = cities.pop();
// console.log(removedCity);   // "Liverpool"

// const cities = ['Manchester', 'Liverpool'];
// cities.shift();
// console.log(cities);     // [ "Liverpool" ]

// const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
// const index = cities.indexOf('Liverpool');
// if (index !== -1) {
//   cities.splice(index, 1);
// }
// console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

// const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
// const index = cities.indexOf('Liverpool');
// if (index !== -1) {
//   cities.splice(index, 2);
// }
// console.log(cities);     // [ "Manchester", "Carlisle" ]

// const birds = ['Parrot', 'Falcon', 'Owl'];

// for (const bird of birds) {
//   console.log(bird);
// }

// function double(number) {
//   return number * 2;
// }
// const numbers = [5, 2, 7, 6];
// const doubled = numbers.map(double);
// console.log(doubled); // [ 10, 4, 14, 12 ]

// function isLong(city) {
//   return city.length > 8;
// }
// const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
// const longer = cities.filter(isLong);
// console.log(longer); // [ "Liverpool", "Edinburgh" ]

// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(',');
// console.log(cities); // ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']

// console.log(cities.length); //6
// console.log(cities[0]); // Manchester
// console.log(cities[1]); // London
// console.log(cities[cities.length - 1]); // Carlisle

// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
// const cities = data.split(',');
// const commaSeparated = cities.join(',');
// console.log(commaSeparated);

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger
