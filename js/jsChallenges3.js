// Both boxes must have radio buttons selected to move on
// If one or both radio buttons isn’t selected create an alert

function challenge3() {
    let radio1 = document.getElementsByName("standing");
    let radio2 = document.getElementsByName("gradDate");
    let radio1Checked = false;
    let radio2Checked = false;

    for (let i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            radio1Checked = true;
        }
    }

    for (let i = 0; i < radio2.length; i++) {
        if (radio2[i].checked) {
            radio2Checked = true;
        }
    }

    if (radio1Checked && radio2Checked) {
        // alert("You're good to go!");
        // move on to the next page
        return true;
    }
    else {
        alert("Please select an option for both boxes");
        // stay on the same page
        return false;
    }
}