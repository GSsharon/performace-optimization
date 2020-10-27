const path = require('path')
// 骨架屏
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
// 雪碧图打包
const SpritesmithPlugin = require('webpack-spritesmith');

/* 这里是我们自己修改的模板样式，webpack，会自动生成一个sprite.css的样式，有时候生成的不满意，
我们可以在这里修改，可以自己打印一下 data里面的参数
*/
var templateFunction = function (data) {
  var shared = '.icon { background-image: url(I);background-size: Wpx Hpx;}'.replace('I', data.sprites[0].image).replace('W', data.spritesheet.width)
    .replace('H', data.spritesheet.height)

  var perSprite = data.sprites.map(function (sprite) {
    return '.icon-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
      .replace('N', sprite.name)
      .replace('W', sprite.width)
      .replace('H', sprite.height)
      .replace('X', sprite.offset_x)
      .replace('Y', sprite.offset_y);
  }).join('\n');

  return shared + '\n' + perSprite;
};

module.exports = {
  configureWebpack: (config) => {
    // config.externals = {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter'
    // },
    config.resolve.modules = ['node_modules', './src/assets/images']
    // 定义一个插件数组。用来覆盖，在里面使用我们的主角
    const Plugins = [
      new SpritesmithPlugin({
        /* 整合小图标 */
        src: {
          cwd: path.resolve(__dirname, './src/assets/icon'),
          glob: '*.png'
        },
        // 输出雪碧图文件及样式文件，这个是打包后，自动生成的雪碧图和样式
        target: {
          image: path.resolve(__dirname, './src/assets/images/sprite.png'),
          css: [
            [path.resolve(__dirname, './src/assets/css/sprite.scss'), {
              // 引用自己的模板
              format: 'function_based_template'
            }],
          ]
        },
        // 自定义模板入口，我们需要基本的修改webapck生成的样式
        customTemplates: {
          'function_based_template': templateFunction,
        },
        // 样式文件中调用雪碧图地址
        apiOptions: {
          cssImageRef: '~sprite.png'
        },
        // 让合成的每个图片有一定的距离，否则就会紧挨着
        spritesmithOptions: {
          padding: 20
        }
      }),
      new SpritesmithPlugin({
        /* 整合小图标 */
        src: {
          cwd: path.resolve(__dirname, './src/assets/icon1'),
          glob: '*.png'
        },
        // 输出雪碧图文件及样式文件，这个是打包后，自动生成的雪碧图和样式
        target: {
          image: path.resolve(__dirname, './src/assets/images/sprite1.png'),
          css: [
            [path.resolve(__dirname, './src/assets/css/sprite1.scss'), {
              // 引用自己的模板
              format: 'function_based_template'
            }],
          ]
        },
        // 自定义模板入口，我们需要基本的修改webapck生成的样式
        customTemplates: {
          'function_based_template': templateFunction,
        },
        // 样式文件中调用雪碧图地址
        apiOptions: {
          cssImageRef: '~sprite1.png'
        },
        // 让合成的每个图片有一定的距离，否则就会紧挨着
        spritesmithOptions: {
          padding: 20
        }
      })
    ]
    // config里面，覆盖掉以前的
    config.plugins = [...config.plugins, ...Plugins]

    // vue骨架屏插件配置
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/entry-skeleton.js'),
        },
      },
      minimize: true,
      quiet: true,
      router: {
        mode: "hash",
        routes: [{
            path: "/", //和router.js中的路径一样就行
            skeletonId: "skeleton" //之前的id
          },
          {
            path: /^\/page1/, //主要解决首屏加载，看业务需求添加的意义大不大
            skeletonId: "skeleton1"
          }
        ]
      }
    }))
  },

  css: {
    extract: true, // css拆分ExtractTextPlugin插件，默认true - 骨架屏需要为true
  },
}