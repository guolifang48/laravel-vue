# Laravel Project Setup [WIP]

> Modern scaffolding with Laravel, Voyager, Vue, Vuex and Webpack

This project contains CMS solution with Laravel, Voyager, VueJs, Vue-router, Vuex, SASS and Webpack. More to be added.

<br>

## Built With

> The following software was used to create this project.

* [Laravel](https://laravel.com/) - Backend Framework
* [Laravel Mix](https://laravel.com/docs/5.6/mix) - Webpack Configuration
* [VueJs](https://vuejs.org/) - Frontend Framework
* [Vuex](https://github.com/vuejs/vuex) - Centralized State Management
* [Vue Router](https://router.vuejs.org/) - Official Router
* [Axios](https://github.com/axios/axios) - Promise based HTTP client


<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

> You need to install this software for the best developing experience.

- PHP >= 7.1
- MySQL 5.7 - Database Engine
- [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) - PHP Dependencies
- [nvm](https://github.com/creationix/nvm) - Node Version Manager
- [Laravel](https://laravel.com/docs/5.6/) - Backend Framework
- [Valet](https://laravel.com/docs/5.6/valet) - Laravel development environment
- [MAMP PRO](https://www.mamp.info/en/mamp-pro/) - Local server environment
- [VueTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) - Chrome and Firefox DevTools extension for debugging Vue.js applications.


#### MySQL

If you got trouble with MySQL, follow these scripts.

- [Remove MySQL](https://gist.github.com/chepetime/d98e95f38217479279dfa581371f79d7)
- [Install MySQL](https://gist.github.com/chepetime/e7ba6a4c668b8690a4d0c3c9c7a83616)

<br>

## Local Deployment

> A step by step series of examples that tell you have to get a development env running.


Clone the project from the repository and go into the main directory.

Copy the `.env` file and set the required configuration values. You should create a fresh database and add the credentials into this file.

```sh
cp .env.example .env
vim .env
```

Install Backend Dependencies and update the PHP Autoloader

```sh
composer install
composer dump-autoload
composer require tcg/voyager
php artisan voyager:install --with-dummy # if you want dummy data to start with
```

Generate Laravel's encryption key. Create the logs file.

```sh
php artisan key:generate

touch storage/logs/laravel.log
```

Migrate the Database and, if required, Seed the Database.

```sh
php artisan migrate
php artisan db:seed
```

Install and select correct Node version, install required dependencies and build frontend files.

> You might encounter an error with `pngaquant`, ask a fellow developer (or Google) for help.

```sh
nvm install
npm i
npm run build
```

You should point a PHP server the projects `/public` directory. You can use MAMP PRO, Valet or anyother alternative. The Virtual Host should match the proxy defined domain in the `webpack.mix.js`. For this project the defined domain is `ktc.test`.

If you are using MAMP, change the project into an `nginx` server and add this to the **try_files** field.

```sh
try_files $uri $uri/ /index.php$is_args$args;
```

> It needs to be `.test` for the Google Chrome security policy wich enforces the use of `https`.

Start a Frontend Development environment using the following command. The url is `http://localhost:3000`.

```sh
nvm use
npm run serve
```

<br>

## Production Optimizations

Official Laravel optimizations from docs

### Autoloader Optimization.

When deploying to production, make sure that you are optimizing Composer's class autoloader map so Composer can quickly find the proper file to load for a given class:

```sh
composer install --optimize-autoloader --no-dev
```

### Clear the cache and configuration cache.

Before you continue to improve the production performance, remove all cache.

```sh
php artisan cache:clear
php artisan config:clear
```

### Optimizing Configuration Loading

When deploying your application to production, you should make sure that you run the  config:cache Artisan command during your deployment process:

```sh
php artisan config:cache
```

This command will combine all of Laravel's configuration files into a single, cached file, which greatly reduces the number of trips the framework must make to the filesystem when loading your configuration values.

### Optimizing Route Loading

If you are building a large application with many routes, you should make sure that you are running the route:cache Artisan command during your deployment process:

```sh
php artisan route:cache
```

This command reduces all of your route registrations into a single method call within a cached file, improving the performance of route registration when registering hundreds of routes.

<br>

## Use Sublime with SSH files

You can open server files using your local Sublime Text 3. You need to install `rmate` in the server and a Package to Sublime Text.

### Sublime

On Sublime Text 3, open Package Manager (Ctrl-Shift-P on Linux/Win, Cmd-Shift-P on Mac, Install Package), and search for rsub and install it.

### Server

On the server, connect first and install rmate. You need to change permissions.

```sh
ssh root@{yourserverip}
wget -O /usr/local/bin/rsub \https://raw.github.com/aurora/rmate/master/rmate
chmod a+x /usr/local/bin/rsub
exit
```

Now connect using a bridge.

```sh
ssh -R 52698:localhost:52698 server_user@server_address

```

Open a file from the server in your local sublime text using the `rsub` command. Your Sublime Test will start.

```sh
rsub path_to_file/file.txt
```

```sh
service nginx restart
```

<br>

---

### ADD TODO

- https://github.com/robinvdvleuten/vuex-persistedstate
- https://github.com/text-mask/text-mask
- https://github.com/baianat/vee-validate
- https://github.com/surmon-china/vue-awesome-swiper
- https://github.com/shentao/vue-multiselect
- https://github.com/epicmaxco/epic-spinners
- https://github.com/sagalbot/vue-select
- https://github.com/euvl/vue-js-modal
- https://github.com/charliekassel/vuejs-datepicker
- https://github.com/JosephSmith127/vue-loop
- https://github.com/asika32764/vue2-animate


---

## Authors

* **José Lugo** - *Initial work* - [ChepeTime](https://github.com/ChepeTime)
