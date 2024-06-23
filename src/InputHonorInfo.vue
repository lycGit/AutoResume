<template>
    <view class="container"> 
        <SkillInfo :model="model" btn-hint="请输入自荣誉证书名称" btn-title="添加自定义荣誉证书"></SkillInfo>
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
        model1.name = "英语四级"
        model1.isSelect = false   
        const model2 = new SkillItemModel() 
        model2.name = "英语六级"
        model2.isSelect = false   
        const model3 = new SkillItemModel() 
        model3.name = "计算机一级"
        model3.isSelect = false   
        const model4 = new SkillItemModel() 
        model4.name = "计算机二级"
        model4.isSelect = false   
        const model5 = new SkillItemModel() 
        model5.name = "计算机三级"
        model5.isSelect = false   
        const model6 = new SkillItemModel() 
        model6.name = "计算机四级"
        model6.isSelect = false   
        const model7 = new SkillItemModel() 
        model7.name = "普通话一级"
        model7.isSelect = false   
        const model8 = new SkillItemModel() 
        model8.name = "普通话二级"
        model8.isSelect = false   
        const model9 = new SkillItemModel() 
        model9.name = "十大青年领军人才"
        model9.isSelect = false   
  
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
                     model9
                    
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