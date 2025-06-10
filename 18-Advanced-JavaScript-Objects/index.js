// Objects

var bellBoy = {
    'name':'Timmy',
    age: 19,
    hasWorkPermit: true,
    languages: ['French', 'English']
}

console.log(bellBoy.name);




// Constructor Function

// class BellBoy {
//     constructor(name, age, hasWorkPermit, languages) {
//         this.name = name;
//         this.age = age;
//         this.hasWorkPermit = hasWorkPermit;
//         this.languages = languages;
//     }

//     moveLungage() {
//         console.log('Moving Suitcases...');
//     }
// }

// Function Constructor version
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveLungage = function() {
        console.log('Moving Suitcases...');
    };
}


var bellBoy1 = new BellBoy('Latva', 25, false, 'French');

console.log(bellBoy1);

bellBoy1.moveLungage()


function HouseKeeper(yearsOfExperience, name,age, hasWorkedForHotel, hasWorkPermit, cleaningRepository){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepository = cleaningRepository;
    this.hasWorkPermit = hasWorkPermit;
    this.age = age;
    this.hasWorkedForHotel=hasWorkedForHotel;

    this.clean = () => {
        alert('Cleaning in progress...')
    }
}

const houseKeeper1 = new HouseKeeper(4, 'Kristina', 24, true, false,['bathroom', 'Lobby', 'bedroom'])