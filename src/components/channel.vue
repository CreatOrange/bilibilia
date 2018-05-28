<template>
  <div id="main">
    <div id="main_nav">
      <ul>
        <li @click='handellink(1)'>推荐</li>
        <li @click='handellink(24)'>MAD·AMV</li>
        <li @click='handellink(24)'>MMD·3D</li>
        <li @click='handellink(24)'>短片·手书·配音</li>
        <li @click='handellink(24)'>综合</li>
      </ul>
    </div>
    <bili-detail :index="rid"></bili-detail>
  </div>

</template>

<script>
import Detail from '@/components/detail'
export default {
  name: 'bili-channel',
  data () {
    return {
      rid : this.$route.params.id
    }
  },
  components : {
    [Detail.name] : Detail
  },
  mounted(){
    console.log(this.$route.params.id)

    this.rid = this.$route.params.id;
    console.log(this.rid)
  },
  methods : {
    handellink(id){
      this.$router.push('/channel/' + id);
      this.rid = this.$route.params.id;
      this.$store.dispatch('action_count',this.rid);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#main #main_nav{width: 100%;overflow: scroll;box-sizing: border-box;background: #f9f9f9}
#main #main_nav ul{ width: 200%}
#main #main_nav ul li{ float: left;padding: 0 15px; text-align: center;line-height: 50px;}

#hot .hot_nav{ display: flex;justify-content: space-between;padding: 0 15px ;line-height: 40px}
#hot .hot_nav div:nth-child(2){ color: #fead35}

#hot .hot_detail{ display: flex; flex-wrap: wrap; justify-content: space-around;}
#hot .hot_detail>div{ position: relative;width: 45%;box-sizing: border-box;overflow: hidden;}
#hot .hot_detail>div img{width: 100%;background-image: linear-gradient(to bottom , rgba(0,0,0,.5) 0%, black 100%)}
#hot .hot_detail>div>div:nth-child(1){border-radius: 5px;overflow: hidden;}
#hot .hot_detail>div>div:nth-child(2){background-image: linear-gradient(to bottom , rgba(0,0,0,0) 30%, rgba(100,100,100,1) 100%);display: flex;justify-content: space-around; width: 100%;position: absolute;bottom: 40px;text-align: center;color: white;border-radius: 5px}
#hot .hot_detail>div>div:nth-child(3){line-height: 20px;height: 40px}




</style>
