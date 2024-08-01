<template>
  <view class="container">
    <view class="resume-header">
      <img class="logo" src="https://www.qmjianli.com/qmjl.jpg">
    </view>
    <view class="resume-area">
        <Resume class="resume"></Resume>
    </view>
    <view class="edit-area">
      <img class="expand-btn" :src="expand ? '/images/shink.png' : '/images/expand.png'" @click="displayEditBar"></img>
      <Input class="input-top"></Input>
        <view class="edit-view" v-if="expand">
            <InputPersonInfo ></InputPersonInfo>
        </view>
    </view>


    <!-- <InputJobInfo></InputJobInfo> -->
    <!-- <InputEducationInfo></InputEducationInfo> -->
    <!-- <InputProgramInfo></InputProgramInfo> -->
    <!-- <InputSkillInfo></InputSkillInfo> -->
    <!-- <InputHonorInfo></InputHonorInfo> -->
    <!-- <InputMyIntroduction></InputMyIntroduction> -->
    <!-- <InputInterestInfo></InputInterestInfo> -->
  </view>
</template>
<script>
import Resume from "./Resume.vue"
import Input from "./Input.vue";
import InputBaseInfo from "./InputBaseInfo.vue";
import InputPersonInfo from "./InputPersonInfo.vue";
import InputJobInfo from "./InputJobInfo.vue";
import InputEducationInfo from "./InputEducationInfo.vue";
import InputProgramInfo from "./InputProgramInfo.vue";
import InputSkillInfo from "./InputSkillInfo.vue";
import InputHonorInfo from "./InputHonorInfo.vue";
import InputMyIntroduction from "./InputMyIntroduction.vue";
import InputInterestInfo from "./InputInterestInfo.vue";
import { reactive } from 'vue'
export default {
  name: 'EditResume',
  components: {
    Resume,
    Input,
    InputBaseInfo,
    InputPersonInfo,
    InputJobInfo,
    InputEducationInfo,
    InputProgramInfo,
    InputSkillInfo,
    InputHonorInfo,
    InputMyIntroduction,
    InputInterestInfo
  },
  data() {
      let expand = false
      return {
        expand,
      }
  },

  methods: {
      displayEditBar() {
        this.expand = !this.expand
      } 
  }

}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .resume-header {
    position: fixed;
    left: 0;
    top: 0;
    height: 66px;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0px 5px 3px 1px rgba(0, 0, 0, 0.1);
    .logo {
      margin-left: 180px;
      width: 156px;
      height: 32px;
    }
  }
  .resume-area{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .edit-area {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0px -5px 3px 1px rgba(0, 0, 0, 0.05);
    .expand-btn {
      margin-top: -40px;
      width: 100px;
      height: 45px;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
    }
    .input-top {
      margin-top: 15px;
    }
    .edit-view {
      margin-bottom: 60px;
    }
  }


}
</style>