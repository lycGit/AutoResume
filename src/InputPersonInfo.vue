<template>
    <view class="container">
        <view class="info-row">
            <el-icon :size="16" color="rgb(248, 163, 115)"><Warning /></el-icon>
            <text class="info-tip">填写后会自动排版在简历上，不需要的信息可以选择不填或删除内容。</text>
        </view>

      <view class ="info-list" >
        <view class="v-part">
            <view class="input-row">
                <span class="input-title">您的姓名</span>
                <el-input class="input-content"
                v-model="formInline.name"
                style="width: 180px"
                placeholder="请输入姓名"
                />
            </view>
            <view class="input-row">
                <span class="input-title">工作年限</span> 
                <el-select v-model="formInline.workyear" class="m-2" style="width: 180px" placeholder="请选择工作年限">
                    <el-option
                    v-for="item in workyears"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                   />
                 </el-select>
            </view>
            <view class="input-row">
                <span class="input-title">身高/体重</span> 
                <el-input
                 v-model="formInline.workyear"
                 style="width: 60px"
                 placeholder="身高"
                />
                <span class="input-unit">cm</span> 
                <el-input
                 v-model="formInline.workyear"
                 style="width: 60px"
                 placeholder="体重"
                />
                <span class="input-unit">kg</span> 
            </view>
        </view>
        <view class="v-part">
            <view class="input-row">
                <span class="input-title">性别</span> 
                <el-select v-model="formInline.sex" class="m-2" style="width: 180px">
                    <el-option
                    v-for="item in sexs"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                   />
                 </el-select>
            </view>

            <view class="input-row">
                <span class="input-title">联系电话</span>
                <el-input class="input-content"
                v-model="formInline.phone"
                style="width: 180px"
                placeholder="输入联系电话"
                />
            </view>
            <view class="input-row">
                <span class="input-title">民族</span>
                <el-input class="input-content"
                v-model="formInline.nation"
                style="width: 180px"
                placeholder="请输入民族"
                />
            </view>
        </view>
        <view class="v-part">
            <view class="input-row">
                <span class="input-title">出生年月</span>
                <el-date-picker
                    v-model="formInline.birthday"
                    type="date"
                    placeholder="Pick a day"
                    style="width: 180px"
                />
            </view>
            <view class="input-row">
                <span class="input-title">联系邮箱</span>
                <el-input class="input-content"
                v-model="formInline.email"
                style="width: 180px"
                placeholder="输入联系邮箱"
                />
            </view>
            <view class="input-row">
                <span class="input-title">籍贯</span>
                <el-input class="input-content"
                v-model="formInline.nationPlace"
                style="width: 180px"
                placeholder="请输入籍贯"
                />
            </view>
        </view>
        <view class="v-part">
            <view class="input-row">
                <span class="input-title">照片设置</span> 
                <view class="photo-btn">上传照片</view>
            </view>
            <view class="input-row">
                <span class="input-title">婚姻状况</span> 
                <el-select v-model="formInline.marriage" class="m-2" style="width: 180px">
                    <el-option
                    v-for="item in marriages"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                   />
                 </el-select>
            </view>
            <view class="input-row">
                <span class="input-title">政治面貌</span> 
                <el-select v-model="formInline.politics" class="m-2" style="width: 180px">
                    <el-option
                    v-for="item in politicses"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                   />
                 </el-select>
            </view>
        </view>
      </view>
    </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { View, Warning } from '@element-plus/icons-vue'

const formInline = reactive({
  name: '',
  workyear: '',
  height: '',
  weight:'',
  sex: '男',
  phone: '',
  nation: '',
  birthday: '',
  email: '',
  nationPlace: '',
  photo: '',
  marriage: '0',
  politics: '0',
})

 
const marriages = [
  {
    value: '0',
    label: '不填',
  },
  {
    value: '1',
    label: '已婚',
  },
  {
    value: '2',
    label: '未婚',
  },
  {
    value: '3',
    label: '离异',
  },
  {
    value: '4',
    label: '已婚已育',
  },
]

const politicses = [
  {
    value: '0',
    label: '不填',
  },
  {
    value: '1',
    label: '中共党员',
  },
  {
    value: '2',
    label: '中共预备党员',
  },
  {
    value: '3',
    label: '共青团员',
  },
  {
    value: '4',
    label: '普通公民',
  },
  {
    value: '5',
    label: '群众',
  },
]

const workyears = [
  {
    value: '0',
    label: '不填',
  },
  {
    value: '1',
    label: '应届生',
  },
  {
    value: '2',
    label: '半年经验',
  },
  {
    value: '3',
    label: '1年经验',
  },
  {
    value: '4',
    label: '2年经验',
  },
  {
    value: '5',
    label: '3年经验',
  },
  {
    value: '6',
    label: '4年经验',
  },
  {
    value: '7',
    label: '4年经验',
  },
  {
    value: '8',
    label: '5年经验',
  },
  {
    value: '9',
    label: '6年经验',
  },
  {
    value: '10',
    label: '7年经验',
  },
  {
    value: '11',
    label: '8年经验',
  },
  {
    value: '12',
    label: '9年经验',
  },
  {
    value: '13',
    label: '10年经验',
  },
  {
    value: '14',
    label: '11年经验',
  },
  {
    value: '15',
    label: '12年经验',
  },
  {
    value: '16',
    label: '13年经验',
  },
  {
    value: '17',
    label: '14年经验',
  },
  {
    value: '18',
    label: '15年经验',
  },
  {
    value: '19',
    label: '15年以上经验',
  },
  {
    value: '20',
    label: '20年以上经验',
  },
  {
    value: '30',
    label: '30年以上经验',
  },

]

const sexs = [
  {
    value: '0',
    label: '男',
  },
  {
    value: '1',
    label: '女',
  },
]
const onSubmit = () => {
  console.log('submit!', formInline.name)
}
</script>

<style lang="less" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 380px;
}

.info-row {
    display: flex;
    flex-direction: row;
    padding-top: 15px;
    padding-bottom: 15px;
}

.info-tip {
    width: 1104px;
    font-size: 12px;
    margin-left: 6px;
    color: rgb(248, 163, 115);

}
.info-list {
    width: 1104px;
    display: flex;
    flex-direction: row;
    .v-part {
        flex: 1;
        display:flex;
        flex-direction: column;
        .input-row {
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
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

            .input-content {
                width: 180px;
                height: 32px;
            }
            .input-unit {
                margin-left: 3px;
                margin-right: 20px;
            }
            .photo-btn {
                width: 98px;
                height: 30px;
                border-radius: 15px;
                background-color: rgb(19, 216, 167);
                color: white;
                font-size: 12px;
                text-align: center;
                line-height: 30px;

            }
        }


    }
}

//背景色设置为透明
:deep(.el-input__wrapper){
    color: rgb(34, 34, 34);
    background-color: rgb(243, 244, 246)
}

:deep(.el-select__wrapper){
    color: rgb(34, 34, 34);
    background-color: rgb(243, 244, 246)
}

</style>