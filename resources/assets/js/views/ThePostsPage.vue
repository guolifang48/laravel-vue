<template>
    <page :classes="{'c-page--padded-top': false}">

        <NavBar></NavBar>
        <AboutBanner></AboutBanner>


        <div class="container about-banner-title animation fadeInLeft">
            <div class="row">

                <div class="col-md-8">
                    <h2 class="h1-responsive font-weight-bold my-5"
                        style="text-shadow: 1px 1px 2px #535d5e, 0 0 1em #424f95, 0 0 0.2em #424f95;">Our Posts</h2>
                </div>
                <div class="col-md-4">

                </div>
            </div>
        </div>


        <section class="main">


            <div class="container title-container">


                <div class="filters animated bounceInDown">

                    <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }"
                          v-on:click="setFilter('ALL')"> <mdb-btn outline="mdb-color" darkWaves fab icon="instagram"
                                                                  iconClass="fa-sm"
                                                                  class="mybutton">All</mdb-btn></span>
                    <span class="filter" v-bind:class="{ active: currentFilter === 'Hosting Your Website' }"
                          v-on:click="setFilter('Hosting Your Website')"><mdb-btn outline="mdb-color" fab
                                                                                  icon="snapchat-ghost"
                                                                                  iconClass="fa-sm" class="mybutton">Hosting Your Website</mdb-btn></span>
                    <span class="filter" v-bind:class="{ active: currentFilter === 'Web Development in Business' }"
                          v-on:click="setFilter('Web Development in Business')"><mdb-btn outline="mdb-color" fab
                                                                                         icon="snapchat-ghost"
                                                                                         iconClass="fa-sm"
                                                                                         class="mybutton">Web Development in Business</mdb-btn></span>
                    <span class="filter" v-bind:class="{ active: currentFilter === 'AMCD Specials' }"
                          v-on:click="setFilter('AMCD Specials')"><mdb-btn outline="mdb-color" fab icon="snapchat-ghost"
                                                                           iconClass="fa-sm" class="mybutton">AMCD Specials</mdb-btn></span>

                    <span class="filter" v-bind:class="{ active: currentFilter === 'Web Development News' }"
                          v-on:click="setFilter('Web Development News')"><mdb-btn outline="mdb-color" fab
                                                                                  icon="snapchat-ghost"
                                                                                  iconClass="fa-sm" class="mybutton">Web Development News</mdb-btn></span>

                </div>
            </div>


            <mdb-container v-if="postsSummary">


                <mdb-row v-if="currentFilter === post.mycategory || currentFilter === 'ALL'" v-bind:key="post.id"
                         v-for="post in postsSummary" class="animated fadeIn"
                         style="padding-bottom:50px;padding-top:50px;border-bottom:solid #ccc 1px;">

                    <mdb-col lg="5" xl="4">
                        <mdb-view hover class="rounded z-depth-1-half mb-lg-0 mb-4">

                            <a>
                                <mdb-mask overlay="white-slight" waves/>
                                <router-link :to="{ name: 'post', params: { slug: post.slug } }"><img
                                        class=" z-depth-1-half" v-bind:src="'storage/' + post.image"
                                        style="width:100%;"/></router-link>
                            </a>
                        </mdb-view>
                    </mdb-col>
                    <mdb-col lg="7" xl="8">
                        <h3 class="font-weight-bold mb-3 p-0">
                            <strong>{{post.title}}</strong>

                            <strong> {{post.category_id}} </strong>

                        </h3>
                        <p class="dark-grey-text">
                            {{post.excerpt}}


                        </p>
                        <p>by
                            <a class="font-weight-bold">Aiden Cole</a>, {{post.created_at}}</p>
                        <router-link :to="{ name: 'post', params: { slug: post.slug } }">
                            <mdb-btn color="primary" size="md">Read More</mdb-btn>
                        </router-link>
                    </mdb-col>


                </mdb-row>
            </mdb-container>


        </section>


        <section class="footer">


            <Footer></Footer>

        </section>


    </page>
</template>

<script>

    import Page from './../components/Page';
    import {mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn} from 'mdbvue';
    import NavBar from './../components/NavBar';
    import AboutBanner from './../components/AboutBanner';

    import Footer from './../components/Footer';


    export default {
        name: 'ThePostsPage',

        metaInfo() {
            return {
                title: this.seo.title
            }
        },

        created() {
        },

        mounted() {
        },

        destroyed() {
        },

        props: [],

        data() {
            return {
                ui: {},
                currentFilter: 'ALL',
                dataLayer: window.laravelDataLayer,
            }
        },

        computed: {
            postsSummary() {
                console.log('this.$store.getters.getPostSummary', this.$store.getters.getPostSummary);
                return this.$store.getters.getPostSummary
            },


            seo() {
                return this.$store.state.views['posts'].seo;
            },
        },

        methods: {

            setFilter: function (filter) {
                this.currentFilter = filter;

            }
        },

        components: {
            Page,
            NavBar,
            Footer,
            AboutBanner,
            mdbContainer,
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbMask,
            mdbIcon,
            mdbView,
            mdbBtn
        }
    };
</script>


<style>

    .filters {
        margin-top: 80px;

    }

    .filters .filter .mybutton {

        padding: 10px;
    }

    .about-banner-title {
        margin-top: -200px;
        padding-bottom: 150px;
    }


</style>


