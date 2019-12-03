<template>
    <section>
      <div class="imgBox">
        <img src="../../assets/medi.png">
      </div>
      <div class="medicineName">
        <span class="pharmacy">{{pharmacy}}</span>
        <h1>{{medicine}}</h1>
      </div>
      <div class="btnBox">
        <button class="recommendBtn">
          <i class="material-icons">
            thumb_up
          </i>
          {{recommend}}
        </button>
        <button class="searchPharmacyBtn">
          근처 약국 찾기
        </button>
      </div>
      <div class="infoBox">
        -----약 정보----
      </div>
      <div class="reviewBox">
        <h2>리뷰</h2>
        <div class="reviewTextWrap">
          <textarea cols="22" rows="4"></textarea>
          <button class="writeBtn">작성하기</button>
        </div>
        <review-list></review-list>
        <review-list></review-list>
        <review-list></review-list>
      </div>
    </section>
</template>

<script>
    import reviewList from './reviewList'
    export default {
        name: "medicineInfo",
        components: {
          'reviewList': reviewList
        },
        data() {
          return {
            pharmacy: "제약사 이름 들어갈 곳",
            medicine: "약 이름 들어갈 곳",
            recommend: 0
          }
        },
        methods: {

        }
    }
</script>

<style scoped>
  section {
    padding: 0 16px;
    margin: 40px 0 160px 0;
    transition: .3s;
  }
  .imgBox {
    text-align: center;
    height: 240px;
    line-height: 240px;
  }
  .imgBox img {
    width: 50%;
    vertical-align: middle;
  }
  .pharmacy {
    font-size: 12px;
    font-weight: 400;
    color: #55CEE2;
  }
  h1 {
    font-size: 21px;
    font-weight: 700;
  }
  .btnBox {
    margin: 10px 0 20px 0;
  }
  button {
    margin-right: 10px;
    width: 30%;
    height: 40px;
    font-size: 14px;
  }
  .recommendBtn {
    border: 2px solid #55CEE2;
    color: #55CEE2;
  }
  .recommendBtn .material-icons {
    margin-right: 10px;
    font-size: 21px;
    vertical-align: middle;
  }
  .searchPharmacyBtn {
    background-color: #55CEE2;
    color: white;
  }
  .infoBox {
    padding-top: 30px;
    margin-bottom: 30px;
    border-top: 1px solid #BDBDBD;
  }


  .reviewBox {
    padding-top: 30px;
    border-top: 1px solid #BDBDBD;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 21px;
    font-weight: 700;
  }
  .reviewTextWrap {
    padding: 10px;
    margin-bottom: 60px;
    box-sizing: border-box;
    background-color: #EEFDFF;
  }
  .reviewTextWrap::after {
    content: '';
    display: block;
    clear: both;
  }
  textarea {
    padding: 10px;
    border: 1px solid #55CEE2;
    margin-bottom: 10px;
    width: 100%;
    height: 100px;
    font-size: 14px;
    font-weight: 400;
    box-sizing: border-box;
    outline: none;
    resize: none;
  }
  .writeBtn {
    float: right;
    font-size: 14px;
    background-color: #55CEE2;
    color: white;
  }

  @media(min-width: 600px) {
    section {
      padding: 0 24px;
      margin: 40px 0 180px 0;
    }
    .imgBox {
      height: 440px;
      line-height: 440px;
    }
    .pharmacy {
      font-size: 14px;
    }
    .medicineName {
      float: left;
    }
    h1 {
      font-size: 30px;
    }
    .btnBox {
      float: right;
      margin: 20px 0;
    }
    button {
      margin: 0 0 0 10px;
      width: 140px;
      height: 44px;
      font-size: 16px;
    }
    .infoBox {
      clear: both;
    }


    h2 {
      margin-bottom: 30px;
      font-size: 30px;
    }
    .reviewTextWrap {
      padding: 20px;
      margin-bottom: 110px;
    }
    textarea {
      padding: 20px;
      margin-bottom: 20px;
      height: 150px;
      font-size: 16px;
    }
    .writeBtn {
      font-size: 18px;
    }
  }

  @media(min-width: 1025px) {
    section {
      padding: 0;
      margin: 40px auto 260px auto;
      width: 1200px;
    }
    .imgBox {
      height: 530px;
      line-height: 530px;
    }
    .imgBox img {
      width: 40%;
    }
    .pharmacy {
      font-size: 16px;
    }
    h1 {
      font-size: 36px;
    }
    .btnBox {
       float: right;
       margin: 26px 0 20px 0;
     }
    button {
      margin: 0 0 0 20px;
      width: 180px;
      height: 50px;
      font-size: 18px;
    }
    textarea {
      font-size: 18px;
    }
    .writeBtn {
      font-size: 18px;
    }
  }
</style>
