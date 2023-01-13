import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex);

// 모든 영역에 특정 기능 추가
export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});
