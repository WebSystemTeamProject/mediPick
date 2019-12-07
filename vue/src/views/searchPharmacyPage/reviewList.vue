<template>
    <div class="review">
      <div class="floatedBox">
        <div class="imgBox">
          <img src="../../assets/pills.png">
        </div>
        <div class="userBox">
          <div>
            <span class="userName">{{info.email}}</span>
            <span class="userInfo">{{info.age}}, {{info.gender}}<!--20세, 남성--></span>
          </div>
        </div>
        <div class="date">
          {{info.time}}<br>
          <button @click="del">삭제하기</button>
          <button @click="rew">수정</button>
        </div>
      </div>
      <div v-if="trig" class="modify">
        <textarea v-model="content" cols="22" rows="4"></textarea>
        <button @click="review_up" class="writeBtn">확인</button>
      </div>
      <p v-else class="reviewText">
        {{info.content}}<!--
        인도하겠다는 우리는 곳으로 기관과 불어 운다. 이성은 피고 사는가 천하를 보내는 인류의 것이다.
        이것이야말로 전인 가치를 청춘이 길지 창공에 피부가 그리하였는가?-->
      </p>
    </div>
</template>

<script>
    export default {
        name: "reviewList",
      props: {
          info: Object,
        user : Object
      },
      data(){
        return{
          trig : false,
          content : ""
        }
      },
      methods:{
        del() {
          console.log("email : ", this.user.email)
          console.log("info_email : ", this.info.email);
          if (this.user.email !== this.info.email) {
            alert("다른 사람의 댓글은 삭제 할 수 없습니다.");
            return;
          }
          this.$emit('event', this.info)
        },
        rew() {
          console.log("email : ", this.user.email)
          console.log("info_email : ", this.info.email);
          if (this.user.email !== this.info.email) {
            alert("다른 사람의 댓글은 수정할 수 없습니다.");
            return;
          }
          this.trig = true;
        },
        async review_up() {
          this.info.content = this.content;
          await this.$emit('renew', this.info);
          this.content = "";
          this.trig = false;
        }
      }
    }
</script>

<style scoped>
  .review {
    padding: 30px 10px;
    border-bottom: 1px solid #BDBDBD;
    box-sizing: border-box;
  }
  .floatedBox {
    margin-bottom: 20px;
  }
  .floatedBox::after {
    content: '';
    display: block;
    clear: both;
  }
  .imgBox {
    float: left;
    width: 60px;
    height: 60px;
  }
  .imgBox img {
    border-radius: 50%;
    width: 100%;
  }
  .userBox {
    float: left;
    display: table;
    margin-left: 6px;
    height: 60px;
  }
  .userBox > div {
    display: table-cell;
    vertical-align: middle;
  }
  .userName {
    display: block;
    font-size: 14px;
    font-weight: 700;
  }
  .userInfo {
    display: block;
    font-size: 12px;
    font-weight: 400;
  }
  .date {
    float: right;
    font-size: 12px;
    font-weight: 400;
  }
  .date button {
    float: right;
    font-size: 14px;
    clear: both;
  }
  .date::after {
    content: "";
    display: block;
    clear: both;
  }
  .reviewText {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }
  .modify::after {
    content: "";
    display: block;
    clear: both;
  }
  .modify textarea {
    padding: 10px;
    border: 1px solid #bdbdbd;
    width: 100%;
    height: 100px;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    resize: none;
  }
  .modify .writeBtn {
    float: right;
    margin-top: 10px;
    width: 25%;
    height: 40px;
    font-size: 14px;
    background-color: #bdbdbd;
    color: white;
  }
  @media(min-width: 600px) {
    .floatedBox {
      margin-bottom: 40px;
    }
    .imgBox {
      width: 80px;
      height: 80px;
    }
    .userBox {
      margin-left: 40px;
      height: 80px;
    }
    .userName {
      font-size: 16px;
    }
    .userInfo {
      font-size: 14px;
    }
    .date {
      font-size: 14px;
    }
    .date button {
      font-size: 16px;
    }
    .reviewText {
      font-size: 16px;
    }
    .modify textarea {
      padding: 20px;
      height: 150px;
      font-size: 16px;
    }
    .modify .writeBtn {
      width: 140px;
      height: 48px;
      font-size: 16px;
    }
  }

  @media(min-width: 1025px) {
    .review {
      padding: 40px 20px;
    }
    .floatedBox {
      margin-bottom: 30px;
    }
    .imgBox {
      width: 100px;
      height: 100px;
    }
    .userBox {
      margin-left: 50px;
      height: 100px;
    }
    .userName {
      font-size: 18px;
    }
    .userInfo {
      font-size: 18px;
    }
    .date {
      font-size: 16px;
    }
    .date button {
      font-size: 18px;
    }
    .reviewText {
      font-size: 18px;
    }
    .modify textarea {
      font-size: 18px;
    }
    .modify .writeBtn {
      width: 180px;
      height: 50px;
      font-size: 18px;
    }
  }
</style>
