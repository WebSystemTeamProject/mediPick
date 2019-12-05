<template>
    <div>
        <div class="sortBox">
            <p class="sort">증상 카테고리 선택</p>
            <span class="radioWrap">
          <input type="radio" id="category1" name="medicine" v-model="selectPart" value="몸살감기">
          <label for="category1">몸살감기</label>
        </span>
            <span class="radioWrap">
          <input type="radio" id="category2" name="medicine" v-model="selectPart" value="기관지">
          <label for="category2">기관지</label>
        </span>
            <span class="radioWrap">
          <input type="radio" id="category3" name="medicine" v-model="selectPart" value="위장">
          <label for="category3">위장</label>
        </span>
            <span class="radioWrap">
          <input type="radio" id="category4" name="medicine" v-model="selectPart" value="안질환">
          <label for="category4">안질환</label>
        </span>
            <span class="radioWrap">
          <input type="radio" id="category5" name="medicine" v-model="selectPart" value="피부질환">
          <label for="category5">피부질환</label>
        </span>
            <span class="radioWrap">
          <input type="radio" id="category6" name="medicine" v-model="selectPart" value="타박상">
          <label for="category6">타박상</label>
        </span>
            <span class="radioWrap">
          <input type="radio" id="category7" name="medicine" v-model="selectPart" value="기타">
          <label for="category7">기타</label>
        </span>
            <button @click="click" style="cursor:pointer" class="filterBtn">완료</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchBox",
        data () {
            return {
                selectPart: '',
                flag: 0
            }
        },
        methods: {
            click () {
                this.$router.push(`/searchMedicine/${this.selectPart}`)
                // this.$http.get('http://localhost:3000/searchMedicine/' + this.selectPart)
                //     .then((response) => {
                //         console.log("부위 별 증상 데이터 로드 성공")
                //         console.log(response.data)
                //         this.symptoms = response.data
                //     })
                // return 1
            },
        }
    }
</script>

<style scoped>
    .sortBox {
        padding: 20px 10px;
        margin-bottom: 40px;
        background-color: #EEFDFF;
        box-sizing: border-box;
    }
    .sortBox::after {
        content: '';
        display: block;
        clear: both;
    }
    .sort {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
    }
    .radioWrap {
        float: left;
        display: inline-block;
        width: 25%;
        padding: 0 4px;
        margin-bottom: 8px;
        box-sizing: border-box;
    }
    .radioWrap:nth-of-type(4n-3) {
        padding-left: 0;
    }
    .radioWrap:nth-of-type(4n) {
        padding-right: 0;
    }
    .radioWrap:last-of-type {
        margin-bottom: 20px;
    }
    input[type="radio"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        border: 0;
        margin: 0;
    }
    input[type="radio"]:checked + label {
        border: 2px solid #55CEE2;
        color: #55CEE2;
        font-weight: 700;
    }
    label {
        display: inline-block;
        border: 1px solid #BDBDBD;
        width: 100%;
        height: 40px;
        background-color: white;
        color: #212121;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .filterBtn {
        float: right;
        width: 50%;
        height: 40px;
        background-color: #55CEE2;
        font-size: 16px;
        color: white;
    }

    @media(min-width: 600px) {
        .sortBox {
            padding: 30px 20px;
        }
        .sort {
            margin-bottom: 20px;
        }
        .radioWrap {
            width: 12.5%;
            margin-bottom: 10px;
        }
        .radioWrap:nth-of-type(4n-3) {
            padding-left: 4px;
        }
        .radioWrap:nth-of-type(4n) {
            padding-right: 4px;
        }
        .radioWrap:nth-of-type(8n-7) {
            padding-left: 0;
        }
        .radioWrap:nth-of-type(8n) {
            padding-right: 0;
        }
        label {
            height: 50px;
            font-size: 16px;
            line-height: 50px;
        }
        .filterBtn {
            width: 25%;
            height: 50px;
        }
    }

    @media(min-width: 1025px) {
        .sortBox {
            padding: 30px 35px;
        }
        .sort {
            margin-bottom: 20px;
            font-size: 24px;
        }
        .radioWrap {
            width: 12.5%;
            padding: 0 5px;
            margin-bottom: 10px;
        }
        label {
            font-size: 18px;
        }
        .filterBtn {
            width: 12.5%;
            font-size: 18px;
        }
    }
</style>
