# 预加载
概念：懒加载是一种延迟请求方案，图片等静态资源在使用前的提前请求，使用时能从缓存中加载，从而提升用户体验的一种性能优化方案

## prefetch：
【可能会被使用】该资源并不急着要用，但是可预见在下一个页面要用到，html编译到该link标签时会不会立即下载该prefetch资源，加载优先级最低，会等浏览器空闲进行加载并缓存至disk中，但并不对其立即进行解析执行，直到检测资源要被使用

## preload：
【必定会被使用】可预见该页面中即将要使用到该资源，html编译到该link标签时会立即下载该preload资源，下载完后会放入缓存至disk中，并不对其立即进行解析执行，直到检测资源要被使用

## 与defer和async异同：
### 同：
这几种加载方式下载期间均不会造成html编译阻塞
### 异：
1.async下载完后会立即解析执行并会阻塞html编译；
2.async和defer是针对脚本的加载方式，而prefetch和preload是支持多种格式的资源，通过as进行指定格式【格式参照：https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#What_types_of_content_can_be_preloaded】；
3.async和defer主流浏览器都兼容，而prefetch和preload存在兼容性，前者不兼容Safari和Opera，后者不兼容IE和FF，如果不支持，则会自动忽略预加载的link；
4.prefetch和preload是真正的被使用到的时候才对目标脚本进行解析执行；

### prefetch和preload的应用场景
css加载【vue中感觉用的比较少，因为webpack已经有所处理】、js加载【对于一些插件类因为有兼容性可以配合defer和async进行服用】、font加载、图片加载、音频加载【比较适合vue中使用，可以在加载包之前进行加载，当然video和audio本身有preload，如果页面较复杂，作用会比较大，如果是活动页要加载背景音乐，可以考虑使用preload-js】

### prefetch和preload的痛处
页面不合理或者过多使用预加载，会浪费用户的流量，比如preload资源在load时间3s后检测未被使用则会在控制台提示该操作会导致用户流量浪费
如果用户没有切换到下一页，则prefetch提前加载下一页资源也会导致流量的浪费

动态路由webpack打包默认以prefetch进行加载

### 浏览器资源加载默认级别：
1）html 、 css 、 font 这三种类型的资源优先级最高；
2）preload 资源（通过 <link rel=“preload"> 标签预加载）、 script 、 xhr 请求；
3）图片、语音、视频；
4）prefetch预读取的资源
