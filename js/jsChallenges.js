document.querySelector("#subscribe").addEventListener('click', function() {
    console.log('this works');

    if (this.checked) {
        document.querySelector("#emailDiv").style.display = 'block';
    }
    else {
        document.querySelector("#emailDiv").style.display = 'none';
        console.log('else statement works');
    }
});

// If the visitor clicks anywhere except the email on the page an alert button should
// pop up with the current time.

document.addEventListener('click', function() {
    alert(new Date());
});