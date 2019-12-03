<template>
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
</template>

<script>
    import reviewList from './reviewList'
    export default {
        name: "reviewBox",
        components: {
            'reviewList': reviewList
        }
    }
</script>

<style scoped>

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
        margin-right: 10px;
        width: 30%;
        height: 40px;
        font-size: 14px;
        float: right;
        background-color: #55CEE2;
        color: white;
    }

    @media(min-width: 600px) {

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
            margin: 0 0 0 10px;
            width: 140px;
            height: 44px;
            font-size: 18px;
        }
    }

    @media(min-width: 1025px) {
        textarea {
            font-size: 18px;
        }
        .writeBtn {
            margin: 0 0 0 20px;
            width: 180px;
            height: 50px;
            font-size: 18px;
        }
    }
</style>