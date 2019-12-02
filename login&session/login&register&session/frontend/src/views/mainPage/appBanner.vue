<template>
    <div class="banner">
        <div class="bannerContentWrapper">
            <p class="bannerText">이 상황엔 무슨 약이?<br>
                <span style="font-weight: 700">메디픽</span>으로 찾아보세요.</p>
            <symptom-search class="symptomSearch"></symptom-search>
        </div>
    </div>
</template>

<script>
    import symptomSearch from "./symptomSearch";
    export default {
        name: "appBanner",
        components: {
            "symptomSearch": symptomSearch
        }
    }
</script>

<style scoped>
    .banner {
        padding: 0 16px;
        height: 450px;
        background-image: url("../../assets/banner_mobile.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: .3s;
    }
    .bannerText {
        padding-top: 125px;
        font-size: 30px;
        color: #ffffff;
        text-align: right;
        line-height: 1.5;
    }
    .symptomSearch {
        margin-top: 84px;
    }
    @media(min-width: 600px) {
        .banner {
            padding: 0 24px;
            height: 650px;
            background-image: url("../../assets/banner_tablet.png");
        }
        .bannerText {
            padding-top: 260px;
            font-size: 48px;
            line-height: 1.25;
        }
        .symptomSearch {
            margin-top: 120px;
        }
    }
    @media(min-width: 1025px) {
        .banner {
            height: 700px;
            padding: 0;
            background-image: url("../../assets/banner.png");
        }
        .bannerContentWrapper {
            width: 1200px;
            margin: 0 auto;
        }
        .bannerText {
            font-size: 72px
        }
        .symptomSearch {
            margin-top: 100px;
        }
    }

</style>
