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
class BellBoy {
    constructor(name, age, hasWorkPermit, languages) {
        this.name = name;
        this.age = age;
        this.hasWorkPermit = hasWorkPermit;
        this.languages = languages;
    }
    moveLungage = function () {
            console.log('Moving Suitcases...');
        };
}


var bellBoy1 = new BellBoy('Latva', 25, false, 'French');

console.log(bellBoy1);

bellBoy1.moveLungage()


class HouseKeeper {
    constructor(yearsOfExperience, name, age, hasWorkedForHotel, hasWorkPermit, cleaningRepository) {
        this.yearsOfExperience = yearsOfExperience;
        this.name = name;
        this.cleaningRepository = cleaningRepository;
        this.hasWorkPermit = hasWorkPermit;
        this.age = age;
        this.hasWorkedForHotel = hasWorkedForHotel;

        
    }

    clean = () => {
            alert('Cleaning in progress...');
        };
}

const houseKeeper1 = new HouseKeeper(4, 'Kristina', 24, true, false,['bathroom', 'Lobby', 'bedroom'])


function anotherAddEventListener(typeOfEvent, callback){

    var eventThatHappened = {
        eventType: 'keydown',
        key: "p",
        durationOfKeypress: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }

}

anotherAddEventListener( 'keydown', (event)=>{
    console.log(event);
    
})


// Another example

function myDisplayer(some){
    console.log(some);
}

function myCalculator(num1, num2, myCallBack){
    myCallBack(num1 + num2);
}

myCalculator(3,5,myDisplayer)

// Another example

const myNumbers = [4,1,-20,-7,5,9,-6];

const posNumbers= removeNeg(myNumbers, (x)=>x>=0);

myDisplayer(posNumbers);

function removeNeg(numbers, callback) {
    const myArr = [];
    for(const x of numbers){
        if (callback(x)) {
            myArr.push(x)
        }
    }
    return myArr;
}

const listItems = document.querySelectorAll('li');

function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = 'done';
    } else {
        e.target.className = '';
    }
}

listItems.forEach((item)=>{
    item.addEventListener('click', toggleDone)
})