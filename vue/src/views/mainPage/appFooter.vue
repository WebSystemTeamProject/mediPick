<template>
    <div class="footerWrap">
        <footer>
            <div>
                <span>(주) 메디픽즈 (대표 : OOO)</span>
                <span>사업자등록번호 : 000-00-00000</span>
                <span>통신판매업신고번호 : 제2019-경기수원-00000호</span>
            </div>
            <div>
                <span>소재지 : 경기도 수원시 영통구 월드컵로 206 KR</span>
                <span>대표전화 : 000-000-0000</span>
                <span>이메일 : qwer@medipicks.com</span>
            </div>
            <br/>
            <br/>
            <div>
                Copyright ⓒ MEDIPICKS Inc. All Rights Reserved.
            </div>
            <img src="../../assets/logo.png">
        </footer>
    </div>
</template>

<script>
    export default {
        name: "appFooter"
    }
</script>

<style scoped>
    .footerWrap {
        padding: 40px 16px 30px 16px;
        background-color: #2D9CAE;
        height: 300px;
        font-size: 12px;
        font-weight: 400;
        color: white;
        box-sizing: border-box;
    }
    footer {
        position: relative;
        height: 100%;
    }
    div:first-of-type {
        margin-bottom: 10px;
    }
    span {
        display: block;
        line-height: 1.5;
    }
    /*span::after {*/
        /*content: "|";*/
        /*display: inline;*/
    /*}*/
    img {
        width: 100px;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    @media(min-width: 600px) {
        .footerWrap {
            padding: 40px 24px 40px 24px;
            font-size: 14px;
        }
        div:first-of-type {
            margin-bottom: 6px;
        }
        span {
            display: inline-block;
        }
        span::after {
            content: "|";
            display: inline;
            margin: 0 6px;
        }
        img {
            width: 120px;
        }
    }

    @media(min-width: 1025px) {
        .footerWrap {
            padding: 40px 0;
            font-size: 16px;
        }
        footer {
            width: 1200px;
            padding: 0;
            margin: 0 auto;
        }
        div:first-of-type {
            margin-bottom: 10px;
        }
        img {
            width: 160px;
        }
    }
    /*footer {*/
        /*padding: 50px 0 16px 200px;*/
        /*height: 300px;*/
        /*background-color: #2D9CAE;*/
        /*color: white;*/
        /*box-sizing: border-box;*/
    /*}*/
    /*.line {*/
        /*padding-left: 10px;*/
        /*padding-right: 10px;*/
        /*opacity: 0.5;*/
    /*}*/
    /*img {*/
        /*padding-left: 1000px;*/
        /*padding-top: 70px;*/
    /*}*/
</style>
