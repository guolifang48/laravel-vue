let mix = require('laravel-mix');

mix.options({
  postCss: [require('autoprefixer')],
  uglifyOptions: {
    compress: true
  }
});

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .extract([
    'lodash',
    'axios',
    'vue',
    'vuex',
    'vue-meta',
    'vue-router',
    'vee-validate',
    ]);

/**
 * Development Server
 */

const domain = 'acros-blog.test';

mix.browserSync({
  host: domain,
  proxy: domain,
  open: 'external'
});

/**
 * Production Tasks
 */

if (mix.inProduction()) {
  mix.version();
}

if (process.env.DISABLE_NOTIFICATIONS) {
  mix.disableNotifications();
}
