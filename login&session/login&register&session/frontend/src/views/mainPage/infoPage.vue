<template>
    <div>
        <section class="pageIntro">
            <div class="title">
                <h1>일반 의약품 정보 제공 및 리뷰 플랙폼</h1>
                <img src="../../assets/logo2.png">
            </div>
            <article>
                <img src="../../assets/fever.png">
                <div class="infoText">
                    <h2>약국이나 편의점에서 약을 구매한 적이 있나요?</h2>
                    <p>일반적으로 아픈 곳이 있다면,
                        병원에가서 처방전을 받은 후 전문 의약품을 구매합니다.
                        부득이하게 병원을 가지 못한다면,
                        근처 약국이나 편의점에서 일반 의약품을 구매하는 경우도 있습니다.
                        일반 의약품은 하나의 증상에 대해 다양한 제품을 제공하고 있어
                        보통 구매처에서 제공하는대로 약에 대해 잘 모른채 구매를 하게 됩니다.</p>
                </div>
            </article>
            <article>
                <img src="../../assets/medicine.png">
                <div class="infoText">
                    <h2>여러분이 먹는 약에 대해 잘 알고 있나요?</h2>
                    <p>우리들은 분명 병과 상처를 고치기 위해 약을 먹습니다.
                        그러나 약이라는 것은 부작용을 발생시키는 경우도 있기 때문에
                        해당 약의 주의사항과 부작용에 대해 잘 알고 있어야 합니다.
                        하지만 놀랍게도 1000명의 설문조사 결과,
                        40퍼센트 이상의 사람들이 약의 부작용 및 주의사항에 대해
                        '모른다'라고 답변하였습니다.</p>
                </div>
            </article>
            <p class="summary">
                <span class="mediPickBold">메디픽</span>은 바로 이러한 사람들을 위한 서비스입니다.<br>
                일반 의약품에 대한 <span style="">정보</span>를 제공해주고, 사용자들의 리뷰를 통해
                더욱 바람직한 일반 의약품 구매를 돕는 플랫폼입니다.
            </p>
        </section>
        <section class="howToUse">
            <h1>메디픽 사용 방법</h1>
            <ul class="howToUseWrapper">
                <li class="howToUseList">
                    <img src="../../assets/pills.png"><br>
                    1. 약의 기본 정보를 확인한다.
                </li>
                <li class="howToUseList">
                    <img src="../../assets/review.png"><br>
                    2. 다른 사람들의 리뷰를 확인한다.
                </li>
                <li class="howToUseList">
                    <img src="../../assets/pharmacy.png"><br>
                    3. 근처 약국으로 사러간다.
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "infoPage"
    }
</script>

<style scoped>
    section {
        margin-top: 80px;
        padding: 0 16px;
        transition: .5s;
    }
    .title {
        text-align: center;
    }
    .title h1 {
        font-size: 18px;
        font-weight: 400;
    }
    .title img {
        margin-top: 20px;
        width: 50%;
    }
    article {
        text-align: center;
    }
    article img {
        margin-top: 60px;
        width: 180px;
    }
    .infoText {
        margin-top: 40px;
        text-align: left;
    }
    .infoText h2 {
        font-size: 16px;
        font-weight: 700;
    }
    .infoText p {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
    }
    .summary {
        margin-top: 50px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
    }
    .mediPickBold {
        font-size: 16px;
        font-weight: 700;
        background-color: #6AE3F7
    }
    .howToUse {
        margin-bottom: 160px;
        text-align: center;
    }
    .howToUse h1 {
        font-size: 24px;
        font-weight: 700;
    }
    .howToUseList {
        margin-top: 60px;
    }
    .howToUseList img {
        margin-bottom: 40px;
        width: 180px;
    }
    @media(min-width: 600px) {
        section {
            margin-top: 160px;
            padding: 0 24px;
        }
        .title h1 {
            font-size: 24px;
        }
        .title img {
            margin-top: 30px;
            width: 33.3333%;
        }
        article img {
            margin-top: 100px;
            width: 300px;
        }
        .infoText {
            margin-top: 80px;
        }
        .infoText h2 {
            font-size: 30px;
        }
        .infoText p {
            margin-top: 20px;
            font-size: 24px;
        }
        .summary {
            margin-top: 100px;
            font-size: 26px;
        }
        .mediPickBold {
            font-size: 30px;
        }
        .howToUse {
            margin-bottom: 180px;
        }
        .howToUse h1 {
            font-size: 48px;
        }
        .howToUseList {
            margin-top: 100px;
            font-size: 30px;
        }
        .howToUseList img {
            margin-bottom: 70px;
            width: 300px;
        }
    }
    @media(min-width: 1025px) {
        section {
            margin: 160px auto 0 auto;
            padding: 0;
            width: 1200px;
        }
        .title h1 {
            font-size: 30px;
        }
        article img {
            margin-top: 120px;
            width: 33.3333%;
        }
        article::after {
            content: '';
            display: block;
            clear: both;
        }
        article:first-of-type img {
            float: left;
        }
        article:first-of-type .infoText {
            float: right;
            padding-left: 100px;
            margin-top: 120px;
            width: 66.6666%;
            box-sizing: border-box;
        }
        article:last-of-type img {
            float: right;
        }
        article:last-of-type .infoText {
            float: right;
            padding-right: 100px;
            margin-top: 120px;
            width: 66.6666%;
            box-sizing: border-box;
        }
        .infoText h2 {
            font-size: 36px;
        }
        .infoText p {
            margin-top: 30px;
            font-size: 24px;
        }
        .summary {
            width: 750px;
            margin: 140px auto 0 auto;
            font-size: 30px;
            text-align: center;
            word-break: keep-all;
        }
        .mediPickBold {
            font-size: 36px;
        }
        .howToUse {
            margin-bottom: 260px;
        }
        .howToUseWrapper::after {
            content: "";
            display: block;
            clear: both;
        }
        .howToUseList {
            float: left;
            width: 33.3333%;
            margin-top: 100px;
            font-size: 21px;
        }
        .howToUseList img {
            margin-bottom: 50px;
            width: 200px;
        }
    }

</style>
