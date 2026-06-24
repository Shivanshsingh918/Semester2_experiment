function checkArmstrong() {
    let num = document.getElementById("numberInput").value;

    if (num === "") {
        document.getElementById("result").innerHTML =
            "Please enter a number.";
        return;
    }

    let digits = num.toString();
    let power = digits.length;
    let sum = 0;

    for (let digit of digits) {
        sum += Math.pow(Number(digit), power);
    }

    let result = document.getElementById("result");

    if (sum == Number(num)) {
        result.innerHTML = `${num} is an Armstrong Number ✅`;
        result.style.color = "black";
    } else {
        result.innerHTML = `${num} is NOT an Armstrong Number ❌`;
        result.style.color = "black";
    }
}