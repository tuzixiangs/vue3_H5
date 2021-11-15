module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // options
      // 无法对行内样式进行转换
      unitToConvert: 'px', //(String) 需要转换的单位，默认为"px"
      viewportWidth: 750, // (Number) 设计稿的视口宽度，一般是750
      unitPrecision: 5, //  (Number) 单位转换后保留的精度（很多时候无法整除）
      viewportUnit: 'vw', // (String) 希望使用的视口单位
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类名
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // (Boolean) 媒体查询里的单位是否需要转换单位
      landscape: false, // 是否处理横屏情况
    },
  },
}
