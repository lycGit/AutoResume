<template>
    <view class="container">
        <!-- <el-icon :size="20" class="el-icon-edit"></el-icon> -->
        <el-icon :size="20">
            <Edit />
        </el-icon>
      <text class="info-tip">填写后会自动排版在简历上，不需要的信息可以选择不填或删除内容。</text>
      <view class ="info-list" >
        <view class="v-part">
            <div>
                <span>您的姓名</span>
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <span>您的姓名</span> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <span>您的姓名</span> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
        </view>
        <view class="v-part">
            <div>
                <view style="width: 66px">性别</view>
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <view style="width: 66px">联系电话</view> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <view style="width: 66px">名族</view> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
        </view>
        <view class="v-part">
            <div>
                <span>您的姓名</span>
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <span>您的姓名</span> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <span>您的姓名</span> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
        </view>
        <view class="v-part">
            <div>
                <span>您的姓名</span>
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <span>您的姓名</span> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
            <div>
                <span>您的姓名</span> 
                <el-input
                style="width: 180px"
                placeholder="Please Input"
                />
            </div>
        </view>
      </view>
    </view>
</template>
<script lang="ts">
import {
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
    } from '@element-plus/icons-vue'


export default {

}
</script>
<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 380px;
}

.info-tip {
    width: 1104px;
    font-size: 12px;
    color: rgb(248, 163, 115);
    margin-top: 15px;
    margin-bottom: 15px;
}
.info-list {
    width: 1104px;
    display: flex;
    flex-direction: row;
    .v-part {
        flex: 1;
        display:flex;
        flex-direction: column;
    }
    .name {
        display: flex;
        flex-direction: row;  
        background-color: yellow;
        .input-name {
            background-color: green; 
        }
    }
}
.info-title {
    width: 66px;
    height: 33px;
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;

}

</style>