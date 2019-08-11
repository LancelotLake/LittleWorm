
compiledMarkdown = function (content) {
    return marked(content, {sanitize: true})

};

function getParams(key) {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function getTxt(str) {
    //1.声明异步请求对象：
    let xmlHttp = null;
    if (window.ActiveXObject) {
        // IE6, IE5 浏览器执行代码
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        console.log(1);
    } else if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlHttp = new XMLHttpRequest();
        console.log(2);
    }
    //2.如果实例化成功，就调用open（）方法：
    if (xmlHttp != null) {
        xmlHttp.open("get", str, true);
        xmlHttp.send();
        console.log(3);
        xmlHttp.onreadystatechange = doResult; //设置回调函数
    }

    function doResult() {
        if (xmlHttp.readyState == 4) { //4表示执行完成
            console.log(4);
            if (xmlHttp.status == 200) { //200表示执行成功
                console.log(xmlHttp.responseText);
                console.log(compiledMarkdown(xmlHttp.responseText));
                document.getElementById("text").innerHTML = compiledMarkdown(xmlHttp.responseText);
                return xmlHttp.responseText.toString();

            }
        }
    }
}
let notes = new Vue({
    el: "#notes",
    data: {
        noteList: [
            {
                time: "2018-3-15",
                name: "file"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },
            {
                time: "2018-3-15",
                name: "asdfasdfasdfasdf"
            },

        ],
    },
    methods: {
        navigator: function (name, time) {
            let str = "note.html?" + "name=" + name + "&" + "time=" + time;
            window.location.href = str;
        }
    }
});


let others = new Vue({
    el: "#others",

    data: {
        otherList: [
            {
                title: "asdAliToSign",
                decs: "基于nodejs的阿里云API签名生成工具"
            },
            {
                title: "asdAliToSign",
                decs: "基于nodejs的阿里云API签名生成工具"
            },
            {
                title: "asdAliToSign",
                decs: "基于nodejs的阿里云API签名生成工具"
            },
            {
                title: "asdAliToSign",
                decs: "基于nodejs的阿里云API签名生成工具"
            },

        ]
    },
    methods: {
        navigator: function (name) {
            let str = "note.html?name=";
            let url = str + name;
            window.location.href = url;
        }
    }
});

let article = new Vue({
    el: "#article",
    data: {
        article:{
            name:"The end of the world",
            time:"66-66-66",
            content:"# 404 页面错误\n"+
                ""
        }
    },
    created() {
        let name = getParams("name");
        let time = getParams("time");
        Vue.set(this.article, "name", name);
        Vue.set(this.article, "time", time);

    },
    mounted() {
        window.addEventListener("load", function () {
            getTxt("file/" + getParams("name") + ".txt");
        })
    }

});






