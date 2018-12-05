<template>
  <div class="interviewList">
    <x-header
      title='面试管理'
      :left-options="{showBack:true}"
    >
      <div
        slot="right"
        @click="getFilter"
      >
        <span>筛选</span>
      </div>
    </x-header>
    <!-- 搜索框 -->
    <search
      v-model="search"
      top="1.15625rem"
      placeholder="请输入关键字"
    ></search>
    <!-- 列表 -->
    <load-more :seachData="search"></load-more>
    <!-- 新建面试 -->
    <x-button
      type="primary"
      class="interviewListBtn"
    >新建面试人员</x-button>
  </div>
</template>

<script>
import headerNav from "../../components/header";
import loadMore from "../../components/interview/interviewMore";
export default {
  name: "interviewList",
  components: { headerNav, loadMore },
  data() {
    return {
      tb: {
        data: [],
        page: 1,
        perPage: 10
      },
      search: ""
    };
  },
  methods: {
    getFilter() {
      // 进入时间选择页
      this.$router.push("/timeFilter");
    }
  }
};
</script>

<style scoped lang="less">
 .interviewList {
  /deep/ .vux-header-title{
    font-size: 16Px;
  }
  /deep/  .weui-search-bar__cancel-btn {
      line-height: 36px !important;
    }
  /deep/ .weui-search-bar__form {
   
    .weui-search-bar__box {
      height: 36px;
      .weui-icon-search {
        top: 5px;
      }
    }
    .weui-search-bar__input {
      height: 28px;
      font-size: 16Px;
    }
    .weui-search-bar__label {
      height: 36px;
      padding: 7px 0;
      line-height: 22px;
      box-sizing: border-box;
    }
    .weui-icon-clear{
      line-height: 36px;
    }
  }
  .interviewListBtn{
    position: fixed;
    bottom: 0

  }
}
</style>