<template>
    <section>
        <h1 class="title">세부적인 증상 선택</h1>
        <symptoms-list v-if="flag===1" v-for="symptom in symptoms1" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-if="flag===2" v-for="symptom in symptoms2" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-if="flag===3" v-for="symptom in symptoms3" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-if="flag===4" v-for="symptom in symptoms4" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-if="flag===5" v-for="symptom in symptoms5" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-if="flag===6" v-for="symptom in symptoms6" v-bind:symptom="symptom"></symptoms-list>
        <symptoms-list v-if="flag===7" v-for="symptom in symptoms7" v-bind:symptom="symptom"></symptoms-list>
    </section>
</template>

<script>
    import symptomsList from './symptomsList'
    export default {
        name: "searchSymptoms",
        data () {
            return {
                partCategory: this.$route.params.part
            }

        },
        computed: {
            flag() {
                if (this.partCategory === "몸살감기") {
                    return 1
                } else if (this.partCategory === "기관지") {
                    return 2
                } else if (this.partCategory === "위장") {
                    return 3
                } else if (this.partCategory === "간") {
                    return 4
                } else if (this.partCategory === "피부질환") {
                    return 5
                } else if (this.partCategory === "타박상") {
                    return 6
                } else if (this.partCategory === "기타") {
                    return 7
                } else {
                    return 0
                }
            },
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
        methods: {
            goNav(nav) {
                this.$router.push({name: nav, params: {clickedSymptom: this.symptom}});
            }
        },
        components: {
            'symptomsList': symptomsList
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

