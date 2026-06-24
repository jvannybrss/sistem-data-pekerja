const form = document.getElementById("dataForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();
        const nama = document.getElementById("nama").value.trim();
const idPekerja = document.getElementById("nim").value.trim();
const layanan = document.getElementById("layanan").value;

if(nama === ""){
    alert("Nama lengkap harus diisi!");
    return;
}

if(!/^\d{6}$/.test(idPekerja)){
    alert("ID Pekerja harus terdiri dari tepat 6 angka!");
    return;
}

if(layanan === ""){
    alert("Silakan pilih jenis layanan terlebih dahulu!");
    return;
}

        const data = {
            nama: document.getElementById("nama").value,
            nim: document.getElementById("nim").value,
            layanan: document.getElementById("layanan").value,
            keterangan: document.getElementById("keterangan").value
        };

        let daftarData =
            JSON.parse(localStorage.getItem("dataPekerja")) || [];

        daftarData.push(data);

        localStorage.setItem(
            "dataPekerja",
            JSON.stringify(daftarData)
        );

        alert("Data berhasil disimpan!");

        form.reset();
    });
}

const table = document.getElementById("dataTable");

if (table) {

    let daftarData =
        JSON.parse(localStorage.getItem("dataPekerja")) || [];

    daftarData.forEach(item => {

        table.innerHTML += `
        <tr>
            <td>${item.nama}</td>
            <td>${item.nim}</td>
            <td>${item.layanan}</td>
            <td>${item.keterangan}</td>
        </tr>
        `;
    });
}