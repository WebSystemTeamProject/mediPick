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
      <review-box></review-box>
    </section>
</template>

<script>
    import reviewBox from './reviewBox'
    export default {
        name: "medicineInfo",
        components: {
          'reviewBox': reviewBox
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

  }
</style>
