<template>
    <section>
        <h1 class="title">의약품 검색</h1>
        <search-box></search-box>
    </section>
</template>

<script>
    import searchBox from './searchBox'
    export default {
        name: "searchMedicine",
        data() {
            return {
                flag1: true,
                flag2: false,
                flag3: false,
                flag4: false,
                flag5: false,
                flag6: false,
                flag7: false
            }
        },
        computed: {
            symptoms1() {
                console.log("symptoms1 get")
                return this.$store.getters.getSymptoms1;
            },
            symptoms2() {
                return this.$store.getters.getSymptoms2;
            },
            symptoms3() {
                return this.$store.getters.getSymptoms3;
            },
            symptoms4() {
                return this.$store.getters.getSymptoms4;
            },
            symptoms5() {
                return this.$store.getters.getSymptoms5;
            },
            symptoms6() {
                return this.$store.getters.getSymptoms6;
            },
            symptoms7() {
                return this.$store.getters.getSymptoms7;
            }
        },
        components: {
            'searchBox': searchBox,
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

