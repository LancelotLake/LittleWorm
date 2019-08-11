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

onload = function() {
    let click_cnt = 0;
    let $html = document.getElementsByTagName("html")[0];
    let $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        let $elem = document.createElement("b");
        $elem.style.color = "#2bbc8a";
        $elem.style.zIndex = "9999";
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        $elem.style.transition = "none";
        let x = e.pageX;
        let y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        // clearInterval(anim);
        switch (++click_cnt%12) {
            case 0:
                $elem.innerText = "富强OωO";
                break;
            case 1:
                $elem.innerText = "民主(๑•́ ∀ •̀๑)";
                break;
            case 2:
                $elem.innerText = "文明(๑•́ ₃ •̀๑)";
                break;
            case 3:
                $elem.innerText = "和谐(๑•̀_•́๑)";
                break;
            case 4:
                $elem.innerText = "自由（￣へ￣）";
                break;
            case 5:
                $elem.innerText = "平等(╯°口°)╯(┴—┴";
                break;
            case 6:
                $elem.innerText = "公正૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 7:
                $elem.innerText = "法制╮(｡>口<｡)╭";
                break;
            case 8:
                $elem.innerText = "爱国( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 9:
                $elem.innerText = "敬业(ꐦ°᷄д°᷅)";
                break;
            case 10:
                $elem.innerText = "诚信(ꐦ°᷄д°᷅)";
                break;
            case 11:
                $elem.innerText = "友善(ꐦ°᷄д°᷅)";
                break;
            default:
                $elem.innerText = "❤bulubulu";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        let increase = 0;
        let anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase === 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};
