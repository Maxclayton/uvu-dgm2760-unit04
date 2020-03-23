function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }





function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            
            break;
        case 2:
            name = "February"
       
        case 3:
            name = "March"
            break;
        case 4: 
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11: 
            name ="November"
            break;
        case 12:
            name ="December"


    }
    return name
}

function getFortune(fate) {
    let Message
    switch (fate) {
        case 1: 
        Message = 'your hair lights on fire and you get eaten by spiders'
        break
        case 2:
        Message = 'your head explodes and a turtle eats the remains'
        break
        case 3: 
        Message = 'you find your one true love.'
        break
        case 4:
            Message ='you win the lottery.'
        break
        case 5:
            Message = 'you run over your foot with a car.'
        break
    }
    return Message
}


let month = getRandomIntInclusive (1, 12)
let fate = getRandomIntInclusive (1, 5)
let day = getRandomIntInclusive (1, 30)
const monthName = getMonthName(month)
const fateMessage = getFortune(fate)


const fortuneRevealed = `On ${monthName} ${day} ${fateMessage}`

document.querySelector('#fortune').innerText = fortuneRevealed