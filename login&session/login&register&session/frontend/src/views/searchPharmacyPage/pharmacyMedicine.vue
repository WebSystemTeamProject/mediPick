<template>
    <div class="mediList" @click="goNav('medicineInfo')">
        <div class="rank">1</div>
        <div class="imgBox">
            <img src="../../assets/medi.png">
        </div>
        <div class="mediInfo">
            <div>
                <span>제약사 이름</span>
                <h2>약 이름</h2>
            </div>
        </div>
        <div class="recommend">
            <span>
                <i class="material-icons">
                thumb_up
                </i>
            </span>
            <span class="num">30</span>
        </div>
        <div class="review">
            <span>
                <i class="material-icons">
                chat
                </i>
            </span>
            <span class="num">14</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pharmacyMedicine",
        methods: {
            goNav(nav) {
                this.$router.push({name: nav});
            }
        }
    }
</script>

<style scoped>
    .mediList {
        border-bottom: 1px solid #BDBDBD;
        height: 60px;
        cursor: pointer;
        transition: .3s;
    }
    .mediList::after {
        content: '';
        display: block;
        clear: both;
    }
    .rank {
        float: left;
        width: 8.3333%;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        font-style: italic;
        line-height: 60px;
    }
    .imgBox {
        float: left;
        width: 25%;
        height: 100%;
        line-height: 60px;
    }
    .imgBox img {
        width: 70%;
        vertical-align: middle;
    }
    .mediInfo {
        display: table;
        float: left;
        width: 50%;
        height: 60px;
    }
    .mediInfo > div {
        display: table-cell;
        vertical-align: middle;
    }
    .mediInfo span {
        display: inline-block;
        font-size: 8px;
        font-weight: 400;
        color: #55CEE2;
    }
    .mediInfo h2 {
        font-size: 10px;
        font-weight: 400;
    }
    .recommend, .review {
        float: left;
        width: 8.3333%;
        line-height: 60px;
    }
    .recommend .material-icons, .review .material-icons {
        vertical-align: middle;
        font-size: 12px;
    }
    .num {
        font-size: 8px;
        font-weight: 400;
    }

    @media(min-width: 600px) {
        .mediList {
            height: 100px;
        }
        .rank {
            font-size: 21px;
            line-height: 100px;
        }
        .imgBox {
            text-align: center;
            line-height: 100px;
        }
        .mediInfo {
            height: 100px;
        }
        .mediInfo span {
            font-size: 12px;
        }
        .mediInfo h2 {
            font-size: 16px;
        }
        .recommend, .review {
            line-height: 100px;
        }
        .recommend .material-icons, .review .material-icons {
            font-size: 16px;
        }
        .num {
            margin-left: 8px;
            font-size: 12px;
        }
    }

    @media(min-width: 1025px) {
        .mediList {
            height: 180px;
        }
        .rank {
            font-size: 30px;
            line-height: 180px;
        }
        .imgBox {
            text-align: center;
            line-height: 180px;
        }
        .mediInfo {
            height: 180px;
        }
        .mediInfo span {
            font-size: 16px;
        }
        .mediInfo h2 {
            font-size: 21px;
        }
        .recommend, .review {
            line-height: 180px;
        }
        .recommend .material-icons, .review .material-icons {
            font-size: 21px;
        }
        .num {
            margin-left: 10px;
            font-size: 16px;
        }
    }

</style>