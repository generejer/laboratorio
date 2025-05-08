export function ageCalculator(year, month, day) {
    let today = new Date();
    let birthday = new Date(year, month, day);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
    }

    return age;
}
