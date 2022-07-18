const path = require('path');
module.exports = {
    publicPath: './',    // 公共路径
    devServer: {
        open: true,
        https: false,
        proxy: {//配置跨域
            '/api': {
                target: "http://18.162.224.116:8063/api", //线上
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }    
        }
    }
};
