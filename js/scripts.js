//Business Logic
function Ticketdatabase() {
    this.userticket = {};
}

Ticketdatabase.prototype.addTicket = function(ticket) {
    this.userticket[ticket.nameofMovie] = ticket
}

function Ticket(nameOfMovie, time, age) {
    this.nameOfMovie = nameOfMovie;
    this.time = time;
    this.age = age;
    this.price = "$11"
}

Ticket.prototype.adjustPrice = function() {
    if (this.age <= 13) {
        this.price = "$7"
    } 
    else if (this.age >=65) {
        this.price = "$9"
    } 
};

//User Logic
let ticketDatabase = new Ticketdatabase();


function handleFormSubmission(event) {
    event.preventDefault();
    const inputtedMovie = document.querySelector("input#new-movieName").value;
    const inputtedTime = document.querySelector("input#new-time").value; 
    const inputtedAge = document.querySelector("input#new-age").value;
    let newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    ticketDatabase.addTicket(newTicket);
    document.querySelector("input#new-movieName").value = null;
    document.querySelector("input#new-time").value = null;
    document.querySelector("input#new-age").value = null;
}



//function displayTicketPrice(event) {
    //const ticketObject = 
    //ticketObject.adjustPrice();
//}


window.addEventListener("load", function (){
    document.querySelector("form#new-ticket").addEventListener("submit", handleFormSubmission);
});

