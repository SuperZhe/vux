<template>
  <div class="home">
    <div>
      <img
        src="./img/banner.png"
        alt=""
        class="banner"
      >
    </div>
    <div :class="{content:roleId != 1,contentTwo:roleId == 1}">
      <flexbox wrap="wrap">
        <!-- 培训师面试管登陆 -->
        <router-link
          to="/interviewList"
          v-if="'234'.includes(roleId)"
        >
          <flexbox-item>
            <img
              src="./img/home_interview_icon@3x.png"
              alt=""
            >
            <div>面试管理</div>
          </flexbox-item>
        </router-link>
        <router-link
          to="/login"
          v-if="'234'.includes(roleId)"
        >
          <flexbox-item>
            <img
              src="./img/home_classroom_icon@3x.png"
              alt=""
            >
            <div>班级管理</div>
          </flexbox-item>
        </router-link>
        <router-link
          to="/login"
          v-if="'234'.includes(roleId)"
        >
          <flexbox-item>
            <img
              src="./img/home_student_icon@3x.png"
              alt=""
            >
            <div>学员管理</div>
          </flexbox-item>
        </router-link>
        <router-link
          to="/login"
          v-if="'234'.includes(roleId)"
        >
          <flexbox-item>
            <img
              src="./img/home_dimission_icon@3x.png"
              alt=""
            >
            <div>已离职人员管理</div>
          </flexbox-item>
        </router-link>
        <!-- 管理员登陆 -->
        <router-link
          to="/login"
          v-if="roleId == 1"
          class="reporting"
        >
          <flexbox-item>
            <img
              src="./img/home_2_icon@3x.png"
              alt=""
            >
            <div>报表系统</div>
          </flexbox-item>
        </router-link>
        <!-- 门店登陆 -->
        <router-link
          to="/login"
          v-if="roleId == 6"
          class="reporting"
        >
          <flexbox-item>
            <img
              src="./img/home_2_icon@3x.png"
              alt=""
            >
            <div>报表系统</div>
          </flexbox-item>
        </router-link>
      </flexbox>
      <footer>
        上海擎微企业管理咨询有限公司
      </footer>
    </div>

  </div>
</template>

<script>
export default {
  name: "name",
  data() {
    return {
      roleId: Number
    };
  },
  created() {
    this.roleId = this.$route.query.roleId;
  }
};
</script>

<style scoped lang="less">
.home {
  .banner {
    width: 100%;
  }
  .content {
    padding: 0 5px;
    box-sizing: border-box;
    margin-top: -45px;
  }
  a {
    display: flex;
    text-align: center;
    width: 100%;
    background-color: #fff;
    width: 172px;
    height: 185px;
    border-radius: 5px;
    align-items: center;
    margin: 5px;
    /deep/ .vux-flexbox-item {
      width: 100%;
      div {
        font-size: 16px;
        color: #000;
      }
    }
    img {
      width: 68px;
      height: 68px;
      margin: 0 auto;
    }
  }
  footer {
    text-align: center;
    font-size: 14px;
    color: #b4b4b4;
    letter-spacing: 0;
    line-height: 14px;
    margin: 0.14rem 0;
  }
  // 报表单独样式
  .contentTwo {
    text-align: center;
    /deep/ .vux-flexbox {
      justify-content: center;
      margin: 55px 0 50px 0;
    }
  }
}
</style>