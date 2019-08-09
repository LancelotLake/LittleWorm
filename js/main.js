
function getTxt(str) {
    //1.声明异步请求对象：
    let xmlHttp = null;
    if (window.ActiveXObject) {
        // IE6, IE5 浏览器执行代码
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlHttp = new XMLHttpRequest();
    }
    //2.如果实例化成功，就调用open（）方法：
    if (xmlHttp != null) {
        xmlHttp.open("get", str, true);
        xmlHttp.send();
        xmlHttp.onreadystatechange = doResult; //设置回调函数
    }
    function doResult() {
        if (xmlHttp.readyState == 4) { //4表示执行完成
            if (xmlHttp.status == 200) { //200表示执行成功
                return xmlHttp.responseText;
            }
        }
    }
}

new Vue({
    el: "#notes",
    data: {
            noteList: [
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
            note: {
                title: '',
                time: '',
                content: ''
            }
        },
        methods: {
            navigator: function (name,time) {
                let url = "note.html";
                Vue.set(this.data.note, 'title', name);
                Vue.set(this.data.note, 'time', time);
                Vue.set(this.data.note, 'content', getTxt(name));
                window.open(url);
            }
        }
});



new Vue({
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

            window.open(url);
        }
    }
});





