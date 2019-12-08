<template>
    <div class="reviewBox">
        <h2>리뷰</h2>
        <div class="reviewTextWrap">
            <textarea v-model="content" cols="22" rows="4"></textarea>
            <button @click="submit" class="writeBtn">작성하기</button>
        </div>
        <review-list v-for="item_val in list" v-bind:info="item_val" v-bind:user="user" @event="remove" @renew="rew"></review-list>
    </div>
</template>

<script>
    import reviewList from './reviewList'
    export default {
        name: "reviewBox",
        components: {
            'reviewList': reviewList
        },
        async created(){
            //this.item = this.$route.params.item;
            await this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/api/info',{search: this.$route.params.medicineName}).then((response)=>{
                this.item = response.data;
            })
            console.log("in the reviewBox : ",this.item);
            console.log("_id !! : ",this.item._id);
            await this.$http.get('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/main').then((response) => {
                if(response.data.trig)
                    this.user = response.data.user;
            });
            this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/list',{
                id : this.item._id
            }).then((response) => {
                this.list = response.data;
                console.log("this.list is : ",this.list);
            });
        },
        data : function(){
            return{
                user : {},
                content : "",
                id : "",
                time : "",
                list : [],
                item : {}
            }
        },
        methods : {
            submit(){
                if(!this.user.email){
                    alert('로그인을 한 뒤 작성하실 수 있습니다.');
                    return;
                }
                this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/submit', {
                    content : this.content,
                    email : this.user.email,
                    id : this.item._id,
                    time : "",
                    gender : this.user.gender,
                    age : this.user.age
                }).then((response) => {
                    this.content = "";
                    alert("리뷰가 등록되었습니다.");
                    this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/list',{
                        id : this.item._id
                    }).then((response) => {
                        this.list = response.data;
                        this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/mediManage/update_comment',{
                            medi_id : this.item._id,
                            comment : this.list.length
                        })
                    });
                })
            },
            remove(info){
                this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/remove',{
                    id : info._id,
                    medi_id : this.item._id
                }).then((response)=>{
                    this.content = "";
                    alert("리뷰가 삭제되었습니다.");
                    this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/list',{
                        id : this.item._id
                    }).then((response) => {
                        this.list = response.data;
                        this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/mediManage/update_comment',{
                            medi_id : this.item._id,
                            comment : this.list.length
                        })
                    });
                })
            },
            rew(info){
                console.log("info : ",info);
                this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/update',{
                    id : info._id,
                    medi_id : this.item._id,
                    comment : info.content
                }).then((response)=> {
                    alert("리뷰가 수정되었습니다.");
                    this.$http.post('http://ec2-52-78-110-228.ap-northeast-2.compute.amazonaws.com/review/list',{
                        id : this.item._id
                    }).then((response) => {
                        this.list = response.data;
                    })
                });
            }
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