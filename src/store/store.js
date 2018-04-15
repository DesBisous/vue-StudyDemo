/**
 * Created by benson on 2017/6/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex);

export default new Vuex.Store({//名字固定
    state,
    mutations,
    actions,
    getters
});

