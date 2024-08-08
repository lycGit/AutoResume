<template>
    <view class="container">
        <img class="img" src="/images/1015.png">
        <view class="mask">
            <view class="btn">立即使用</view>
        </view>
    </view>

</template>
<script>
export default {
    name: 'ResumeMode',
}
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .img {
    position: absolute;
    left: 0;
    right: 0;
    width: 358px;
    height: 500px;
  }
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    width: 358px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      background-color: #13d8a7;
      width: 60%;
      height: 36px;
      line-height: 36px;
      border-radius: 8px;
      text-align: center;
      font-size: 14px;
      color: white;
    }
  }
  
}

</style>