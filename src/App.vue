<template>
<div id="app">
  <bili-header></bili-header>
  <router-view></router-view>
</div>
</template>

<script>
import Header from '@/components/header'

export default {
  name : 'app',
  data () {
    return {
      
    }
  },
  components : {
    [Header.name] : Header
  }
}
</script>

<style>
*{ margin:0; padding:0; }
html,body{ height: 100%; font-size:14px; background: #ebebeb; }
li{ list-style:none; }
img{ display:block; }
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
body{display: flex; flex-direction: column;font-size: 14px}
#main{flex: 1;overflow:scroll;}

</style>
