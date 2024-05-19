<template>
    <view class="container">
        <view class="v-part">
            <view class="input-row">
                <span class="input-title">学校名称</span>
                <el-input class="input-content"
                v-model="formInline.school"
                style="width: 180px"
                placeholder="请输入学校名称"
                />
            </view>
            <view class="input-row">
                <span class="input-title">所学专业</span>
                <el-input class="input-content"
                v-model="formInline.major"
                style="width: 180px"
                placeholder="请输入所学专业"
                />
            </view>
            <view class="input-row">
                <span class="input-title">就读时间</span>
                <el-date-picker class="date-picker"
                    v-model="formInline.startDate"
                    type="date"
                    placeholder="请选择"
                    style="width: 100px"
                />
                <span class="middle-line" style="margin: 0 3px;">-</span>
                <el-date-picker class="date-picker"
                    v-model="formInline.endDate"
                    type="date"
                    placeholder="请选择"
                    style="width: 100px"
                />
            </view>
            <view class="input-row">
                <span class="input-title">学历</span> 
                <el-select v-model="formInline.education" class="m-2" style="width: 180px" placeholder="请选择学历">
                    <el-option
                    v-for="item in educations"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                   />
                 </el-select>
            </view>

       </view>
       <el-input v-model="formInline.detail" class="detail" :autosize="{ minRows: 6, maxRows: 6 }" type = "textarea"/>
       <view style="width: 1104px;">
        <view class="add-btn"><el-icon :size="14" color="rgb(255, 255, 255)" style="margin-right: 5px;"><Plus /></el-icon> 新增一条 教育背景</view>
       </view>
      
       
    </view>
</template>

<script ang="ts" setup>
import { reactive } from 'vue'
import { View, Warning, Plus } from '@element-plus/icons-vue'
const formInline = reactive({
  school: '',
  major: '',
  startDate: '',
  endDate:'',
  education:'',
  detail:'专业成绩：GPA 3.66/4 （专业前5%）\n主修课程：计算机系统结构、计算机网络、C语言、数据结构、操作系统、数据库原理等。'
})

const educations = [
  {
    value: '0',
    label: '不填',
  },
  {
    value: '1',
    label: '初中',
  },
  {
    value: '2',
    label: '高中',
  },
  {
    value: '3',
    label: '中专',
  },
  {
    value: '4',
    label: '大专',
  },
  {
    value: '5',
    label: '本科',
  },
  {
    value: '6',
    label: '硕士',
  },
  {
    value: '7',
    label: 'MBA',
  },
  {
    value: '8',
    label: '博士',
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
            .middle-line {
                font-size: 14px;
                color: '#333333'; 
            }

            .input-content {
                width: 180px;
                height: 32px;
            }
        }
    }
    .detail {
      width: 1104px;
      height: 130px;
      padding: 12px 15px;
      max-height: 130px;
      min-height: 130px;
    }
    .add-btn {
      background-color: rgb(19, 216, 167);
      width: 176px;
      height: 40px;
      color: white;
      margin: 12px 0;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
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