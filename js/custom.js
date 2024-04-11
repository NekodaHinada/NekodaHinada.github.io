window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 200) {
        document.body.classList.add("bodyImgBlur")
    } else {
        document.body.classList.remove("bodyImgBlur")
    }
})