export function rubricExcellent(score) {
    let s = parseInt(score);
    if (s >= 9) return "Excellent";
    return s >= 5 ? "Pass" : "Fail";
}
