function calculateSteps() {
    let length = document.getElementById("length").value;
    let spacing = document.getElementById("spacing").value;

    let lengthInches = length * 39.37;

    let steps = Math.floor(lengthInches / spacing);

    document.getElementById("result").innerText =
        "Required Steps: " + steps;
}