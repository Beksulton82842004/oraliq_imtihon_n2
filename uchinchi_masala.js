const year = 2208

 function kabisa() {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return "Kabisa yili";
} else {
        return "Kabisa yili emas";
}
}

// console.log(kabisa());