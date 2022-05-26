function checkValidation() {
    var nama = document.forms["booking"]["nama"].value;
    var email = document.forms["booking"]["email"].value;
    var pesan = document.forms["booking"]["pesan"].value;
    
    var eM = document.getElementById("errMsg");

    if (nama == "") {
        eM.innerText = "Nama harus diisi";
        eM.style.display = "block";
    }
    else if (!email.includes('@') || !email.includes('.')) {
        eM.innerText = "Email tidak valid!";
        eM.style.display = "block";
    }
    else if (pesan == "") {
        eM.innerText = "Pesan harus diisi!";
        eM.style.display = "block";
    }
    else {
        var x = confirm("Apakah Anda yakin ingin mengirim pesan ini?");
        if (x == true) {
            alert('Berhasil mengirim pesan!');
        }
    }
}

function checkPayment() {
    var nama = document.forms["payment"]["nama"].value;
    var email = document.forms["payment"]["email"].value;
    var telp = document.forms["payment"]["telp"].value;
    var city = document.forms["payment"]["city"].value;
    var provinsi = document.forms["payment"]["provinsi"].value;
    var address = document.forms["payment"]["address"].value;
    var kodePos = document.forms["payment"]["kodePos"].value;
    var method = document.forms["payment"]["method"].value;

    var error = 0;
    var eM = document.getElementById("errMsg");

    if (nama == "") {
        eM.innerText = "Nama harus diisi";
        eM.style.display = "block";
        error = 1;
    }
    else if (!email.includes('@') || !email.includes('.')) {
        eM.innerText = "Email tidak valid!";
        eM.style.display = "block";
        error = 1;
    }
    else if (isNaN(telp)) {
        eM.innerText = "Telepon harus berupa nomor";
        eM.style.display = "block";
        error = 1;
    }
    else if (city == "") {
        eM.innerText = "Kota harus diisi";
        eM.style.display = "block";
        error = 1;
    }
    else if (provinsi == "") {
        eM.innerText = "Provinsi harus diisi";
        eM.style.display = "block";
        error = 1;
    }
    else if (address == "") {
        eM.innerText = "Alamat detail harus diisi";
        eM.style.display = "block";
        error = 1;
    }
    else if (kodePos == "") {
        eM.innerText = "Kode Pos harus diisi";
        eM.style.display = "block";
        error = 1;
    }
    if (method == "visa") {
        var cardNum = document.forms["payment"]["cardNum"].value;
        var expired = document.forms["payment"]["expired"].value;
        var cvv = document.forms["payment"]["cvv"].value;
        if (isNaN(cardNum)) {
            eM.innerText = "Nomor kartu harus berupa nomor";
            eM.style.display = "block";
            error = 1;
        }
        else if (cardNum == "") {
            eM.innerText = "Nomor kartu harus diisi";
            eM.style.display = "block";
            error = 1;
        }
        else if (expired == "") {
            eM.innerText = "Tanggal expired harus diisi";
            eM.style.display = "block";
            error = 1;
        }
        else if (isNaN(cvv)) {
            eM.innerText = "CVV/CVC2 harus berupa nomor";
            eM.style.display = "block";
            error = 1;
        }
    }
    if (error == 0) {
        var x = confirm("Apakah Anda yakin ingin mengirim pesan ini?");
        if (x == true) {
            alert('Berhasil mengirim pembayaran!');
        }
    }
}

function hide() {
    $(".visaTrue").hide(100)
}

function show() {
    $(".visaTrue").show(100)
}

$(function() {
    $(".slide").hide();

    var currSlide = $(".slide").first();
    currSlide.show();

    var currIdx = 0;

    $(".next").click(function() {
        currSlide.hide();
        if (currIdx == $(".slide").length - 1) {
            currIdx = 0;
            currSlide = $(".slide").first();
        } else {
            currIdx += 1;
            currSlide = currSlide.next();
        }
        currSlide.show(1000);
    })

    $(".previous").click(function() {
        currSlide.hide();
        if (currIdx == 0) {
            currIdx = $("li").length - 1;
            currSlide = $("li").last();
        } else {
            currIdx -= 1;
            currSlide = currSlide.prev();
        }
        currSlide.show(1000);
    })
})