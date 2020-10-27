var button = document.createElement('button');
button.innerHTML = '点击加载testLoad.js';
button.addEventListener('click',function() {
    var script = document.createElement('script');
    script.src = './preload&prefetch/testLoad.js';
    document.body.appendChild(script);
});
document.body.appendChild(button);