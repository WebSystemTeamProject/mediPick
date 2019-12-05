<template>
    <section>
        <h1 class="title">의약품 검색</h1>
        <search-box></search-box>
        <symptoms-list v-on:update-flag="updateFlag" v-if="flag1" v-for="symptom in symptoms1" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-on:update-flag="updateFlag" v-if="flag2" v-for="symptom in symptoms2" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-on:update-flag="updateFlag" v-if="flag3" v-for="symptom in symptoms3" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-on:update-flag="updateFlag" v-if="flag4" v-for="symptom in symptoms4" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-on:update-flag="updateFlag" v-if="flag5" v-for="symptom in symptoms5" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-on:update-flag="updateFlag" v-if="flag6" v-for="symptom in symptoms6" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-on:update-flag="updateFlag" v-if="flag7" v-for="symptom in symptoms7" v-bind:symptom="symptom"></symptoms-list>
    </section>
</template>

<script>
    import symptomsList from './symptomsList'
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
            'symptomsList': symptomsList
        },
        methods: {
            updateFlag: function(flag) {
                console.log(flag)
                if (flag === 0) {
                    console.log("flag가 0")
                    this.flag1 = false
                    this.flag2 = false
                    this.flag3 = false
                    this.flag4 = false
                    this.flag5 = false
                    this.flag6 = false
                    this.flag7 = false
                    return false
                } else if (flag === 1) {
                    console.log("flag가 1")
                    this.flag1 = true
                    this.flag2 = false
                    this.flag3 = false
                    this.flag4 = false
                    this.flag5 = false
                    this.flag6 = false
                    this.flag7 = false
                    return true
                } else if (flag === 2) {
                    this.flag1 = false
                    this.flag2 = true
                    this.flag3 = false
                    this.flag4 = false
                    this.flag5 = false
                    this.flag6 = false
                    this.flag7 = false
                } else if (flag === 3) {
                    this.flag1 = false
                    this.flag2 = false
                    this.flag3 = true
                    this.flag4 = false
                    this.flag5 = false
                    this.flag6 = false
                    this.flag7 = false
                } else if (flag === 4) {

                }
            }
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

