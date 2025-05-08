export function costCalculator(amount) {
    let num = parseFloat(amount);
    return parseFloat((num + 3 + num * 0.01).toFixed(2));
}
