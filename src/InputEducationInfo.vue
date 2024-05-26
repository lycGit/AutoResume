<template>
    <view class="container">
      <EducationInfo :model="model" ></EducationInfo>
       <view style="width: 1104px;">
        <view class="add-btn" @click="uplaod"><el-icon :size="14" color="rgb(255, 255, 255)" style="margin-right: 5px;"><Plus /></el-icon> 新增一条 教育背景</view>
       </view>
    </view>
</template>

<script lang="ts">
import EducationInfo from "./components/educationInfo.vue";
import { View, Warning, Plus } from '@element-plus/icons-vue'
import { Component } from "vue";
export default {
  components: {
    EducationInfo,
    Plus
  },
  data() {
    return {
      model: {}
    }
  },

  methods: {
     uplaod() {
      console.log("EducationModel--detail2", this.model.detail)
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