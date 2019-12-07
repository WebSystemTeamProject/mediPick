<!--<template>
    <div>
    <div>
        <input v-model="email" type = "text" placeholder="이메일을 입력해주세요"><br><br>
        <input v-model="password" type = "text" placeholder="비밀번호를 입력해주세요"><br><br>
        <input v-on:click = "Login" type = "submit" value = "Login">
    </div>
    </div>
</template>-->

<template>
    <section>
        <h1 class="title">로그인</h1>
        <div class="inputText">
            <label for="mail">이메일</label><br>
            <input v-model = 'email' type="text" id="mail">
        </div>
        <div class="inputText">
            <label for="password">비밀번호</label><br>
            <input v-model = 'password' type="password" id="password">
        </div>
        <div class="btnWrapper">
            <span>
                <button v-on:click = "Login" class="loginBtn">로그인</button>
            </span>
            <span>
                <button class="signUpBtn" @click="goNav('signUpPage')">회원가입 창으로</button>
            </span>
        </div>
    </section>
</template>


<script>

    export default {
        created(){
        },
        data : function(){
            return {
                email : "",
                password : ""
            }
        },
        methods: {
            async Login(){
                    console.log("email :"+this.email);
                    console.log("password : "+this.password);
                    await this.$http.post('http://localhost/login', {
                        email : this.email,
                        password : this.password
                    }).then((response)=>{
                        console.log("result!! : "+response);
                        /*var resultDiv = document.querySelector(".result");*/
                        if(!response.data.trig){
                            console.log(response);
                            alert(response.data.message);
                        }
                        if(response.data.trig) {
                            alert("yes ok");
                            window.location.href="/";
                        }
                    })
            },
            goNav(nav) {
                this.$router.push({name: nav});
                this.$store.commit('setIsHome', false);
            }
        },
        name : "loginPage"
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
    .inputText {
        width: 280px;
        margin: 0 auto 20px auto;
    }
    .inputText:nth-last-of-type(2) {
        margin-bottom: 50px;
    }
    label {
        display: inline-block;
        margin: 0 0 10px 20px;
        font-size: 14px;
        color: #757575;
    }
    input {
        padding: 0 20px;
        border-radius: 20px;
        font-size: 16px;
        width: 100%;
        height: 40px;
        background-color: #EEEEEE;
        box-sizing: border-box;
        outline: none;
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
    span {
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
    }
    span:first-of-type {
        padding-right: 4px;
    }
    span:last-of-type {
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
        label {
            font-size: 16px;
        }
        input {
            border-radius: 24px;
            font-size: 18px;
            height: 48px;
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
        span:first-of-type {
            padding-right: 8px;
        }
        span:last-of-type {
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
        span:first-of-type {
            padding-right: 10px;
        }
        span:last-of-type {
            padding-left: 10px;
        }
    }
</style>