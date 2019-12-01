<template>
    <div class="sortBox">
        <p class="sort">가나다순</p>
        <span class="radioWrap">
          <input type="radio" id="all" name="pharmacy" checked>
          <label for="all">전체</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ga" name="pharmacy">
          <label for="ga">ㄱ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="na" name="pharmacy">
          <label for="na">ㄴ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="da" name="pharmacy">
          <label for="da">ㄷ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ra" name="pharmacy">
          <label for="ra">ㄹ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ma" name="pharmacy">
          <label for="ma">ㅁ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ba" name="pharmacy">
          <label for="ba">ㅂ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="sa" name="pharmacy">
          <label for="sa">ㅅ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="a" name="pharmacy">
          <label for="a">ㅇ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ja" name="pharmacy">
          <label for="ja">ㅈ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="cha" name="pharmacy">
          <label for="cha">ㅊ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ka" name="pharmacy">
          <label for="ka">ㅋ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ta" name="pharmacy">
          <label for="ta">ㅌ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="pa" name="pharmacy">
          <label for="pa">ㅍ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="ha" name="pharmacy">
          <label for="ha">ㅎ</label>
        </span>
        <span class="radioWrap">
          <input type="radio" id="etc" name="pharmacy">
          <label for="etc">기타</label>
        </span>
        <button class="filterBtn">필터 적용</button>
    </div>
</template>

<script>
    export default {
        name: "searchBox",
    }
</script>

<style scoped>
    .sortBox {
        padding: 20px 10px;
        margin-bottom: 40px;
        background-color: #EEFDFF;
        box-sizing: border-box;
    }
    .sortBox::after {
        content: '';
        display: block;
        clear: both;
    }
    .sort {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
    }
    .radioWrap {
        float: left;
        display: inline-block;
        width: 25%;
        padding: 0 4px;
        margin-bottom: 8px;
        box-sizing: border-box;
    }
    .radioWrap:nth-of-type(4n-3) {
        padding-left: 0;
    }
    .radioWrap:nth-of-type(4n) {
        padding-right: 0;
    }
    .radioWrap:last-of-type {
        margin-bottom: 20px;
    }
    input[type="radio"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        border: 0;
        margin: 0;
    }
    input[type="radio"]:checked + label {
        border: 2px solid #55CEE2;
        color: #55CEE2;
        font-weight: 700;
    }
    label {
        display: inline-block;
        border: 1px solid #BDBDBD;
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
    .filterBtn {
        float: right;
        width: 50%;
        height: 40px;
        background-color: #55CEE2;
        font-size: 16px;
        color: white;
    }

    @media(min-width: 600px) {
        .sortBox {
            padding: 30px 20px;
        }
        .sort {
            margin-bottom: 20px;
        }
        .radioWrap {
            width: 12.5%;
            margin-bottom: 10px;
        }
        .radioWrap:nth-of-type(4n-3) {
            padding-left: 4px;
        }
        .radioWrap:nth-of-type(4n) {
            padding-right: 4px;
        }
        .radioWrap:nth-of-type(8n-7) {
            padding-left: 0;
        }
        .radioWrap:nth-of-type(8n) {
            padding-right: 0;
        }
        label {
            height: 50px;
            font-size: 16px;
            line-height: 50px;
        }
        .filterBtn {
            width: 25%;
            height: 50px;
        }
    }

    @media(min-width: 1025px) {
        .sortBox {
            padding: 30px 35px;
        }
        .sort {
            margin-bottom: 20px;
            font-size: 24px;
        }
        .radioWrap {
            width: 12.5%;
            padding: 0 5px;
            margin-bottom: 10px;
        }
        label {
            font-size: 18px;
        }
        .filterBtn {
            width: 12.5%;
            font-size: 18px;
        }
    }
</style>