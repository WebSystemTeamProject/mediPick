<template>
    <section>
        <h1 class="title">선택한 증상에 따른 의약품 추천</h1>
        <medicines-list v-for="medicine in medicines_array"></medicines-list>
    </section>
</template>

<script>
    import medicinesList from './medicinesList'
    export default {
        name: "MdsForSymp",
        data () {
            return {
                medicines_array: []
            }
        },
        created() {
            var symptom = this.$route.params.symp
            this.$http.post('http://localhost/api/symptom', {"symptom": symptom})
                .then((response) => {
                    this.medicines_array = response.data
                })
        },
        components: {
            'medicinesList': medicinesList
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


