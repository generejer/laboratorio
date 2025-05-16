export function rubricPassFail(score) {
    return parseInt(score) >= 5 ? "Pass" : "Fail";
}