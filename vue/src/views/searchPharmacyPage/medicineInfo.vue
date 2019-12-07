<template>
    <section>
      <div class="imgBox">
        <img src="../../assets/medi.png">
      </div>
      <div class="medicineName">
        <span class="pharmacy">{{item.company}}</span>
        <h1>{{item.medicineName}}</h1>
      </div>
      <div class="btnBox">
        <button class="recommendBtn" style="cursor:pointer" @click="rec">
          <i class="material-icons">
            thumb_up
          </i>
          {{item.recommend}}
        </button>
        <button class="searchPharmacyBtn" style="cursor:pointer" @click="toMap">
          근처 약국 찾기
        </button>
      </div>
      <div class="infoBox">
        형태 : {{item.shape}}<br><br>
        {{item.activeInGredient}}<br><br>
        주의 : {{item.precautions}}<br><br>
        복용 : {{item.dosage}}<br><br>
        {{item.additive}}<br><br>
        기간 : {{item.period}}<br><br>
        효능효과 : {{item.efficacy}}<br>
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
        created(){
          this.item = this.$route.params.item;
          this.$http.get('http://localhost:3000/main').then((response) => {
            if(response.data.trig)
              this.user = response.data.user;
          });
        },
        data() {
          return {
            item: {},
            recommend: 0,
            user : {}
          }
        },
        methods: {
          async rec(){
            if(!this.user.email){
              alert("로그인을 한 뒤에 추천하실 수 있습니다.");
              return;
            }
            console.log("this.user : ",this.user);
            if(this.user.recommend[this.item._id] !== true) {
              this.item.recommend += 1;
              this.user.recommend[this.item._id] = true;
              alert("추천되었습니다.");
            }
            else{
              this.item.recommend -= 1;
              this.user.recommend[this.item._id] = false;
              alert("추천이 취소되었습니다.");
            }
            await this.$http.post('http://localhost:3000/userManage/update',{
              user : this.user
            }).then((response) => {
                this.user = response.data;
                this.$http.post('http://localhost:3000/main/update',{
                  user : this.user
                }).then((response) => {
                  this.user = response.data;
              });
            });
            await this.$http.post('http://localhost:3000/mediManage/update',{
                medi_id : this.item._id,
                recommend : this.item.recommend
            });
            console.log("front : this.user : ",this.user);
          },
          toMap() {
            this.$router.push(`/findPharmacy`)
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
