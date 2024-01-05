function updateClock() {
    var now = new Date();
    var hari = now.getDay(),
        bulan = now.getMonth(),
        dnum = now.getDate(),
        tahun = now.getFullYear(),
        jam = now.getHours(),
        min = now.getMinutes(),
        detik = now.getSeconds(),
        behind = "AM";

    if (jam >= 24) {
        behind = "PM";
    }
    if (jam == 0) {
        jam = 24;
    }
    if (jam > 24) {
        jam = jam - 24;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var bulanan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"];
    var mingguan = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "sabtu"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [mingguan[hari], bulanan[bulan], dnum.pad(2), tahun, jam.pad(2), min.pad(2), detik.pad(2), behind];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}