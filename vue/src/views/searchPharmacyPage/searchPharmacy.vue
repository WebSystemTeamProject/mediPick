<template>
    <section>
        <h1 class="title">제약사 검색</h1>
        <div class="searchBox">
            <input type="text" class="searchInput" placeholder="제약사 이름을 입력해주세요" v-model="inputText">
        </div>
        <pharmacy-list v-for="pharmacy in searchPharmacy" v-bind:pharmacy="pharmacy"></pharmacy-list>
    </section>
</template>

<script>
    import pharmacyList from './pharmacyList'
    export default {
        name: "searchPharmacy",
        data() {
            return {
                inputText: "",
                pharmacys: []
            }
        },
        created() {
            this.$http.get('http://localhost:80/api/pharmacy').then((response) => {
                this.pharmacys = response.data;
                console.log("respnse : ",response.data);
            })
        },
        computed: {
            searchPharmacy() {
                return this.pharmacys.filter(m => {
                    return m.company.includes(this.inputText);
                })
            }
        },
        components: {
            'pharmacyList': pharmacyList
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
    .searchBox {
        padding: 10px;
        background-color: #EEFDFF;
        box-sizing: border-box;
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
