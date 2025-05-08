export function rubricPerfect(score) {
    let s = parseInt(score);
    if (s === 11) return "Perfect";
    if (s >= 9) return "Excellent";
    return s >= 5 ? "Pass" : "Fail";
}
