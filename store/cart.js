export const state = () => ({
  cart: [],
})
export const mutations = {
  setCart(store, data) {
    store.cart = data
  },
  unshiftCart(store, data) {
    store.cart.unshift(data)
  },
  deleteCart(store, index) {
    store.cart.splice(index, 1)
  },
  resetCart(store) {
    store.cart = []
  },
}

export const getters = {
  getProduct: (s) => s.cart,
}
