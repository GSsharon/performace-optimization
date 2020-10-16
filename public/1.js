console.log(document.getElementById('app'));
document.getElementById('app').innerHTML = 1
for(var i=0; i<100000; i++) {
    var p = document.createElement('p');
    p.innerHTML = 'p';
    p.class = 'p1';
    document.body.appendChild(p)
}
window.addEventListener('DOMContentLoaded',function() {
    console.log('dom与css渲染完成')
})