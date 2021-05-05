import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  itemList: [],
}
//state 相当于属性 mutations相当于方法  getters相当于计算属性
export default createStore({
  state,
  mutations,
  actions,
  getters,
})
