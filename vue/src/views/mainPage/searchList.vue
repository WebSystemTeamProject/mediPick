<template>
    <div class="mediList" @click="goNav('medicineInfo', item)">
        <div class="imgBox">
            <img :src="'../../img/' + item._id + '.jpg'" onerror="this.src='../../defaultImg.png'">
        </div>
        <div class="mediInfo">
            <div>
                <span>{{item.company}}</span>
                <h2>{{item.medicineName}}</h2>
            </div>
        </div>
        <div class="recommend">
                    <span>
                        <i class="material-icons">
                        thumb_up
                        </i>
                    </span>
            <span class="num">{{item.recommend}}</span>
        </div>
        <div class="review">
                    <span>
                        <i class="material-icons">
                        chat
                        </i>
                    </span>
            <span class="num">{{comment}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchList",
        props: {
            item: Object,
            comment : ""
        },
        created(){
            this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/comment',{
                id : this.item._id
            }).then((response) => {
                this.comment = response.data.cnt;
            });
        },
        data(){
          return{
              comment : ""
          }
        },
        methods: {
            goNav(nav, item) {
                this.$router.push({name: nav, params: {medicineName: item.medicineName}});
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
    .imgBox {
        float: left;
        width: 25%;
        height: 100%;
        line-height: 60px;
    }
    .imgBox img {
        width: 70%;
        height: 40px;
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
        width: 12.5%;
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
        .imgBox {
            text-align: center;
            line-height: 100px;
        }
        .imgBox img {
            height: 80px;
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
        .imgBox {
            text-align: center;
            line-height: 180px;
        }
        .imgBox img {
            height: 160px;
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
