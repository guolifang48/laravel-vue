<template>
    <div>

        <div class="big-wrap">
            <!--Navbar-->
            <mdb-navbar :color="'primary'" position="top" dark href="#" transparent scrolling>
                <mdb-container>
                    <mdb-navbar-brand href="#"><strong>MDB</strong></mdb-navbar-brand>
                    <mdb-navbar-toggler style="max-width: 1140px">
                        <mdb-navbar-nav left>
                            <!--<router-link :to="{ name: 'about' }">sdgfsdfsd</router-link>-->


                            <li class="nav-item ripple-parent">
                                <router-link :to="{ name: 'home' }" class="nav-link navbar-link">Home</router-link>
                            </li>
                            <li class="nav-item ripple-parent">
                                <router-link :to="{ name: 'portfolio' }" class="nav-link navbar-link">Portfolio
                                </router-link>
                            </li>
                            <li class="nav-item ripple-parent">
                                <router-link :to="{ name: 'posts' }" class="nav-link navbar-link">Posts</router-link>
                            </li>
                            <li class="nav-item ripple-parent">
                                <router-link :to="{ name: 'about' }" class="nav-link navbar-link">About</router-link>
                            </li>
                            <li class="nav-item ripple-parent">
                                <router-link :to="{ name: 'contact' }" class="nav-link navbar-link">Contact
                                </router-link>
                            </li>
                            <li class="nav-item ripple-parent">
                                <router-link :to="{ name: 'services' }" class="nav-link navbar-link">Services
                                </router-link>
                            </li>

                        </mdb-navbar-nav>

                    </mdb-navbar-toggler>
                </mdb-container>
            </mdb-navbar>
            <!--/.Navbar-->
            <!--ViewWrapper-->


        </div> <!--big-wrap-->


    </div>
</template>

<script>

    import {
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbNavbar,
        mdbNavbarToggler,
        mdbNavbarNav,
        mdbNavItem,
        mdbNavbarBrand
    } from 'mdbvue';

    export default {
        name: 'NavBar',


        created() {
        },

        mounted() {
        },

        destroyed() {
        },

        data() {
            return {
                csrf_token: window.csrf_token
            }
        },

        methods: {},

        components: {
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbNavbar,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem,
            mdbNavbarBrand
        }
    }
</script>

<style>
    .navbar .md-form {
        margin: 0;
    }

    .top-nav-collapse {
        background-color: #424f95 !important;
    }

    @media (max-width: 990px) {
        .navbar {
            background-color: #424f95 !important;
        }
    }

    .view {

    }

</style>