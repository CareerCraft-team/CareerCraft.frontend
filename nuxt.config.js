const URL = 'http://localhost:4000'

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'frontend',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Manjari&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
                integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p',
                crossorigin: 'anonymous',
            },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        // { src: '~/plugins/progressStep.js', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/auth',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        proxy: true,
        baseURL: URL,
    },
    proxy: {
        '/api': URL,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        propertyName: 'token',
                    },
                    logout: true,
                },
            },
        },
    },
}
