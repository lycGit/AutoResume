<template>
  <view class="container">
    <!-- <Resume></Resume> -->
    <Input class="input-top"></Input>
    <!-- <InputPersonInfo></InputPersonInfo> -->
    <!-- <InputJobInfo></InputJobInfo> -->
    <!-- <InputEducationInfo></InputEducationInfo> -->
    <!-- <InputProgramInfo></InputProgramInfo> -->
    <!-- <InputSkillInfo></InputSkillInfo> -->
    <InputHonorInfo></InputHonorInfo>
  </view>
</template>
<script lang="ts">
import Resume from "./Resume.vue"
import Input from "./Input.vue";
import InputBaseInfo from "./InputBaseInfo.vue";
import InputPersonInfo from "./InputPersonInfo.vue";
import InputJobInfo from "./InputJobInfo.vue";
import InputEducationInfo from "./InputEducationInfo.vue";
import InputProgramInfo from "./InputProgramInfo.vue";
import InputSkillInfo from "./InputSkillInfo.vue";
import InputHonorInfo from "./InputHonorInfo.vue";
import { Component } from "vue";
export default {
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
  }
}

</script>
<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .input-top {
    height: 32px;
  }
}
</style>


























<!-- 
<template>
  <div class="resume_container">
    <div class="resume_box" >
      <div id="basicInfo" class="basic_info_box">
      <dl class="basic_info">
        <dt class="myname">{{ title }}</dt>
        <dd class="yixiang_tip">
        <span class="basic_info_span">{{ offer }}</span>
        <span class="base_info_line"></span>
        <span class="basic_info_span">{{ base }}</span>
        <span class="base_info_line"></span>
        <span class="basic_info_span">{{ money }}</span>
        <span class="base_info_line"></span>
        <span class="basic_info_span">{{ during }}</span>
        </dd>
        <dd class="yixiang_tip">
          <span class="basic_info_span">{{ age }}</span>
          <span class="base_info_line"></span>
          <span class="basic_info_span">{{ sex }}</span>
          <span class="base_info_line"></span>

          <span class="basic_info_span">{{ home }}</span>
          <span class="base_info_line"></span>
          <span class="basic_info_span">{{ workage }}</span>
        </dd>
        <dd class="yixiang_tip">
          <span class="basic_info_span">{{ mobile }}</span>
          <span class="base_info_line"></span>
          <span class="basic_info_span">{{ email }}</span>
        </dd>
      </dl>
      <div class="photo_box">
        <img :src="photo">
      </div>
    </div>
    <div class="resume_content_all" >
       <div id="jiaoyu" class="resume_content">
          <div class="resume_content_main"   >
            <div class="module_tit" >
               <span class="module_title">教育背景</span>
               <span class="module_title_bottom_line"></span>
            </div>
            <div class="content_list" style="margin-top:13px;">
              <div class="list_top" >
                <div class="list_top_left">
                  <strong>
                    <span class="name">{{ school }}</span>
                    <span> <i class="list_top_space">—</i>{{ lesson }}</span>
                    <span><i class="list_top_space">—</i>{{ level }}</span>
                  </strong>
                </div>
                <div>
                  <span class="time">{{ startDate }} <i class="ffyh">~</i> {{ endDate }}</span>
                </div>          
              </div>
              <div class="ql-editor">
                <p><strong>专业成绩：</strong>{{ score }}</p>
                <p><strong>主修课程：</strong>{{ lessons }}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="work" class="resume_content" style="margin-top:25px;">
        <div class="resume_content_main"   >
        <div class="module_tit" >
            <span class="module_title">工作经验</span>
            <span class="module_title_bottom_line"></span>
        </div>
        <div class="content_list" style="margin-top:13px;"  v-for="company in companys">
        <div class="list_top" style="font-size:13px;">
          <div>
            <strong>
              <span>{{ company.name }}</span>
              <span><i class="list_top_space">-</i>{{ company.offer }}</span>
            </strong>
          </div>
          <div> 
            <span class="time">{{ company.startDate }} <i class="ffyh">~</i> {{ company.endDate }}</span>
          </div>
        </div>
        <div class="ql-editor">
          <ul class="ql-editor-ul">
             <li class="ql-editor-li" v-for="thing in company.things">  {{ thing }}</li>
          </ul>
        </div>
      </div>
    </div>
      </div>
        <div id="jineng" class="resume_content" style="margin-top:25px;"   >
        <div class="resume_content_main"   >
        <div class="module_tit" >
            <span class="module_title">技能特长</span>
            <span class="module_title_bottom_line"></span>
        </div>
        <div class="ql-editor" style="font-size:13px;margin-top:13px;line-height:22px;"   >
        <p><b>语言能力：</b>{{ language }}</p>
        <p><b>计算机：</b>{{ compute }}</p>
        <p><b>团队能力：</b>{{ leaderAbility }}</p>
        </div>
        </div>
      </div>


      <div id="zhengshu" class="resume_content" style="margin-top:25px;"   >
      <div class="resume_content_main"   >
        <div class="module_tit" >
            <span class="module_title">荣誉证书</span>
            <span class="module_title_bottom_line"></span>
        </div>
        <div class="ql-editor" style="font-size:13px;margin-top:13px;line-height:22px;"   >
        <ul class="ql-editor-ul">
          <li class="ql-editor-li" v-for="honor in honers"> {{ honor }}</li>
        </ul>
        </div>
      </div>
          </div>
          <div id="pingjia" class="resume_content" style="margin-top:25px;"   >
          <div class="resume_content_main"   >
            <div class="module_tit" >
              <span class="module_title">自我评价</span>
              <span class="module_title_bottom_line"></span>
           </div>
            <div class="ql-editor" style="font-size:13px;margin-top:13px;line-height:22px;"   >
            <p>{{ evaluate }}</p>
            </div></div>
            </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
       title: '全民简历',
       offer:'求职意向：行政专员',
       base: '上海',
       money: '8000/月',
       during: '一个月内到岗',
       age: '30岁',
       sex: '男',
       home: '上海',
       workage: '7年经验',
       mobile: '15488888888',
       email: 'qmjianli@qq.com',
       photo: 'https://www.qmjianli.com/images/edit/man.png',
       school: '全民简历师范大学',
       lesson: '工商管理',
       level: '本科',
       startDate: '2012-09',
       endDate:'2016-07',
       score: 'GPA 3.66/4 （专业前5%）',
       lessons: '基础会计学、货币银行学、际贸易实务、人力资源开发与管理学、西方经济学等等。',
       companys: [
        {
          name: '全民简历科技有限公司',
          offer: '行政专员',
          startDate: '2018-09',
          endDate: '至今',
          things:[
            '拥负责本部的行政人事管理和日常事务，协助总监搞好各部门之间的综合协调，落实公司规章制度，沟通内外联系，保证上情下达和下情上报，负责对会议文件决定的事项进行催办、查办和落实，负责全公司组织系统研讨和修订。',
            '编制公司人事管理制度，规避各项人事风险。'
          ]
        },
        {
          name: '上海斧掌网络科技有限公司',
          offer: '行政专员',
          startDate: '2016-09',
          endDate: '2018-08',
          things:[
            '负责中心简单财务管理，资产管控；',
            '负责公司总部的来访客户接待工作，负责引导和介绍公司的分布情况；',
            '负责中心的行政事务，公司班车管理、负责建立员工归属感及前台管理；',
            '负责招聘工作，确保人才梯队发展和人才储备及培养。',
            '督导公司各项行政、人事制度、员工福利、生日以及公司各种宴会活动的执行。',
            '负责招聘工作，制定公司的人力资源发展计划，确保人才梯队发展和人才储备及培养。'

          ]
        }
       ],
       language: '大学英语6级证书，荣获全国大学生英语竞赛一等奖，能够熟练的进行交流、读写。',
       compute: '计算机二级证书，熟练操作windows平台上的各类应用软件，如Word、Excel。',
       leaderAbility: '具有丰富的团队组建与扩充经验和项目管理与协调经验。',
       honers: [
         '英语四级，听说读写能力良好，能流利的用英语进行日常交流，能快速浏览英文文档和书籍；',
       ],
       evaluate: '工作积极认真，细心负责，熟练运用办公自动化软件，善于在工作中提出问题、发现问题、解决问题，有较强的分析能力；勤奋好学，踏实肯干，动手能力强，认真负责，有很强的社会责任感；坚毅不拔，吃苦耐劳，喜欢迎接新挑战。'
 

    }
  }
}
</script>
<style lang="less" scoped>
   .resume_container {
    background-color: rgb(118, 127, 149);
    display: flex;
    flex-direction: column;
    align-items: center;
    .resume_box {
      width: 820px;
      height: 1150px;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: white;
      .basic_info_box {
        display: flex;
        justify-content: start;
        padding: 27px 30px 12px 30px;
        height: 144px;
        .basic_info {
          width: 630px;
          .myname {
            display: flex;
            height: 37px;
            font-size: 23px;
            color: rgb(34, 34, 34);
            justify-content: center;
          }
          .yixiang_tip {
            display: flex;
            justify-content: center;
            font-size:13px;
            line-height:14px;
            height: 23px;
            .basic_info_span {
              color: rgb(51, 51, 51);
              font-size: 13px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .base_info_line {
              background-color: rgb(204, 204, 204);
              width: 1px;
              height: 14px;
            }
          }
        }
        .photo_box {
          width: 102px;
          margin-right: 50px;
        }

      }
      .resume_content_all {
        display: flex;
        flex-direction: column;
        margin: 0 30px 0;
        justify-content: start;
        .resume_content {
          .module_tit {
            display: flex;
            flex-direction: column;
            .module_title {
              font-size:16px;
              color: rgb(51, 51, 51);
              font-weight: bold;
            }
            .module_title_bottom_line {
              background-color: rgb(51, 51, 51);
              height: 1px;
              width: 760px;
              margin-top: 2px;
            }
          }
          .list_top {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              .list_top_left {
                font-size: 13px;
                font-weight: bold;
              }
              .list_top_space {
                margin-left: 8px;
                margin-right: 8px;
                color: rgb(136, 136, 136);
                width: 8px;
                height: 1px;
              }
            }
            .ql-editor {
              font-size:13px;
              margin-top:6px;
              line-height:22px;
              .ql-editor-ul {
                margin:0px;
                padding:0px;
                .ql-editor-li {
                  margin-left: 30px;
                }
              }
            }
  
        }
      }
    }
   }

</style>

 -->