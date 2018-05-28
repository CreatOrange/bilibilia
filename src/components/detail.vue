<template>
	<div id="hot">
	  <div class="hot_nav">
	    <div>热门推荐</div>
	    <div><i class="iconfont icon-ranking"></i>排行榜<i class="iconfont icon-you"></i></div>
	  </div>
	  <div class="hot_detail">
	    <div v-for="item in audiolist">
	      <div>
	        <img :src="item.pic" alt="">
	      </div>
	      <div>
	        <i class="iconfont icon-bofangqi-danmudibukai"></i>
	        <span>{{Math.floor(item.play/1000)/10+'万'}}</span>
	        <i class="iconfont icon-bofangqi-danmugundongkai"></i>
	        <span>{{item.video_review}}</span>
	      </div>
	      <div>{{item.title}}</div>
	    </div>
	  </div>
	</div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'bili-detail',
  data () {
    return {
    }
  },
  props : [
	'index'
  ],
  mounted(){
  	this.$store.dispatch('action_count',this.index);

  },
  computed : {
  	...mapState(['audiolist'])

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
