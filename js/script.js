let slideIndex = 1;
showDivs(slideIndex);

function nextDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let slidelist = document.getElementsByClassName('container-slide');

    if (n > slidelist.length) slideIndex = 1;
    if (n < 1) slideIndex = slidelist.length;

    // Reset semua slide
    for (i = 0; i < slidelist.length; i++) {
        slidelist[i].style.display = 'none'; // sembunyikan semua slide
        slidelist[i].style.opacity = 0; // atur opacity menjadi 0 untuk semua slide
    }

    // Tampilkan slide yang aktif
    slidelist[slideIndex - 1].style.display = 'flex';  // tampilkan slide aktif
    slidelist[slideIndex - 1].style.opacity = 1;  // atur opacity menjadi 1 untuk slide aktif
}

setInterval(() => {
    nextDivs(1);
}, 4000);