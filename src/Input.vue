<template>
 <div class="edit_container">
    <div class="edit_box">
        <div class="edit_top">
            <dd class="edit_tab">
                <div  class="tab_item_normal" v-for="(tab, index) in tabs" key="index" @click="changeTab(index)">
                    <span v-if= "index === selectIndex"  class="item_bottom_text_select" >
                        <b>{{ tab }}</b>
                    </span>
                    <span v-else class="item_bottom_text" >
                        <b>{{ tab }}</b>
                    </span>
                    <span  v-if= "index === selectIndex" class="item_bottom_line_select"></span>
                    <span v-else class="item_bottom_line"></span>
                </div>
            </dd>
        </div>
    </div>
 </div>   

</template>
<script lang="ts">

export default {
    data() {
        return {
            tabs: [
                "基本信息",
                "求职岗位",
                "报考信息",
                "教育背景",
                "工作经验",
                "项目经验",
                "实习经验",
                "校园经历",
                "技能特长",
                "荣誉证书",
                "自我评价",
                "兴趣爱好",
            ],
            selectIndex: 0
        }
    },
    methods: {
        changeTab(index:Number) {
            this.selectIndex = index
        }
    }


}

</script>
<style lang="less" scoped>
.edit_container {
    display: flex;
    justify-content: center;
    .edit_box {
        width: 1200px;
        height: 435px;
        .edit_top {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .edit_tab {
                margin-left: 0px;
                padding-left: 0px;
                display: flex;
                flex-direction: row;
                .tab_item_normal {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    width: 92px;
                    height: 27px;
                    font-size: 15px;
                   
                    .item_bottom_text_select {
                        color: #ff6600;
                    }
                    .item_bottom_text {
                        color: #222222;
                    }
                    .item_bottom_line {
                        background-color: #CCCCCC;
                        width: 100%;
                        height: 2px;
                    }
                    .item_bottom_line_select {
                        background-color: #ff6600;
                        width: 100%;
                        height: 2px;
                    }
                }
            }
        }
    }
}


</style>