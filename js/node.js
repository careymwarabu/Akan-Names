function Dayweek(century, year, month) {
    let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let female = ["Akosua", "Akwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let cc = century
    let yy = year
    let mm = month
    let dd = day
    let result = (((cc / 4) - 2 * cc - 1) + (((5 * yy) / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7
    let index = Month.floor(result + 3)

    if (gender == "M") {
        console.log(index, male[index - 1]);
    } else if (gender == "F") {
        console.log(index, female[index - 1]);
    }

}

// Today
Dayweek(20, 21, 22, 23, "M")
Dayweek(20, 21, 22, 23, "F")

{

    "name": "Moringaschool-Project2",
    "version": "1.0.0",
    "description": "",
    "main": "form.html",
    "scripts": {
        "deploy": "gh-pages -d .vscode"
    },
    "keywords": {},
    "author": "",
    "license": "ISC",
    "homepage": "https://careymwarabu.github.io/Moringaschool-Project2",
    "dependencies": {
        "gh-pages": "1.2.0"

            onclick = "document.getElementById('demo').innerHTML = " >
            Click me to get your Akan Name. < /button>

    }


}