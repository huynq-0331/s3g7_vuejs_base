// The default configuration can be overwritten here
export default {
    dev: (process.env.NODE_ENV !== 'production'),

    css: [
        '@/assets/scss/main.scss',
    ],

    /**
     * Define plugin js will run before instantiating root Vue application.
     * 
     * helpful when using your own libraries (define your public component) or external modules.
     */
    plugins: [
        '@/plugins/element-ui',
    ],

    dir: {

    },

    /**
     * Define nuxt extension which can extend its core functionality and add endless integration
     * 
     * Exp: extend axios
     */
    modules: [
        [
            'nuxt-fontawesome', {
                imports: [
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas'],
                    },
                    {
                        set:'@fortawesome/free-brands-svg-icons',
                        icons: ['fab'],
                    },
                ],
                mode: 'client',
            },
        ],
    ],

    head: {
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/cat.ico' }
        ],
    },

    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:8001/api'
    },
}
