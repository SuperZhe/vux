<template>
  <div class="loadMore">
    <x-scroller
      lock-x
      scrollbarY
      height="-147px"
      use-pullup
      :pullup-config="pullupDefaultConfig"
      @on-pullup-loading="loadMore"
      ref="scrollerBottom"
      v-model="scrollerStatus"
    >
      <div>
        <ul class="peopleList">
          <li
            class="peopleDetail"
            v-for="(item,index) in tb"
            :key="index"
          >
            <div @click="idcardPhotos(item.user_mobile,item.number)">
              <p><span>人员姓名：</span><span>{{item.username}}</span></p>
              <p><span>联系电话：</span><span>{{item.user_mobile}}</span></p>
              <p><span>工单编号：</span><span>{{item.number}}</span></p>
              <p><span>预约时间：</span><span>{{item.appointment_date | timeFormat}}</span></p>
              <i></i>
            </div>
          </li>
        </ul>
      </div>
    </x-scroller>
  </div>
</template>

<script>
import { Scroller } from "vux";
import { config } from "../../assets/upConfig.js";
export default {
  name: "loadMore",
  components: { "x-scroller": Scroller },
  props: ["seachData"],
  data() {
    return {
      pullupDefaultConfig: config,
      page: 0,
      tb: [],
      scrollerStatus: {
        pullupStatus: "default"
      }
    };
  },
  watch: {
    seachData(val) {
      this.page = 0;
      this.tb = [];
      this.loadMore();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset();
    });
    this.loadMore();
  },
  methods: {
    /**
     * 上拉加载更多
     */
    _getData(cb) {
      this.api.service
        .orderManage_getListByPage({
          page: this.page,
          prePage: 10,
          username: this.seachData
        })
        .then(result => {
          if (result.code == 0) {
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset();
            });
            console.log(result.data);
            cb(result.data);
          }
        })
        .catch(err => {
          throw err;
        });
    },
    loadMore() {
      this.page++;
      this._getData(res => {
        this.tb = this.tb.concat(res);
        if (res.length < 10) {
          this.scrollerStatus.pullupStatus = "disabled"; // 禁用
          this.pullupDefaultConfig.loadingContent = `<divider>到底了</divider>`;
          return;
        }
        this.scrollerStatus.pullupStatus = "default"; // 重置
      });
    }
  }
};
</script>

<style scoped lang="less">
.loadMore{
  .peopleDetail {
    background: #fff;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding: 20px 12px;
    font-size: 16Px;
    letter-spacing: 0;
    line-height: 16px;
    position: relative;
    p {
      color: #1e1e1e;
      margin-bottom:10px;
    }
    p:last-child {
      margin: 0;
    }
    i {
      position: absolute;
      right: 10px;
      top: 50%;
      margin-top: -10px;
      width: 20px;
      height: 20px;
      background: url(../../../static/imgs/arrow_right_icon@3x.png) no-repeat
        center/cover;
    }
  }
}
</style>