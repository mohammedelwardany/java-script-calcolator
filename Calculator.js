function dis(val) {
    document.getElementById("Answer").value += val
}
//function for evaluation
function solve() {
    let x = document.getElementById("Answer").value
    let y = eval(x)
    document.getElementById("Answer").value = y
}
//function for clearing the display
function clr() {
    document.getElementById("Answer").value = ""
}



function EnterNumber(x) {

    dis(x);
}


function EnterOperator(o) {
    dis(o)
}

function EnterClear() {
    clr()
}

function EnterEqual() {
    solve()
}