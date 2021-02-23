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
Dayweek(20, 21, 2, 23, "M")
Dayweek(20, 21, 2, 23, "F")

}