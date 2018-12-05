<template>
  <div class="headerNav">
    <x-header
      :title='title'
      :left-options="{showBack:false}"
    >
    </x-header>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      isShow: false
    };
  },
  props: {
    title: String
  }
};
</script>

<style lang="less">
.headerNav {
  height:45px;
  /deep/ .vux-header-title {
    height: 100% !important;
    span {
      font-size: 16Px;
    }
    .icon-white{
      color:#fff;
    }
  }
}
</style>

