<template>
    <div class="listWrap">
        <div class="titleBox">
            {{symptom}}
        </div>
        <div class="btnBox">
            <button @click="click">의약품 보기</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "symptomsList",
        props: {
            symptom: String
        },
        methods: {
            click() {
                this.$router.push(`/searchMedicine/symptom/${this.symptom}`)
            }
        }
    }
</script>

<style scoped>
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
    .titleBox {
        float: left;
        width: 60%;
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
        .listWrap {
            height: 100px;
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
        .listWrap {
            height: 130px;
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
