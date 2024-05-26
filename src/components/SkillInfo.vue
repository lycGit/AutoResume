<template>
    <view class="container">
        <el-input v-model="model.detail" class="detail" :autosize="{ minRows: 6, maxRows: 6 }" type = "textarea" @change="update"/>
        <view class="select-area">
            <view class="select-items">
                <view class="item" v-for="(item, index) in model.items"  @click="clickAction(index)" :style="{backgroundColor: this.selectIndex === index ? '#13dba7' : '#ffffff', color: this.selectIndex === index ? '#ffffff' : '#333', borderColor: this.selectIndex === index ? '#13dba7' : '#333'}"> {{ item }}</view>
            </view>
            <view class="input-row"></view>
            <view class="display-area"></view>
        </view>

    </view>

</template>
<script lang="ts">
import {SkillModel} from './SkillModel'
export default {
  name: 'SkillInfo',
  props: {
    model: {
      type: SkillModel,
      default: {}
    },
  },
  data() {
    return {
        isActive: false,
        selectIndex: -1

    }
  },
  emits: ['update: model'],
  methods: {
    update() {
      console.log("SkillModel--detail", this.model.detail)
      this.$emit('update: model', this.model)
    },
    clickAction(index) {
      this.isActive = true;
      if (this.selectIndex === index) {
        this.selectIndex = -1;
      } else {
        this.selectIndex = index;
      }
    },

  }
}

</script>
<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.detail {
  width: 1104px;
  height: 165px;
  padding: 0px 15px;
}
.select-area {
    display: flex;
    width: 1104px;
    flex-direction: column;
    .select-items {
        display: flex;
        justify-content: start;
        .item {
            height: 28px;
            border-style: solid;
            border-radius: 14px;
            border-color: #333;
            border-width: 1px;
            text-align: center;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            padding: 0 10px;
        }
        .item:hover {
            border-color: #13dba7;
            color: #13dba7;
        }
    }
}
</style>