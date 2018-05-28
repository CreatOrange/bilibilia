import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios'
vue.use(vuex);

var store = new vuex.Store({
	state : {
		audiolist : []
	},
	actions : {
		action_count(context,payload){
			var arr = []
			axios.get('/x/web-interface/ranking/region?rid='+payload+'&day=7&jsonp=jsonp').then((res)=>{
				
				for(var i = 0; i<4;i++){
					arr.push(res.data.data[i])
					// arr[i] = 1
				}
				
			},(err)=>{});
			context.commit('CHANGE_AUDIOLIST',arr);
		}
	},
	mutations : {
		CHANGE_AUDIOLIST(state,payload){
			state.audiolist = payload;
		}
	}
});

export default store;