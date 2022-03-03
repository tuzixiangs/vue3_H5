module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // options
      // 无法对行内样式进行转换
      unitToConvert: 'px', //(String) 需要转换的单位，默认为"px"
      viewportWidth: 375, // (Number) 设计稿的视口宽度
      unitPrecision: 5, //  (Number) 单位转换后保留的精度（很多时候无法整除）
      viewportUnit: 'vw', // (String) 希望使用的视口单位
      propList: [
        'margin',
        'padding',
        'text-shadow',
        'width',
        'height',
        'border',
        'border-radius',
        'border-width',
        'line-height',
        'letter-spacing',
        'left',
        'top',
        'right',
        'bottom',
        'transform',
        'translate',
      ],
      // propList: [],
      selectorBlackList: ['.ignore', '.hairlines', 'ignore-'], // 指定不转换为视窗单位的类名
      exclude: [], // 设置忽略文件，用正则做目录名匹配
      minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: true, // (Boolean) 媒体查询里的单位是否需要转换单位
      landscape: false, // 是否处理横屏情况
    },
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, //换算基数，
      propList: ['font', 'font-size'],
      // propList: ['*'],
      unitPrecision: 5, //允许REM单位增长到的十进制数字,小数点后保留的位数
      selectorBlackList: [], //要忽略并保留为px的选择器
      mediaQuery: true, //（布尔值）允许在媒体查询中转换px。
      minPixelValue: 1, //设置要替换的最小像素值
      // exclude: /node_module/tailwindcss,
    },
  },
}
