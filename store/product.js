export const state = () => ({
  product: [],
})
export const mutations = {
  setProduct(store, data) {
    store.product = data
  },
}
export const actions = {
  async axiosProduct({ commit, dispatch }, categories) {
    if (!categories) {
      categories = 1
    }
    const res = await this.$axios.$get(`${process.env.api}/product`, {
      params: {
        category: categories,
      },
    })
    const product = await dispatch('mapProduct', res)
    commit('setProduct', product)
  },
  // eslint-disable-next-line no-empty-pattern
  mapProduct({}, data) {
    const res = []
    data.map((elem) =>
      res.push({
        id: elem.id,
        name: elem.name,
        price: elem.price,
        rating: elem.rating,
        photo: `${process.env.static}${elem.photo}`,
      })
    )
    return res
  },
}
export const getters = {
  getProduct: (s) => s.product,
}
