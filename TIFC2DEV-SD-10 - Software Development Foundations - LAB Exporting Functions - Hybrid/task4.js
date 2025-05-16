export class FriendAge {
    constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
    }

    returnAge() {
    let today = new Date();
    let birthday = new Date(this.year, this.month, this.day);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    return `${this.name} is ${age} today!`;
    }
}
