<template>
    <section>
        <h1 class="title">{{title}}</h1>
        <div class="searchBox">
            <input type="text" class="searchInput" placeholder="제약사 이름을 입력해주세요" v-model="inputText">
        </div>
        <pharmacy-medicine></pharmacy-medicine>
    </section>
</template>

<script>
    import pharmacyMedicine from './pharmacyMedicine'
    export default {
        name: "rankingPage",
        data() {
            return {
                title: this.$route.params.clickedPharmacy.name
            }
        },
        components: {
            'pharmacyMedicine': pharmacyMedicine
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