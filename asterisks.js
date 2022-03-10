const asterisks1 = (rows) => {
    let rows1 = rows
    let hasil = "";

    console.log("1. Menyusun Barisan Bintang")

    for (let i = 0; i < rows1; i++) {
        hasil += "* \n"
    }
    return hasil;
}

const asterisks2 = (rows) => {
    let rows2 = rows;
    let hasil = "";

    console.log("2. Menyusun Barisan Bintang Dengan Nested Looping");

    for (let i = 0; i < rows2; i++) {
        for (let j = 0; j < rows2; j++) {
            hasil += "* ";
        }
        hasil += "\n";
    }
    return hasil;
}

const asterisks3 = (rows) => {
    let rows3 = rows;
    let hasil = "";

    console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");

    for (let i = 0; i < rows3; i++) {
        for (let j = 0; j < rows3; j++) {
            if (j < i+1) {
                hasil += "*"
            }
        }
        hasil += "\n"
    }
    return hasil;
}

const asterisks4 = (rows) => {
    let rows4 = rows;
    let hasil = "";

    console.log("4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping");

    for (let i = 0; i < rows4; i++) {
        for (let j = rows4; j > i; j--) {
            hasil += "*";
        }
        hasil += "\n";
    }
    return hasil;
}

console.log(asterisks1(5))
console.log(asterisks2(5))
console.log(asterisks3(5))
console.log(asterisks4(5))