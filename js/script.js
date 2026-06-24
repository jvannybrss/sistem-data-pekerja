const form = document.getElementById("dataForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

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

if(table){

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