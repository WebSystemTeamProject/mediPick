<template>
    <div>
        <header class="mobile">
            <span class="logoLinkMobile" @click="goHome"><img src="../../assets/logo_mobile.png"></span>
            <div v-if="user">
                <button class="loginBtnMobile" @click="logout">
                    <i class="material-icons">
                        exit_to_app
                    </i>
                </button>
            </div>
            <div v-else>
                <button class="loginBtnMobile" @click="goNav('loginPage')">
                    <i class="material-icons">
                        person_outline
                    </i>
                </button>
            </div>
            <button class="menuBtn" @click="toggle">
                <i class="material-icons">
                    menu
                </i>
            </button>
            <Drawer @close="toggle" align="right" :closeable="true">
                <app-menu v-if="isOpen"></app-menu>
            </Drawer>
        </header>
        <header class="desktop">
            <span class="logoLink" @click="goHome"><img src="../../assets/logo.png"></span>
            <nav>
                <ul class="listWrapper">
                    <li class="navList" @click="goNav('searchMedicine')">의약품 검색</li>
                    <li class="navList" @click="goNav('searchPharmacy')">제약사 검색</li>
                    <li class="navList" @click="goNav('findPharmacy')">약국 찾기</li>
                </ul>
            </nav>
            <div v-if="user" class="loginBox">
                {{user}}님
                <button class="logoutBtn" @click="logout">
                    <i class="material-icons">
                        exit_to_app
                    </i>
                </button>
            </div>
            <div v-else class="loginBox">
                <button class="loginBtn" @click="goNav('loginPage')">
                    <i class="material-icons">
                        person_outline
                    </i>
                </button>
            </div>
        </header>
    </div>
</template>

<script>
    import appMap from '../mapPage/appMap'
    import Drawer from 'vue-simple-drawer'
    import appMenu from './appMenu'
    export default {
        name: "appHeaderHome",
        components: {
            'appMap': appMap,
            'Drawer': Drawer,
            'appMenu': appMenu
        },
        created(){
            this.$http.get('http://localhost:3000/main').then((response) => {
                if(response.data.trig)
                    this.user = response.data.email;
            })
        },
        data() {
            return  {
                user : ""
            }
        },
        computed: {
            isOpen() {
                return this.$store.getters.getIsOpen
            }
        },
        methods: {
            async logout(){
                await this.$http.get('http://localhost:3000/logout', {
                }).then((response)=>{
                    window.location.href="/";
                })
            },
            goHome() {
                if(this.$store.getters.getIsHome) {
                    return false;
                } else {
                    this.$router.push({name: 'appHome'});
                }
            },
            goNav(nav) {
                this.$router.push({name: nav});
                this.$store.commit('setIsHome', false);
            },
            toggle() {
                this.$store.commit('toggleIsOpen');
            }
        }
    }
</script>

<style scoped>
    .mobile {
        position: relative;
        padding-top: 20px;
    }
    .desktop {
        display: none;
    }
    .logoLinkMobile {
        cursor: pointer;
    }
    .loginBtnMobile, .menuBtn {
        position: absolute;
        top: 20px;
        color: #ffffff;
        cursor: pointer;
    }
    .loginBtnMobile {
        right: 40px;
    }
    .menuBtn {
        right: 0;
    }
    @media(min-width: 600px) {
        .mobile {
            display: none;
        }
        .desktop {
            display: block;
            padding-top: 20px;
        }
        .desktop::after {
            display: block;
            content: "";
            clear: both;
        }
        .logoLink {
            float: left;
            display: inline-block;
            margin-right: 50px;
        }
        nav {
            float: left;
            margin-top: 10px;
        }
        .navList {
            float: left;
            margin: 0 15px;
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
            cursor: pointer;
        }
        .loginBox {
            float: right;
            margin-right: 20px;
            height: 44px;
            color: #ffffff;
        }
        .loginBox button {
            margin-left: 20px;
            width: 44px;
            height: 44px;
            color: #ffffff;
            cursor: pointer;
            vertical-align: middle;
        }
    }
    @media(min-width: 1025px) {
        .desktop {
            width: 1200px;
            margin: 0 auto;
        }
        .logoLink {
            margin: 0 100px 0 20px;
            cursor: pointer;
        }
    }
</style>