<template>
  <view class="container">
    <view class="resume-area">
        <Resume class="resume"></Resume>
    </view>
    <view class="edit-area">
      <img class="expand-btn" :src="this.expand ? '/images/expand.png' : '/images/shink.png'"></img>
      <Input class="input-top"></Input>
        <view class="edit-view">
            <InputPersonInfo></InputPersonInfo>
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
  }

}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .resume-area{
    position: absolute;
    top:0;
    left: 0;
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