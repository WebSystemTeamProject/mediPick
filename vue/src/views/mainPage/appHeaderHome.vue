<template>
    <div>
        <header class="mobile">
            <span class="logoLinkMobile" @click="goHome"><img src="../../assets/logo_mobile.png"></span>
            <button class="loginBtnMobile" @click="goNav('loginPage')">
                <i class="material-icons">
                    person_outline
                </i>
            </button>
            <button class="menuBtn">
                <i class="material-icons">
                    menu
                </i>
            </button>
        </header>
        <header class="desktop">
            <span class="logoLink" @click="goHome"><img src="../../assets/logo.png"></span>
            <nav>
                <ul class="listWrapper">
                    <li class="navList" @click="goNav('itemPage')">의약품 검색</li>
                    <li class="navList">제약사 검색</li>
                    <li class="navList" @click="goNav('findPharmacy')">약국 찾기</li>
                </ul>
            </nav>
            <button class="loginBtn" @click="goNav('loginPage')">
                <i class="material-icons">
                    person_outline
                </i>
            </button>
        </header>
    </div>
</template>

<script>
    export default {
        name: "appHeaderHome",
        methods: {
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
        .loginBtn {
            float: right;
            margin-right: 20px;
            width: 44px;
            height: 44px;
            color: #ffffff;
            cursor: pointer;
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
