<template>
    <view class="container"> 
        <SkillInfo :model="model"></SkillInfo>
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
        model1.name = "Office软件"
        model1.isSelect = false   
        const model2 = new SkillItemModel() 
        model2.name = "沟通能力"
        model2.isSelect = false   
        const model3 = new SkillItemModel() 
        model3.name = "口才"
        model3.isSelect = false   
        const model4 = new SkillItemModel() 
        model4.name = "文案编辑"
        model4.isSelect = false   
        const model5 = new SkillItemModel() 
        model5.name = "数据分析"
        model5.isSelect = false   
        const model6 = new SkillItemModel() 
        model6.name = "推广运营"
        model6.isSelect = false   
        const model7 = new SkillItemModel() 
        model7.name = "产品设计"
        model7.isSelect = false   
        const model8 = new SkillItemModel() 
        model8.name = "广告设计"
        model8.isSelect = false   
        const model9 = new SkillItemModel() 
        model9.name = "JavaScript"
        model9.isSelect = false   
        const model10 = new SkillItemModel() 
        model10.name = "Java"
        model10.isSelect = false   
        const model11 = new SkillItemModel() 
        model11.name = "Python"
        model11.isSelect = false   
        const model12 = new SkillItemModel() 
        model12.name = "PHP"
        model12.isSelect = false   
        const model13 = new SkillItemModel() 
        model13.name = "NodeJs"
        model13.isSelect = false   
        const model14 = new SkillItemModel() 
        model14.name = "英语"
        model14.isSelect = false   
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
                     model13,
                     model14
                    
                ]
                
                // items: [                   
                //     "Office软件",
                //     "沟通能力",
                //     "口才",
                //     "文案编辑",
                //     "数据分析",
                //     "推广运营",
                //     "产品设计",
                //     "广告设计",
                //     "JavaScript",
                //     "Java",
                //     "Python",
                //     "PHP",
                //     "NodeJs",
                //     "英语"
                // ]
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