
<template>
	<div id="header">
		<div id="logo">
			<div><img src="@/assets/imgs/logo.png" alt=""></div>
			<div><i class="iconfont icon-sousuo"></i></div>
			<div><div></div></div>
			<div><div>下载App</div></div>
		</div>
		<div id="header_nav">
			<ul>
				<li class="cur">首页<span></span></li>
				<li>动画<span></span></li>
				<li>国创<span></span></li>
				<li>音乐<span></span></li>
				<li>首页<span></span></li>
			</ul>
			<div><i class="iconfont icon-xiala"></i></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'bili-header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#header{ background: white}
#header #logo{ display: flex; padding: 10px;height: 30px;justify-content: space-between;}
#header #logo>div:nth-child(1){ width: 50% }
#header #logo>div:nth-child(1) img{height: 30px}
#header #logo>div:nth-child(2) .iconfont{line-height: 30px;font-size: 24px;}
#header #logo>div:nth-child(3){line-height: 30px;margin: 0 10px}
#header #logo>div:nth-child(3)>div{height: 20px; border-radius: 50%;width: 20px;background: #e5e9ef;margin-top: 5px}
#header #logo>div:nth-child(4){line-height: 30px;padding:0 10px;background: #fb7299;border-radius: 3px;color: white}
#header #header_nav{ display: flex;justify-content: space-around; }
#header #header_nav ul{ width: 85%;display: flex; line-height: 30px;justify-content: space-around;}
#header #header_nav ul li{ width: 15%;text-align: center;position: relative;}
#header #header_nav ul li span{ position: absolute;width: 70%;left: 0;right: 0;bottom: 0;margin: auto;height: 2px}
#header #header_nav ul li.cur{color: #fb7299}
#header #header_nav ul li.cur span{background: #fb7299}

</style>
