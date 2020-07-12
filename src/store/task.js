
export const state = () => ({
  showTaskModal: false
})
export const getters = {
  getShowTaskModal: state => {
    return state.showTaskModal
  }
}
export const mutations = {
    showTaskModal(state, flag) {
        state.showTaskModal = flag
    }
}