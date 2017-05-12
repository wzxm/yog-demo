var Vue = require('vue');

(function(){
    // 加载中状态锁
    let fetching = false;
    // 用于加载时发送请求参数，表示第几屏内容，初始为1，以后每请求一次，递增 1
    let page = 1;
    // 只缓存最新一次下拉数据生成的 DOM 节点，即需要插入的dom缓存数组
    let slideCache = [];
    // 用于已经生成的 DOM 节点储存，存有 item 的 offsetTop，offsetHeight
    let itemMap = {};
    // pageYOffset 设置或返回当前页面相对于窗口显示区左上角的Y位置。
    let lastScrollY = window.pageYOffset;
    let scrollY = window.pageYOffset;
    // 浏览器窗口的视口（viewport）高度
    let innerHeight;
    // isVisible的上下阈值边界
    let topViewPort;
    let bottomViewPort;

    function isVisible(id) {
        // 判断元素是否在可见区域...
    }

    function updateItemCache(node) {
        // 更新 DOM 缓存...
    }

    function fetchContent() {
        // ajax 请求数据
    }

    function handleDefer() {
        // 懒加载实现
    }

    function handleScroll(e, force) {
        // 滚动处理程序
        // 如果时间间隔内，没有发生滚动，且并未强制触发加载，则do nothing，再次间隔100毫秒之后查询
        if(!force && lastScrollY === window.scrollY) {
            window.setTimeout(handleScroll, 100);
            return;
        } else {
            // 更新文档滚动位置
            lastScrollY = window.scrollY;
        }

        scrollY = window.scrollY;
        // 浏览器窗口的视口(viewport)高度赋值
        innerHeight = window.innerHeight;
        // 计算 isVisible 上下阀值
        topViewPort = scrollY - 1000;
        bottomViewPort = scrollY + innerHeight + 600;

        // 判断是否需要加载
        // document.body.offsetHeight 返回当前网页高度
        if(window.scrollY + innerHeight + 200 > document.body.offsetHeight) {
            fetchContent();
        }

        // 实现懒加载
        handleDefer();
        window.setTimeout(handleScroll, 100);
    }

    window.setTimeout(handleScroll, 100);
    fetchContent();


    let transform = getTransform();
    function Drag(selector) {
        // 放在构造函数中的属性，都是属于每一个实例单独拥有
        this.elem = typeof selector == 'Object' ? selector : document.getElementById(selector);
        this.startX = 0;
        this.startY = 0;
        this.sourceX = 0;
        this.sourceY = 0;

        this.init();
    }

    // 原型
    Drag.prototype = {
        constructor: Drag,
        init: function() {
            // 初始时需要做些什么事情
            this.setDrag();
        },
        // 获取元素的样式
        getStyle: function(property) {
            // IE 通过 currentStyle 来获取元素的样式，其他浏览器通过 getComputedStyle 来获取
            return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.elem, false)[property] : this.elem.currentStyle[property];
        },
        getPosition: function() {
            var pos = { x: 0, y: 0 };
            if(transform) {
                var transformValue = this.getStyle(transform);
                if(transformValue == 'none') {
                    this.elem.style[transform] = 'translate(0, 0)';
                } else {
                    var temp = transformValue.match(/-?\d+/g);
                    pos = {
                        x: parseInt(temp[4].trim()),
                        y: parseInt(temp[5].trim())
                    }
                }
            } else {
                if(this.getStyle('position') == 'static') {
                    this.elem.style.position = 'relative';
                } else {
                    pos = {
                        x: parseInt(this.getStyle('left') ? this.getStyle('left') : 0),
                        y: parseInt(this.getStyle('top') ? this.getStyle('top') : 0)
                    }
                }
            }
            return pos;
        },
        setPostion: function(pos) {
            if(transform) {
                this.elem.style[transform] = 'translate('+ pos.x +'px, '+ pos.y +'px)';
            } else {
                this.elem.style.left = pos.x + 'px';
                this.elem.style.top = pos.y + 'px';
            }
        },
        setDrag: function() {
            let self = this;
            this.elem.addEventListener('mousedown', start, false);
            function start(event) {
                // 获取鼠标初始位置
                startX = event.pageX;
                startY = event.pageY;

                // 获取元素初始位置
                let pos = self.getPosition();

                sourceX = pos.x;
                sourceY = pos.y;

                // 绑定
                document.addEventListener('mousemove', move, false);
                document.addEventListener('mouseup', end, false);
            }

            function move(event) {
                // 获取鼠标当前位置
                let currentX = event.pageX;
                let currentY = event.pageY;

                // 计算差值
                let distanceX = currentX - startX;
                let distanceY = currentY - startY;

                // 计算并设置元素当前位置
                self.setPostion({
                    x: (sourceX + distanceX).toFixed(),
                    y: (sourceY + distanceY).toFixed()
                })
            }

            function end(event) {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', end);
            }
        }
    }

    // 获取当前浏览器支持的 transform 兼容写法
    function getTransform() {
        let transform = "",
            divStyle = document.createElement("div").style,
            // 可能涉及到的几种兼容性写法，通过循环找出浏览器识别的那一个
            transformArr = ["transform", "webkitTransform", "MozTransform", "msTransform", "OTransform"],
            i = 0,
            len = transformArr.length;

        for(;i < len; i++) {
            if(transformArr[i] in divStyle) {
                // 找到之后立即返回，结束函数
                return transform = transformArr[i];
            }
        }
        // 如果没有找到，就直接返回空字符串
        return transform;
    }

    window.Drag = Drag;
})();

new Drag('target');