// The default configuration can be overwritten here
export default {
    dev: (process.env.NODE_ENV !== 'production'),

    css: [
        '@/assets/css/main.scss',
    ],

    plugins: [

    ],

    dir: {

    },

    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:8001/api'
    },
}
