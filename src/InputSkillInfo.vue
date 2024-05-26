<template>
    <view class="container"> 
        <SkillInfo :model="model"></SkillInfo>
    </view>

</template>
<script lang="ts">
import SkillInfo from './components/SkillInfo.vue';
export default {
    components: {
        SkillInfo,
    },
    data() {
        return {
            model: {
                items: [
                    "Office软件",
                    "沟通能力",
                    "口才",
                    "文案编辑",
                    "数据分析",
                    "推广运营",
                    "产品设计",
                    "广告设计",
                    "JavaScript",
                    "Java",
                    "Python",
                    "PHP",
                    "NodeJs",
                    "英语"
                ]
            }
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}
:deep(.el-input__wrapper){
    color: rgb(34, 34, 34);
    background-color: rgb(243, 244, 246)
}
:deep(.el-select__wrapper){
    color: rgb(34, 34, 34);
    background-color: rgb(243, 244, 246)
}

:deep(.el-textarea__inner) {
  color: rgb(34, 34, 34);
  background-color: rgb(243, 244, 246)
}
</style>