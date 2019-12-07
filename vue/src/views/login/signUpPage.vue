<template>
    <section>
        <h1 class="title">회원가입</h1>
        <div class="inputText">
            <h2>이메일</h2>
            <input v-model="email" type="text" id="mail">
        </div>
        <div class="inputText">
            <h2>비밀번호</h2>
            <input v-model="password" type="password" id="password">
        </div>
        <div class="inputText">
            <!--<label for="gender">성별</label><br>-->
            <!--<input v-model = 'gender' type="text" id="gender">-->
            <h2>성별</h2>
            <span class="radioWrapGender">
                <input type="radio" id="male" name="gender" v-model="gender" value="male">
                <label for="male">남성</label>
            </span>
            <span class="radioWrapGender">
                <input type="radio" id="female" name="gender" v-model="gender" value="female">
                <label for="female">여성</label>
            </span>
        </div>
        <div class="inputText">
            <h2>나이</h2>
            <span class="radioWrapAge">
                <input type="radio" id="child" name="age" v-model="age" value="10대 미만">
                <label for="child">10대 미만</label>
            </span>
            <span class="radioWrapAge">
                <input type="radio" id="ten" name="age" v-model="age" value="10대">
                <label for="ten">10대</label>
            </span>
            <span class="radioWrapAge">
                <input type="radio" id="twenty" name="age" v-model="age" value="20대">
                <label for="twenty">20대</label>
            </span>
            <span class="radioWrapAge">
                <input type="radio" id="thirty" name="age" v-model="age" value="30대">
                <label for="thirty">30대</label>
            </span>
            <span class="radioWrapAge">
                <input type="radio" id="forty" name="age" v-model="age" value="40대">
                <label for="forty">40대</label>
            </span>
            <span class="radioWrapAge">
                <input type="radio" id="fifty" name="age" v-model="age" value="50대">
                <label for="fifty">50대</label>
            </span>
            <span class="radioWrapAge">
                <input type="radio" id="sixty" name="age" v-model="age" value="60대">
                <label for="sixty">60대</label>
            </span>
            <span class="radioWrapAge">
                <input type="radio" id="elderly" name="age" v-model="age" value="70대 이상">
                <label for="elderly">70대 이상</label>
            </span>
        </div>
        <div class="btnWrapper">
            <span>
                <button class="loginBtn" @click = "join">회원가입</button>
            </span>
            <span>
                <button class="signUpBtn" @click="goNav('loginPage')">로그인 창으로</button>
            </span>
        </div>
    </section>
</template>

<script>
    export default {
        name: "loginPage",
        data : function(){
            return {
                email : "",
                password : "",
                gender : "",
                age : ""
            }
        },
        methods: {
            async join(){
                if(this.email==="" || this.password==="" || this.gender==="" || this.age==="") {
                    alert("빈칸을 모두 채워주세요");
                    return false;
                }
                await this.$http.post('http://localhost/join', {
                    email : this.email,
                    password : this.password,
                    gender : this.gender,
                    age : this.age
                }).then((response)=>{
                    if(response.data.trig)
                        window.location.href="/";
                    else
                        alert(response.data.message);
                })
            },
            goNav(nav) {
                this.$router.push({name: nav});
                this.$store.commit('setIsHome', false);
            }
        }
    }
</script>

<style scoped>
    section {
        padding: 0 16px;
        margin-top: 40px;
        box-sizing: border-box;
    }
    .title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 40px;
    }
    h2 {
        margin-left: 20px;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 10px;
        color: #757575;
    }
    .inputText {
        width: 280px;
        margin: 0 auto 20px auto;
    }
    .inputText::after {
        content: '';
        display: block;
        clear: both;
    }
    .inputText:nth-last-of-type(2) {
        margin-bottom: 50px;
    }
    input[type="text"], input[type="password"] {
        padding: 0 20px;
        border-radius: 20px;
        font-size: 16px;
        width: 100%;
        height: 40px;
        background-color: #EEEEEE;
        box-sizing: border-box;
        outline: none;
    }
    input[type="radio"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        border: 0;
        margin: 0;
    }
    .radioWrapGender {
        float: left;
        display: inline-block;
        width: 50%;
        padding: 0 4px;
        box-sizing: border-box;
    }
    .radioWrapAge {
        float: left;
        display: inline-block;
        width: 25%;
        padding: 0 4px;
        margin-bottom: 8px;
        box-sizing: border-box;
    }
    input[type="radio"]:checked + label {
        border: 2px solid #55CEE2;
        color: #55CEE2;
        font-weight: 700;
    }
    label {
        display: inline-block;
        border: 1px solid #BDBDBD;
        border-radius: 20px;
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
    .btnWrapper {
        width: 280px;
        margin: 0 auto 160px auto;
    }
    button {
        width: 100%;
        height: 40px;
        font-size: 14px;
        border-radius: 20px;
    }
    .btnWrapper span {
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
    }
    .btnWrapper span:first-of-type {
        padding-right: 4px;
    }
    .btnWrapper span:last-of-type {
        padding-left: 4px;
    }
    .loginBtn {
        background-color: #55CEE2;
        color: #ffffff;
    }
    .signUpBtn {
        border: 1px solid #55CEE2;
        color: #55CEE2;
    }

    @media(min-width: 600px) {
        section {
            padding: 0 24px;
            margin-top: 80px;
        }
        .title {
            font-size: 36px;
            margin-bottom: 60px;
        }
        .inputText {
            width: 360px;
        }
        .inputText:nth-last-of-type(2) {
            margin-bottom: 60px;
        }
        input[type="text"], input[type="password"] {
            border-radius: 24px;
            font-size: 18px;
            height: 48px;
        }
        label {
            border-radius: 24px;
            height: 48px;
            font-size: 16px;
            line-height: 48px;
        }
        .btnWrapper {
            width: 360px;
            margin: 0 auto 180px auto;
        }
        button {
            height: 48px;
            font-size: 16px;
            border-radius: 24px;
        }
        .btnWrapper span:first-of-type {
            padding-right: 8px;
        }
        .btnWrapper span:last-of-type {
            padding-left: 8px;
        }
    }

    @media(min-width: 1025px) {
        section {
            width: 1200px;
            margin: 40px auto 0 auto;
            padding: 0;
        }
        .title {
            font-size: 48px;
        }
        .inputText {
            width: 500px;
            margin: 0 auto 30px auto;
        }
        .inputText:nth-last-of-type(2) {
            margin-bottom: 70px;
        }
        label {
            font-size: 18px;
        }
        input {
            border-radius: 24px;
            font-size: 21px;
            height: 48px;
        }
        .btnWrapper {
            width: 500px;
            margin: 0 auto 130px auto;
        }
        button {
            height: 48px;
            font-size: 18px;
            border-radius: 24px;
        }
        .btnWrapper span:first-of-type {
            padding-right: 10px;
        }
        .btnWrapper span:last-of-type {
            padding-left: 10px;
        }
    }
</style>