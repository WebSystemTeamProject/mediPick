<template>
    <form>
        <div class="selectAll">
            <div class="selectWrapper">
                <select class="symptomArea">
                    <option disabled selected>증상 부위</option>
                    <option v-for="area in areas">{{area}}</option>
                </select>
            </div>
            <div class="selectWrapper">
                <select class="symptomArea">
                    <option disabled selected>증상</option>
                    <option v-for="symptom in symptoms">{{symptom}}</option>
                </select>
            </div>
        </div>
        <div class="btnWrapper">
            <button class="searchBtn" @click="searchClick">검색</button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "symptomSearch",
        computed: {
            areas() {
                return this.$store.state.symptomArea;
            },
            symptoms() {
                return this.$store.state.symptomName;
            },
            ages() {
                return this.$store.state.ages;
            },
            genders() {
                return this.$store.state.genders;
            }
        },
        methods: {
            searchClick() {
                console.log("클릭");
            }
        }
    }
</script>

<style scoped>
    form {
        transition: .3s;
    }
    .selectWrapper {
        float: left;
        width: 50%;
        display: inline-block;
        padding: 0 4px;
        margin-bottom: 2px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 400;
    }

    .symptomArea {
        width: 100%;
        height: 40px;
        text-align-last: center;
    }

    .btnWrapper {
        padding: 0 4px;
        box-sizing: border-box;
    }

    .searchBtn {
        margin-top: 4px;
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        font-size: 14px;
        font-weight: 700;
    }

    @media (min-width: 600px) {
        .selectAll {
            width: 80%;
        }

        .selectWrapper {
            /*width: 25%;*/
            padding: 0 1px;
            margin: 0;
            font-size: 16px;
        }

        .symptomArea {
            height: 48px;
            font-size: 16px;
        }

        .btnWrapper {
            width: 20%;
            float: right;
            padding-left: 20px;
        }

        .searchBtn {
            margin: 0;
            height: 48px;
            font-size: 16px;
        }
    }

    @media (min-width: 1025px) {
        .btnWrapper {
            padding-left: 10px;
        }

        .symptomArea {
            font-size: 18px;
        }
    }
</style>
