<template>
    <view class="container">
        <el-input v-model="model.detail" class="detail" :autosize="{ minRows: 6, maxRows: 6 }" type = "textarea" @change="update"/>
        <view class="select-area">
            <view class="select-items">
                <view class="item" v-for="(item, index) in model.items"  @click="clickAction(index)" :style="{backgroundColor: item.isSelect ? '#13dba7' : '#ffffff', color: item.isSelect ? '#ffffff' : '#333', borderColor: item.isSelect ? '#13dba7' : '#333'}"> {{ item.name }}</view>
            </view>
            <view class="input-row">
                <el-input class="input-content"
                v-model="skillName"
                style="width: 180px"
                :placeholder="btnHint"
                clearable
                @change="update"
                />
                <view class="add-btn" @click="addItem"><el-icon :size="14" color="'#13dba7'" style="margin-right: 5px;"><Plus/></el-icon> {{ btnTitle }}</view>
            </view>
            <view class="display-area">
                <view class="display-item" v-for=" (item, index) in displayItems">
                    <span class="select-title" >{{ item.name }}</span> 
                    <span class="ver-space"></span>
                    <view class="select-level">
                      <el-select v-model="item.level"  class="m-2" style="width: 120px" placeholder="请选择">
                          <el-option
                          v-for="item in levels"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          @change="update"
                      />
                      </el-select>
                      <span class="hor-space"></span>
                      <el-icon class="level-delete" :size="18" color="rgb(255, 0, 0)" @click="deleteItem(index)"><Remove /></el-icon>
                    </view>
                </view>
              </view>   
            </view>
        </view>

</template>
<script lang="ts">
import {SkillModel,SkillItemModel} from './SkillModel'
import { Plus } from '@element-plus/icons-vue'
export default {
  name: 'SkillInfo',
  components: {
    Plus
  },
  props: {
    model: {
      type: SkillModel,
      default: {}
    },
    level: {
        type: String,
        default: '0'
    },
    btnTitle: {
      type: String,
      default: '添加自定义技能特长'
    },
    btnHint: {
      type: String,
      default: '请输入自定义名称'
    },

  },
  

  data() {
    return {
        selectIndex: -1,
        levels: [
        {
          value: '0',
          label: '一般',
        },
        {
          value: '1',
          label: '良好',
        },
        {
          value: '2',
          label: '熟练',
        },
        {
          value: '3',
          label: '擅长',
        },
        {
          value: '4',
          label: '精通',
        },
         ],
         displayItems: [],
         skillName: ''


    }
  },

  emits: ['update: model'],
  methods: {
    update() {
      this.$emit('update: model', this.model)

    },
    clickAction(index) {
      let item = this.model.items[index]
      item.isSelect = !item.isSelect
      if (item.isSelect) {
        this.displayItems.push(item)
      } else {
        let deleteIndex = this.displayItems.indexOf(item)
        this.displayItems.splice(deleteIndex, 1)
      }
    },

    addItem() {
        let item = new SkillItemModel()
        item.name = this.skillName
        this.displayItems.push(item)
    },

    deleteItem(index: number) {
      this.displayItems.splice(index, 1)
    }

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
.input-row {
    display: flex;
    justify-content: start;
    margin-top: 20px;

    .add-btn {
      background-color: #ebfffa;
      border-color: #13dba7;
      border-width: 1px;
      border-style: solid;
      width: 157px;
      height: 32px;
      color: #13dba7;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
    }
}
.display-area {
    width: 1104px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .display-item {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        margin-bottom: 20px;
        .select-title {
            color: #333;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 200rpx;
        }
        .ver-space {
          height: 10px;
        }
        .select-level {
          display: flex;
          flex-direction: row;
          align-items: center;
          .hor-space {
            width: 15px;
          }
          .level-delete {
            padding-left: 30rpx;
          }
        }
    }
}
</style>