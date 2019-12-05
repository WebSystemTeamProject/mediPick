<template>
    <footer>
        <section>
            <p>
                (주) 메디픽즈 (대표 : OOO)<span class="line">|</span>
                사업자등록번호 : 000-00-00000<span class="line">|</span>
                통신판매업신고번호 : 제2019-경기수원-00000호
            </p>
            <p>
                소재지 : 경기도 수원시 영통구 월드컵로 206 KR<span class="line">|</span>
                대표전화 : 000-000-0000<span class="line">|</span>
                이메일 : qwer@medipicks.com
            </p>
            <br/>
            <p>
                Copyright ⓒ MEDIPICKS Inc. All Rights Reserved.
            </p>
            <img src="../../assets/logo.png">
        </section>
    </footer>
</template>

<script>
    export default {
        name: "appFooter"
    }
</script>

<style scoped>
    footer {
        height: 300px;
        background-color: #2D9CAE;
        color: white;
    }
    section {
        padding: 50px 0px 16px 200px;
        transition: .5s;
    }
    .line {
        padding-left: 10px;
        padding-right: 10px;
        opacity: 0.5;
    }
    img {
        padding-left: 1000px;
        padding-top: 70px;
    }
</style>
