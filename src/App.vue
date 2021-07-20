<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mpType: 'app',
  async onLaunch() {
    console.log('App Launch')
    // #ifdef MP-WEIXIN
    await this.$cmapp.update()
    // await this.$cmapp.notFound(this);
    // #endif
    this.$cmapp.setEnvironmentInfo(this)
  },
  async onShow() {
    // let t = this
    //     t.$uniAjax.http('/system/QlxcDwgl/getTownStreetList', {}, {
    //   method: 'GET',
    // }, (isSuc:number, res:any) => {
    //   console.log('res',isSuc,res)
    // }, 'no');
    // console.log('App Show',this.$api.town.weather({location:'杭州',key:'7028306c100b4aac98539d549c53cff7'}));
    //    t.$uniAjax.http('/s6/weather/now', {location:'杭州',key:'7028306c100b4aac98539d549c53cff7'}, {
    //   method: 'GET',
    // }, (isSuc:number, res:any) => {
    //   console.log('res',isSuc,res)
    // }, 'no');
  },
  async onHide() {
    console.log('App Hide')
  },
})
</script>

<style>
@import 'assets/css/cmreset.css';
@import 'assets/css/cmstyle.css';
@import 'assets/css/aiplat.css';
@import 'assets/css/tailwind.css';
</style>
