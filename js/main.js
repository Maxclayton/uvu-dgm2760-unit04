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
        Message = 'you and Ethan will have a baby'
        break
        case 2:
        Message = 'Ethan will perform brain surgery on you'
        break
        case 3: 
        Message = 'your teeth will fall out and land on Ethans head'
        break
        case 4:
            Message ='you will eat many olives off of your fingers.  It will be the best day of your life.'
        break
        case 5:
            Message = 'you will become a service pro for Aptive and forget your shoes at your first appointment :( .'
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