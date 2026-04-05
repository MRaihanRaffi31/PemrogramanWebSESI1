// alert, prompt, confirm

// alert("Halo Pendikom");
// prompt("Masukkan nama Anda");
// confirm("Apakah Anda yakin?");


// let num1 = window.prompt("Masukkan angka pertama:");
// let num2 = window.prompt("Masukkan angka kedua:");
// let number = document.getElementById("nomor");
// let content = document.getElementById("content");
// let newText = document.createElement("p");

// let sum = parseFloat(num1) + parseFloat(num2);  

// number.innerText = `Hasil penjumlahan: ${sum}`;
// content.innerText = `Angka pertama: ${num1}, Angka kedua: ${num2}`;

let number = document.getElementById("nomor");
let count = 0;

number.innerText = count;

function tambah() {
    count++;
    number.innerText = count;
}

function kurang() {
    count--;
    number.innerText = count;
}

btnTambah.addEventListener("click", () => {
    tambah();
});

btnKurang.addEventListener("click", () => {
    kurang();
});