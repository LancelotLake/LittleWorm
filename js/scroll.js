let sd = null;
backTop = function () {
    window.scrollBy(0, -100)

    sd = setTimeout('backTop()', 20)

    let sTop = document.documentElement.scrollTop + document.body.scrollTop

    if (sTop === 0) {
        clearTimeout(sd)
    }
};


handleScroll = function () {
    console.log("hero:"+window.scrollY)
    if (window.scrollY > 30) {
        document.getElementById("scroll").style.top = "-258px";
    } else {

        document.getElementById("scroll").style.top = "-900px";
    }
};

window.addEventListener("scroll", handleScroll);
