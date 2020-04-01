module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    devServer: {
        port: 7002, //端口
        host: 'localhost', // 访问IP
        open: true,
        proxy: {
            '/api': {
                target: 'http://39.97.33.178/', //设置你调用的接口域名
                changeOrigin: true
            }
        }
    }
}