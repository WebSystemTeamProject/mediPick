<template>
    <section>
        <h1 class="title">해당하는 의약품</h1>
        <div class="searchBox">
            <input type="text" class="searchInput" placeholder="의약품 이름을 입력해주세요" v-model="inputText">
            <button class="searchBtn" @click="goNav('mdsNameSearch')">검색</button>
        </div>
        <div class="emptyMessage" v-if="mediList.length===0">검색 결과가 없습니다.</div>
        <search-list v-if='mediList.length' v-for="item in mediList" v-bind:item="item"></search-list>

    </section>
</template>

<script>
    import searchList from './searchList'
    export default {
        name: "mdsNameSearch",
        data() {
            return  {
                mediList:[],
                inputText: this.$route.params.medicineName
            }
        },
        async created(){
            this.fetchData();
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            async goNav(nav) {
                this.$router.push({name: nav, params: {medicineName: this.inputText}});
            },
            async fetchData(){
                const result = await this.$http.post("http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/api/search",{search: this.$route.params.medicineName}).then((res)=>{
                    return res.data;
                })
                this.mediList=result;
            }
        },
        components: {
            "searchList": searchList
        }
    }

</script>

<style scoped>
    section {
        padding: 0 16px;
        margin: 40px 0 160px 0;
        transition: .3s;
    }
    .title {
        font-size: 24px;
        font-weight: 700;
        margin: 0 0 20px 10px;
    }

    .emptyMessage{
        margin: 0 auto;
        text-align: center;
        font-size: 32px;
        padding-top: 50px;
    }

    .searchBox {
        padding: 10px;
        background-color: #EEFDFF;
        box-sizing: border-box;
    }
    .searchBox::after {
        content: "";
        display: block;
        clear: both;
    }
    .searchInput {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #55CEE2;
        font-size: 14px;
        box-sizing: border-box;
        outline: none;
    }
    .searchBtn {
        float: right;
        margin-top: 10px;
        width: 100px;
        height: 40px;
        font-size: 14px;
        color: white;
        background-color: #55CEE2;
    }

    @media(min-width: 600px) {
        section {
            padding: 0 24px;
            margin: 40px 0 180px 0;
        }
        .title {
            font-size: 36px;
            margin: 0 0 40px 20px;
        }
        .searchBox {
            padding: 20px;
        }
        .searchInput {
            height: 44px;
            padding: 0 20px;
            font-size: 16px;
        }

    }

    @media(min-width: 1025px) {
        section {
            width: 1200px;
            margin: 40px auto 260px auto;
            padding: 0;
        }
        .title {
            font-size: 48px;
            margin: 0 0 40px 35px;
        }
        .searchInput {
            height: 50px;
            font-size: 18px;
        }
    }

</style>
