<template>
  <div class="cm_main2" v-hello>
    <div class="cm_pc_12">
      <ani-header :title="title" v-if="platform === 'h5'"></ani-header>
      <div
        class="cm_pc_12"
        :class="{ cm_mtb4: platform === 'h5', cm_mb1: platform !== 'h5' }"
      >
        <ul class="cm_pc_12">
          <li class="cm_pc_12 cm_prl05">
            <ul class="cm_pc_12 cm_pd05 cm_be">
              <li
                class="cm_pc_12 cm_pd05 cm_lh2 cm_bf cm_bb1ce"
                v-for="(item1, index1) in indexData.gitList"
                :key="index1"
              >
                <div class="cmtou" @click="goToWindow(item1.url,item1.params)">
                  <span class="cm_c1c cm_fwb">{{ item1.name }}</span
                  >:<span class="cm_fs08">{{ item1.description }}</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({})
export default class indexPage extends Vue {
  title = "小程序模版";
  indexData = {
    logo: require('@/static/aiplat/icon.png'),
    description: this.$config.project.description,
    gitName: "接口测试",
    gitUrl: "github.com/aiplat",
    gitList: [
      {
        name: "get请求",
        description: "获取镇",
        url: "getTownStreetList",
        params:{
          a:1
        }
      },
      {
        name: "post请求",
        description: "提交表单",
        url: "postTownStreetList",
        params:{
          b:2
        }
      },
      {
        name: "del请求",
        description: "删除镇",
        url: "del",
         params:{c:2}
      },
      {
        name: "get请求(带参数)",
        description: "拼接到url和body里面",
        url: "getTownStreetList",
      },
      {
        name: "post请求(带参数)",
        description: "拼接到url和body里面",
        url: "hgetTownStreetList",
      }
    ],
  };
  platform = this.$config.platform;
  computed = {};
  goToWindow(url: any, params:any) {
       this.$api[url](params,params.c).then((res:any) => {
      console.log('home111', res)
    })
  }
  onShareAppMessage() {
    const url: string = `/pages/${this.$config.project.type}/index`;
    return this.$cmapp.setShareMessage(this, {
      sharePage: url,
      shareIndex: url,
      shareTitle: `${this.$config.site}欢迎您`,
      shareUrl: "",
    });
  }
  onLoad() {
    console.log(this.$cmapp.environmentInfo);
  }
  onShow() {
    this.$cmapp.setNavigationBarColor();
    console.log(this);
  }
}
</script>
<style lang="less" scoped>
</style>
