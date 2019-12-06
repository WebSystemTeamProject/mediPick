<template>
    <form>
        <div class="selectAll">
            <div class="selectWrapper">
                <p class="researchNotify">빠르게 의약품 이름으로 검색</p>
            </div>
            <div class="selectWrapper">
                <input class="putMdsName" type="text" v-model="mdsName">
            </div>
        </div>
        <div class="btnWrapper">
            <button class="searchBtn" @click="goNav('mdsNameSearch')">검색</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "symptomSearch",
        data () {
            return {
                mdsName: ''
            }
        },
        methods: {
            goNav(nav) {
                this.$router.push({name: nav, params: {searchMedicine: this.mdsName}});
                this.$store.commit('setIsHome', false);
            }
        }
    }
</script>

<style scoped>
    form {
        transition: .3s;
    }
    .selectWrapper {
        float: left;
        width: 50%;
        display: inline-block;
        padding: 0 4px;
        margin-bottom: 2px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 400;
    }
    .researchNotify {
        background-color: white;
        height: 38px;
        font-size: 20px;
        text-align-last: center;
        padding-top: 10px;
        color: #2c3e50;
    }
    .putMdsName {
        width: 470px;
        height: 48px;
        margin-left: 8px;
        text-align-last: center;
        color: #2c3e50;
        font-size: 20px;
    }
    .btnWrapper {
        padding: 0 4px;
        box-sizing: border-box;
    }
    .searchBtn {
        margin-top: 4px;
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        font-size: 14px;
        font-weight: 700;
    }

    @media (min-width: 600px) {
        .selectAll {
            width: 80%;
        }

        .selectWrapper {
            /*width: 25%;*/
            padding: 0 1px;
            margin: 0;
            font-size: 16px;
        }

        .btnWrapper {
            width: 20%;
            float: right;
            padding-left: 20px;
        }

        .searchBtn {
            margin: 0;
            height: 48px;
            font-size: 16px;
        }
    }

    @media (min-width: 1025px) {
        .btnWrapper {
            padding-left: 10px;
        }
    }
</style>
