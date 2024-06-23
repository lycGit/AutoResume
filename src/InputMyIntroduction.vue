<template>
    <view class="container"> 
        <el-input v-model="introduce" class="detail" :autosize="{ minRows: 6, maxRows: 6 }" type = "textarea" />
    </view>

</template>
<script lang="ts">

export default {
    components: {
        
    },
    data() { 
       let introduce = ''
        return {
            introduce
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
    .detail {
    width: 1104px;
    height: 165px;
    padding: 0px 15px;
    }
}
:deep(.el-textarea__inner) {
  color: rgb(34, 34, 34);
  background-color: rgb(243, 244, 246)
}
</style>