import webpack from 'webpack';

export default {
    serverMiddleware: ['~/server-middleware/logger'],
    // target: 'static',
    plugins: ['~/plugins/preview.client.js'],
    buildModules: [
        // Simple usage
    '@nuxtjs/router-extras',

    // With options
    ['@nuxtjs/router-extras', { /* module options */ }]
    ],
    head: {
        title: 'nuxt-practice',
        meta: [
            {
                hid: 'charset',
                charset: 'utf-8',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'my website description'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    build: {
        loaders: {
            vue: {
              transformAssetUrls: {
                audio: 'src'
              }
            }
          },
        extend(config, ctx) {
            config.module.rules.push({
              test: /\.(ogg|mp3|wav|mpe?g)$/i,
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            })
        },
        plugins: [
            new webpack.ProvidePlugin({
                _: 'lodash'
            })
        ]
    },
    loading: {
        color: 'lightblue',
        height: '0.3125rem' 
    },
    router: {
        linkActiveClass: 'my-custom-active-link'
    }
}