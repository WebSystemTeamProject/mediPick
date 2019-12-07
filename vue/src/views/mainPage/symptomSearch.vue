<template>
    <form>
        <div class="selectAll">
            <div class="selectWrapper">
                <input class="putMdsName" type="text" v-model="mdsName" placeholder="의약품 이름을 입력해주세요">
            </div>
        </div>
        <div class="btnWrapper">
            <button class="searchBtn" @click="goNav('mdsNameSearch')">빠른 검색</button>
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
                this.$router.push({name: nav, params: {medicineName: this.mdsName}});
                this.$store.commit('setIsHome', false);
            }
        }
    }
</script>

<style scoped>
    form {
        transition: .3s;
        padding: 10px;
        background-color: rgba(255,255,255,.7);
        box-shadow: 2px 2px 6px #212121;
    }
    form::after {
        content: "";
        display: block;
        clear: both;
    }
    .selectWrapper {
        float: left;
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
    }
    .selectWrapper span {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 48px;
        background-color: white;
    }
    .putMdsName {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        color: #2c3e50;
        font-size: 14px;
        text-align-last: center;
        border: 1px solid #55CEE2;
        box-sizing: border-box;
        outline: none;
    }
    .searchBtn {
        width: 100%;
        height: 40px;
        background-color: #55CEE2;
        color: white;
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
        .putMdsName {
            height: 48px;
        }
        .btnWrapper {
            padding: 0 4px;
            box-sizing: border-box;
            width: 20%;
            float: right;
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
