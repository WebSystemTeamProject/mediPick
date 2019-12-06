<template>
    <div class="reviewBox">
        <h2>리뷰</h2>
        <div class="reviewTextWrap">
            <textarea v-model="content" cols="22" rows="4"></textarea>
            <button @click="submit" class="writeBtn">작성하기</button>
        </div>
        <review-list v-for="item in list" v-bind:info="item" @event="remove"></review-list>
    </div>
</template>

<script>
    import reviewList from './reviewList'
    export default {
        name: "reviewBox",
        components: {
            'reviewList': reviewList
        },
        created(){
            this.item = this.$route.params.item;
            console.log("in the reviewBox : ",this.item);
            console.log("_id !! : ",this.item._id);
            this.$http.get('http://localhost:3000/main').then((response) => {
                if(response.data.trig)
                    this.user = response.data.user;
            });
            this.$http.post('http://localhost:3000/review/list',{
                id : this.item._id
            }).then((response) => {
                this.list = response.data;
                console.log("this.list is : ",this.list);
            });
        },
        data : function(){
            return{
                user : "",
                content : "",
                email : "",
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
                this.$http.post('http://localhost:3000/review/submit', {
                    content : this.content,
                    email : this.user.email,
                    id : this.item._id,
                    time : ""
                }).then((response) => {
                    this.content = "";
                    alert("리뷰가 등록되었습니다.");
                    this.$http.post('http://localhost:3000/review/list',{
                        id : this.item._id
                    }).then((response) => {
                        this.list = response.data;
                        this.$http.post('http://localhost:3000/mediManage/update_comment',{
                            medi_id : this.item._id,
                            comment : this.list.length
                        })
                    });
                })
            },
            remove(info){
                    if(this.user.email !== info.email){
                        alert("다른 사람의 댓글은 삭제 할 수 없습니다.");
                        return;
                    }
                    this.$http.post('http://localhost:3000/review/remove',{
                        id : info._id
                    }).then((response)=>{
                        this.content = "";
                        alert("리뷰가 삭제되었습니다.");
                        this.$http.post('http://localhost:3000/review/list',{
                            id : this.item._id
                        }).then((response) => {
                            this.list = response.data;
                            this.$http.post('http://localhost:3000/mediManage/update_comment',{
                                medi_id : this.item._id,
                                comment : this.list.length
                            })
                        });
                    })
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