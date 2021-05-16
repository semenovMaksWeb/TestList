export const state = () => ({
  getAsideCart: false,
  getOrderTrue: false,
  getOrderError: false,
})
export const mutations = {
  setAsideCart(store, data) {
    store.getAsideCart = data
  },
  setOrderTrue(store, data) {
    store.getOrderTrue = data
  },
  setOrderError(store, data) {
    store.getOrderError = data
  },
}

export const getters = {
  getAsideCart: (s) => s.getAsideCart,
  getOrderTrue: (s) => s.getOrderTrue,
  getOrderError: (s) => s.getOrderError,
}
