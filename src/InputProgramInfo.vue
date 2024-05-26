<template>
    <view class="container">
      <ProgramInfo :model="model" v-for="(model ,index) in models"
      @upAction="upAction"
      @downAction="downAction"
      @deleteAction="deleteAction"
      @aiAction="aiAction"
      ></ProgramInfo>
       <view style="width: 1104px;">
        <view class="add-btn" @click="addItem"><el-icon :size="14" color="rgb(255, 255, 255)" style="margin-right: 5px;"><Plus /></el-icon> 新增一条 项目经验</view>
       </view>
    </view>
</template>

<script lang="ts">
import { th } from "element-plus/es/locale";
import ProgramInfo from "./components/ProgramInfo.vue";
import { View, Warning, Plus } from '@element-plus/icons-vue'
import { Component } from "vue";
import { ProgramModel } from "./components/ProgramModel";
export default {

  components: {
    ProgramInfo,
    Plus
  },
  data() {
    return {
      models: []
    }
  },

  methods: {
     uplaod() {
      console.log("EducationModel--detail2", this.model.detail)
     },

     addItem() {
       let model = new ProgramModel()
       model.index = this.models.length
       this.models.push(model)
     },

     upAction(index) {
      console.log("upAction1--", index)
      if (index > 0) {
        const newIndex = index - 1;
        this.models.splice(newIndex, 0, ...this.models.splice(index, 1));
      }
      this.updateModelIndex()
     },
     downAction(index) {
      console.log("downAction--", index)
      if (index < this.models.length - 1) {
        const newIndex = index + 1;
        this.models.splice(newIndex, 0, ...this.models.splice(index, 1));
      }
      console.log("downAction")
      this.updateModelIndex()
     },
     deleteAction(index) {
      console.log("deleteAction")
      this.models.splice(index, 1)
      this.updateModelIndex()
     },
     aiAction(index) {
      console.log("aiAction")
     },

     updateModelIndex() {
       this.models.forEach((model, idx, array) => {
        model.index = idx
       });
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