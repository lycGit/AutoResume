<template>
    <view class="container"> 
        <SkillInfo :model="model" btn-hint="请输入自定义名称" btn-title="添加自定义兴趣爱好"></SkillInfo>
    </view>

</template>
<script lang="ts">
import SkillInfo from './components/SkillInfo.vue';
import { SkillItemModel } from './components/SkillModel';
export default {
    components: {
        SkillInfo,
    },
    data() {
        const model1 = new SkillItemModel() 
        model1.name = "篮球"
        model1.isSelect = false   
        const model2 = new SkillItemModel() 
        model2.name = "跑步"
        model2.isSelect = false   
        const model3 = new SkillItemModel() 
        model3.name = "唱歌"
        model3.isSelect = false   
        const model4 = new SkillItemModel() 
        model4.name = "跳舞"
        model4.isSelect = false   
        const model5 = new SkillItemModel() 
        model5.name = "摄影"
        model5.isSelect = false   
        const model6 = new SkillItemModel() 
        model6.name = "旅行"
        model6.isSelect = false   
        const model7 = new SkillItemModel() 
        model7.name = "健身"
        model7.isSelect = false   
        const model8 = new SkillItemModel() 
        model8.name = "养宠物"
        model8.isSelect = false   
        const model9 = new SkillItemModel() 
        model9.name = "园艺"
        model9.isSelect = false   
        const model10 = new SkillItemModel() 
        model10.name = "桌游"
        model10.isSelect = false   
        const model11 = new SkillItemModel() 
        model11.name = "吃鸡"
        model11.isSelect = false   
        const model12 = new SkillItemModel() 
        model12.name = "王者荣耀"
        model12.isSelect = false   
  
        return {
            model: {
                items: [   
                     model1,
                     model2,
                     model3,
                     model4,
                     model5,
                     model6,
                     model7,
                     model8,
                     model9,
                     model10,
                     model11,
                     model12,
                    
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