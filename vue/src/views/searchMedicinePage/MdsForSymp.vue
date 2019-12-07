<template>
    <section>
        <h1 class="title">선택한 증상에 따른 의약품 추천</h1>
        <div class="listWrap" v-if="medicines_array.length" v-for="medicine in medicines_array">
            <div class="imgBox">
                <img :src="'../../img/' + medicine._id + '.jpg'" onerror="this.src='../../defaultImg.png'">
            </div>
            <div class="titleBox">
                {{medicine.medicineName}}
            </div>
            <div class="btnBox">
                <button>의약품 상세보기</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MdsForSymp",
        data () {
            return {
                medicines_array: []
            }
        },
        created() {
            var symptom = this.$route.params.symp
            console.log(symptom)
            this.$http.post('http://localhost:3000/api/symptom', {"symptom": symptom})
                .then((response) => {
                    this.medicines_array = response.data
                })
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
    .listWrap {
        border-bottom: 1px solid #BDBDBD;
        height: 60px;
        transition: .3s;
    }
    .listWrap::after {
        content: '';
        display: block;
        clear: both;
    }
    .imgBox {
        float: left;
        width: 25%;
        height: 100%;
        line-height: 60px;
    }
    img {
        width: 70%;
        height: 50px;
        vertical-align: middle;
    }
    .titleBox {
        float: left;
        width: 50%;
        line-height: 60px;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        color: #212121;
    }
    .btnBox {
        float: left;
        width: 25%;
        line-height: 60px;
    }
    .btnBox button {
        border: 1px solid #212121;
        width: 100%;
        height: 40px;
        font-size: 12px;
        font-weight: 400;
        cursor: pointer;
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
        .listWrap {
            height: 100px;
        }
        .imgBox {
            line-height: 100px;
        }
        img {
            height: 80px;
        }
        .titleBox {
            width: 60%;
            font-size: 16px;
            line-height: 100px;
        }
        .btnBox {
            width: 15%;
            line-height: 100px;
        }
        .btnBox button {
            height: 44px;
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
        .listWrap {
            height: 130px;
        }
        .imgBox {
            line-height: 130px;
            text-align: center;
        }
        .imgBox img {
            height: 100px;
        }
        .titleBox {
            line-height: 130px;
            font-size: 21px;
        }
        .btnBox {
            line-height: 130px;
        }
        .btnBox button {
            height: 50px;
            font-size: 18px;
        }

    }
</style>


