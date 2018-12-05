<template>
  <div class="login">
    <header-nav title="登陆"></header-nav>
    <group>
      <x-input
        v-model="userinfo.username"
        placeholder="输入账号"
        label-width="10px"
        :is-type="codeValue"
        ref="user"
        required
      ><img
          slot="label"
          src="./img/login_account_icon@3x.png"
        >
      </x-input>
      <x-input
        v-model="userinfo.pwd"
        placeholder="输入密码"
        type="password"
        label-width="10px"
        required
      >
        <img
          slot="label"
          src="./img/login_password_icon@3x.png"
        ></x-input>
    </group>
    <x-button
      type="primary"
      text='登陆'
      class="loginBtn"
      :disabled="isDisabled"
      @click.native="submit"
    ></x-button>
  </div>
</template>

<script>
import headerNav from "../../components/header.vue";
export default {
  name: "login",
  components: {
    headerNav
  },
  data() {
    return {
      codeValue: function(val) {
        return {
          valid: val.length,
          msg: "请输入姓名"
        };
      },
      userinfo: {
        username: "",
        pwd: ""
      },
      isDisabled: true
    };
  },
  beforeCreate() {
    document.title = "嗅才招聘";
    // 初始状态要先判断有没有带参数
    let token = this.$route.query.token;
    let roleId = this.$route.query.role_id;
    let roleArr = [6];
    if (token && roleId) {
      roleArr.map(v => {
        if (v === Number(roleId)) {
          document.cookie = "token=" + token + "; ";
          this.$router.replace(`/home?roleId=${v}`);
        }
      });
    }
  },
  watch: {
    userinfo: {
      handler(value, oldValue) {
        value.username && value.pwd
          ? (this.isDisabled = false)
          : (this.isDisabled = true);
      },
      deep: true
    }
  },
  methods: {
    submit() {
      // 正则检验通过
      if (this.$refs.user.valid) {
        this._login();
      }
    },
    _login() {
      this.api.service
        .mobile_login({ ...this.userinfo })
        .then(res => {
          if (res.code == 0) {
            this.$router.push(`/home?roleId=${res.result.roleId}`);
          }
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  .loginBtn {
    width: 95%;
    margin-top: 30px;
    color: #fff;
    font-size: 16px;
  }
  /deep/ .weui-cell__hd {
    img {
      width: 26px;
      margin-right: 15px;
    }
  }
}
</style>
