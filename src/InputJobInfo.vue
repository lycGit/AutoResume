<template>
    <view class="container">
        <view class="v-part">
            <view class="input-row">
                <span class="input-title">求职岗位</span>
                <el-input class="input-content"
                v-model="formInline.job"
                style="width: 180px"
                placeholder="请输入求职岗位"
                />
            </view>
            <view class="input-row">
                <span class="input-title">意向城市</span>
                <el-input class="input-content"
                v-model="formInline.city"
                style="width: 180px"
                placeholder="请输入意向城市"
                />
            </view>
            <view class="input-row">
                <span class="input-title">期望薪资</span>
                <el-input class="input-content"
                v-model="formInline.salary"
                style="width: 180px"
                placeholder="请输入期望薪资"
                />
            </view>
            <view class="input-row">
                <span class="input-title">入职时间</span> 
                <el-select v-model="formInline.date" class="m-2" style="width: 180px" placeholder="请选择工作年限">
                    <el-option
                    v-for="item in dates"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                   />
                 </el-select>
            </view>

       </view>
    </view>

</template>

<script ang="ts" setup>
import { reactive } from 'vue'
import { View, Warning } from '@element-plus/icons-vue'
const formInline = reactive({
  job: '',
  city: '',
  salary: '',
  date:'',
})

const dates = [
  {
    value: '0',
    label: '不填',
  },
  {
    value: '1',
    label: '随时到岗',
  },
  {
    value: '2',
    label: '一周内到岗',
  },
  {
    value: '3',
    label: '一个月内到岗',
  },
  {
    value: '4',
    label: '到岗时间另行商议',
  },
]

</script>

<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 380px;
}

    .v-part {
        width: 1104px;
        flex: 1;
        display:flex;
        flex-direction: row;
        margin-top: 30px;
        .input-row {
            display: flex;
            flex-direction: row;
            margin-right: 20px;
            align-items: center;
            .input-title {
                width: 66px;
                height: 33px;
                padding-right: 10px;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                font-size: 14px;
                color: '#333333';
            }

            .input-content {
                width: 180px;
                height: 32px;
            }
        }
    }


:deep(.el-input__wrapper){
    color: rgb(34, 34, 34);
    background-color: rgb(243, 244, 246)
}

:deep(.el-select__wrapper){
    color: rgb(34, 34, 34);
    background-color: rgb(243, 244, 246)
}
</style>