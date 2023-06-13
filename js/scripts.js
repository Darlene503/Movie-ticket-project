function Ticket(nameOfMovie, time, age) {
    this.nameOfMovie = nameOfMovie;
    this.time = time;
    this.age = age;
    this.price = "$11"
}

Ticket.prototype.adjustPrice = function() {
    if (this.age <= 13) {
        this.price = "7"
    }
};