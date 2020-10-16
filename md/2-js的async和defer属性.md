# 8-js的async和defer属性
参考：https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3203968363,3482564997&fm=15&gp=0.jpg
async：异步加载，立马加载，加载完后会立马进行编译执行，如果html未编译解析完成，会造成阻塞
defer：异步加载，会立马加载，编译执行发生在html编译解析之后，DOMContentLoaded方法触发之前