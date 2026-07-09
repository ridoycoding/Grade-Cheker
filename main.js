function checkData() {
    let a = (document.getElementById("getNumber").value); 

    if (a >= 80 && a <= 100) {
        document.getElementById("outputData").innerText = "A+"
    }
    else if
        (a >= 70 && a <= 100) {
        document.getElementById("outputData").innerText = "A"
    }
    else if
        (a >= 60 && a <= 100) {
        document.getElementById("outputData").innerText = "A-"
    }
    else if
        (a >= 50 && a <= 100) {
        document.getElementById("outputData").innerText = "B"
    }
    else if
        (a >= 40 && a <= 100) {
        document.getElementById("outputData").innerText = "C"
    }
    else if
        (a >= 33 && a <= 100) {
        document.getElementById("outputData").innerText = "D"
    }
    else if
        (a >=0 && a <= 100) {
        document.getElementById("outputData").innerText = "F"
    }
    else {
        document.getElementById("outputData").innerText = "Something Went Rong";
    }
}


