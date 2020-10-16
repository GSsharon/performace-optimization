// 判断元素是否在可视窗口
export function isInView(ele) {
    let topVisable = ele.getBoundingClientRect().top <= window.innerHeight ? true : false; //元素顶部在视窗中
    let bottomVisable = ele.getBoundingClientRect().bottom >= 0 ? true : false; //元素底部在视窗中
    let visiable = window.getComputedStyle(ele).display != 'none' ? true : false; //元素是否可见
    return topVisable && bottomVisable && visiable;
}

export function lazyLoding() {
    //使用节流
    let render = false;
    document.addEventListener("scroll", load);
    document.addEventListener("resize", load);
    document.addEventListener("orientationchange", load);
    // 自执行
    load();
    // 闭包
    function load() {
        if(render) return;
        //加载当前屏图片
        setTimeout(() => {
            // 获取页面所有的.lazy元素
            //先将伪数组进行转化为数组进行遍历，比直接forEach.call的性能要好，提高效率，这里也是性能优化的一点，还有就是尽量使用js自带Array对象进行操作，不要使用实例[].slice.call，涉及原型链查找机制
            let lazyImgs = Array.prototype.slice.call(document.querySelectorAll('.lazy')); 
            lazyImgs.forEach(item => {
                if(isInView(item)) {
                    item.src = item.dataset.origin;
                    item.classList.remove('lazy');
                }
            });
            lazyImgs = lazyImgs.filter(ele => {
                return ele.classList.contains('lazy');
            });
            // 页面目标懒加载图片对象长度为0，需要移除懒加载监听事件
            if(lazyImgs.length == 0) {
                render = false;
                document.removeEventListener('scroll',lazyLoding);
                document.removeEventListener('resize',lazyLoding);
                document.removeEventListener('orientationchange',lazyLoding);
            }
        }, 200);
    }
}

export function isSupportWebp () {
    var flag = '0'
    var canvasEL = document.createElement('canvas')
    var docEl = document.documentElement || document.getElementsByTagName('html')[0]
    if (canvasEL.getContext && canvasEL.getContext('2d')) {
        flag = canvasEL.toDataURL('image/webp').indexOf('image/webp') > -1 ? '1' : '0'
    }
    docEl.setAttribute('data-webp', flag)
    return flag
}