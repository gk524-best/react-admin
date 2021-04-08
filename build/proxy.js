const path = process.env.APP_BASE_URL;
const proxy = {
    '/api/*': {
        target: path,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^api': '/'
        }
    }
}

module.exports = proxy;