// 1
function stopAt0() {
    let userNums = []
    let getNum = Number(prompt("add a number"))
    while (getNum > 0) {
        userNums.push(getNum)
        getNum = Number(prompt("add a number"))

        userNums.sort((a, b) => {
            return a - b
        })
    }
    numberOne.innerHTML += `<p>max number:${userNums[userNums.length - 1]}</p>`
    numberOne.innerHTML += `<p>min number:${userNums[0]}</p>`
}

// stopAt0()

// 2

function get10Nums() {
    let userNums = []
    let userNumsEven = []
    let counter = 0;
    while (counter < 10) {
        counter++
        let addNum = Number(prompt("add a number"))
        userNums.push(addNum)
        if (addNum % 2 == 0) {
            userNumsEven.push(addNum)
        }
    }
    console.log(userNums);
    for (let number of userNumsEven) {
        numberTwo.innerHTML += `number: ${number} `
    }
}

// get10Nums()

// 3

function random100(input) {
    let hundredNums = []
    for (i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 101)
        hundredNums.push(random)
    }
    console.log(hundredNums);
    for (let i = 0; i < hundredNums.length; i++) {

        if (input == hundredNums[i]) {
            numberThree.innerHTML = `${input} exists in array`
        }
    }
}

// random100(Number(prompt("add a number")))

// 4
function getFirstName(firstName) {
    let userName = []
    for (i = 0; i < firstName.length; i++) {
        userName.push(firstName[i])
    }
    userName.indexOf("a") == 0 || userName.indexOf("A") == 0 ? console.log("nice") : " "

    userName.indexOf("z") == 0 || userName.indexOf("Z") == 0 ? console.log("good") : " "
}

// getFirstName("yoni")

// 5

function fizBuzz() {
    for (let i = 0; i < 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log("fizbuzz", i);
        }
        if (i % 3 == 0) {
            console.log("fiz", i);
        }
        else if (i % 5 == 0) {
            console.log("buzz", i);
        }
    }
}

// 6
function guessTen() {
    let arrayOfFifty = []
    let arrayToCheck = []
    let counter = 0;
    let repeatSum = 0;
    let random;
    for (i = 0; i < 50; i++) {
        random = Math.floor(Math.random() * 101)
        arrayOfFifty.push(random)
    }
    while (counter < 10) {
        let userNumber = Number(prompt("Add a number"))
        for (const number of arrayToCheck) {
            if (number == userNumber) {
                arrayToCheck.pop()
                counter--
            }
            else if (number > 100) {
                arrayToCheck.pop()
                counter--
            }
        }
        arrayToCheck.push(userNumber)
        counter++
    }
    for (let randomNum of arrayOfFifty) {
        for (let input of arrayToCheck) {
            randomNum == input ? repeatSum++ : " "
        }
    }
    console.log(`you guessed correctly:${repeatSum}`);
}

// guessTen()


// ADVANCED JS

// 1


class BuildingInfo {
    hight;
    width;
    numOfFLoors;
    numOfAppartments;
    constructor(hight, width, numOfFLoors, numOfAppartments) {
        this.hight = hight
        this.width = width
        this.numOfFLoors = numOfFLoors
        this.numOfAppartments = numOfAppartments
    }
    allBuildingsArray() {
        newBuildings.push(this)
    }

    getNewArray() {
        this.numOfFLoors > 5 ? overFiveFloors.push(this) : " "
    }
}


let buildingOne = new BuildingInfo(300, 80, 6, 40)
for (let key in buildingOne) {
    // console.log(`key:${key} info:${buildingOne[key]}`);
}
let buildingTwo = new BuildingInfo(350, 120, 8, 60)

let buildingThree = new BuildingInfo(380, 150, 10, 70)

let buildingFour = new BuildingInfo(280, 60, 4, 35)

// 2
let newBuildings = []
buildingOne.allBuildingsArray()
buildingTwo.allBuildingsArray()
buildingThree.allBuildingsArray()
buildingFour.allBuildingsArray()
// console.log(newBuildings);

// 3
let overFiveFloors = []
buildingOne.getNewArray()
buildingTwo.getNewArray()
buildingThree.getNewArray()
buildingFour.getNewArray()
// console.log(overFiveFloors);


//Class exrecise

class Professor {
    firstName
    lastName
    hourWage
    workHoursAWeek
    phone
    constructor (firstName,lastName,hourWage,workHoursAWeek,phone){
        this.firstName=firstName
        this.lastName=lastName
        this.hourWage=hourWage
        this.workHoursAWeek=workHoursAWeek
        this.phone=phone
    }
    printProffesor(){
        for(let key in this){
            console.log(`${key}:${this[key]}`);
        }
    }
}

let professorOne=new Professor("Moshe","Jifa",50,28,"0596448322")
let professorTwo=new Professor("Avi","The Thol",45,30,"0513647812")
let professorThree=new Professor("Moti","Lohim",65,20,"0346894512")
// professorOne.printProffesor()
// professorTwo.printProffesor()
// professorThree.printProffesor()


createProfessor.onsubmit=(event)=>{
    event.preventDefault()
let aNewProfessor= new Professor(firstName.value,lastName.value,payPerHour.value,HoursAWeek.value,PhoneNumber.value)
console.log(aNewProfessor);
for(let key in aNewProfessor){
    ProfessorInfo.innerHTML+=`<p>${key} : ${aNewProfessor[key]}</p>`
}
}