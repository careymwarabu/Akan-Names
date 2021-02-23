window.addEventListener("DOMcontentloaded", function() {
    console.log("contentloadedSuccess");
    let dateForm = document.querySelector("#dateForm")
    console.log("formAccepted");

    dateForm.addEventListener("submit", function(submitClick) {
        submitClick.preventDefault();
        console.log("submitted");

        let gender = document.querySelector("#gender").value;
        let userDate = document.querySelector("#userDate").value;
        let date = new Date;
        let birthday = date.getDay();
        userDate = birthday
        console.log(birthday);

        let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let female = ["Akosua", "Akwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        if (gender = "1") {
            alert(male[userDate]);
        } else if (gender = "2") {
            alert(female[userDate]);
        } else {
            alert("invalid input");
        }




    })
})