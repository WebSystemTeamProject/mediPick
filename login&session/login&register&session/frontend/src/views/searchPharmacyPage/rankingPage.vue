<template>
    <section>
        <h1 class="title">{{title}}</h1>
        <search-box></search-box>
        <pharmacy-medicine></pharmacy-medicine>
    </section>
</template>

<script>
    import searchBox from './searchBox'
    import pharmacyMedicine from './pharmacyMedicine'
    export default {
        name: "rankingPage",
        data() {
            return {
                title: this.$route.params.clickedPharmacy.name
            }
        },
        components: {
            'searchBox': searchBox,
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


    @media(min-width: 600px) {
        section {
            padding: 0 24px;
            margin: 40px 0 180px 0;
        }
        .title {
            font-size: 36px;
            margin: 0 0 40px 20px;
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

    }
</style>