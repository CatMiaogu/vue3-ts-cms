import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      authorName: 'zhaotao'
    }
  }
})

export default store
