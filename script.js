function hitungLuas(panjang, lebar) {
    return panjang * lebar;
}

let panjang = 10;
let lebar = 5;

let luas = hitungLuas(panjang, lebar);

document.getElementById("hasil").innerHTML =
    "Panjang = " + panjang + "<br>" +
    "Lebar = " + lebar + "<br>" +
    "Luas Persegi Panjang = " + luas;