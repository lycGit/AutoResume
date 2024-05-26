<template>
    <view class="container">
       <view class="v-part">
            <view class="input-row">
                <span class="input-title">学校名称</span>
                <el-input class="input-content"
                v-model="model.school"
                style="width: 180px"
                placeholder="请输入学校名称"
                @change="update"
                />
            </view>
            <view class="input-row">
                <span class="input-title">所学专业</span>
                <el-input class="input-content"
                v-model="model.major"
                style="width: 180px"
                placeholder="请输入所学专业"
                @change="update"
                />
            </view>
            <view class="input-row">
                <span class="input-title">就读时间</span>
                <el-date-picker class="date-picker"
                    v-model="model.startDate"
                    type="date"
                    placeholder="请选择"
                    style="width: 120px"
                    @change="update"
                />
                <span class="middle-line" style="margin: 0 3px;">-</span>
                <el-date-picker class="date-picker"
                    v-model="model.endDate"
                    type="date"
                    placeholder="请选择"
                    style="width: 120px"
                    @change="update"
                />
            </view>
            <view class="input-row">
                <span class="input-title" >学历</span> 
                <el-select v-model="model.education" class="m-2" style="width: 120px" placeholder="请选择学历">
                    <el-option
                    v-for="item in this.educations"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    @change="update"
                   />
                 </el-select>
            </view>

       </view>
       <el-input v-model="model.detail" class="detail" :autosize="{ minRows: 6, maxRows: 6 }" type = "textarea" @change="update"/>
    <view class="edit-bar">
      <view class="edit-btn up-btn" >上移</view>
      <view class="edit-btn down-btn">下移</view>
      <view class="edit-btn delete-btn">删除</view>
      <view class="edit-btn ai-btn">AI撰写/优化</view>
    </view>
   </view>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import { SetUp, View} from '@element-plus/icons-vue'
import {EducationModel} from './EducationModel'

export default {
  name: 'EducationInfo',
  props: {
    model: {
      type: EducationModel,
      default: {}
    }

  },
  emits: ['update: model'],
  methods: {
    update() {
      console.log("EducationModel--detail1", this.model.detail)
      this.$emit('update: model', this.model)
    }
  },

  data() {
    return {
      educations : [
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
.v-part {
        width: 1104px;
        height: 47px;
        // flex: 1;
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
            // .date-picker {
            //   width: 100px;
            //   height: 32px;
            //   background-color: greenyellow;
            // }
        }
    }
.detail {
  width: 1104px;
  height: 165px;
  padding: 0px 15px;
}
.edit-bar {
  width: 1104px;
  height: 30px;

   display: flex;
   flex-direction: row;
   flex: 1;
   .edit-btn {
    width: 98px;
    height: 28px;
    border-style: solid;
    border-radius: 14px;
    border-width: 1px;
    text-align: center;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
   }
   .up-btn {
     color: #13dba7;
     border-color: #13dba7;
   }
   .up-btn:hover {
     background-color: #13dba7;
     color: white;
   }
   .down-btn {
    color: #13dba7;
    border-color: #13dba7;
   }
   .down-btn:hover {
     background-color: #13dba7;
     color: white;
   }
   .delete-btn {
    color: #ff755d;
    border-color: #ff755d;
   }
   .delete-btn:hover {
     background-color: #ff755d;
     color: white;
   }
   .ai-btn {
    color: white;
    background-color: #13dba7;
   }
}
</style>