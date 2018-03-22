/**
 * Created by benson on 2017/6/21.
 */
import LoadingComponent from '@/components/loading/Loading.vue'

const loading = {
    install: function(Vue) {
        Vue.component('loading', LoadingComponent)
    }
};

export default loading
