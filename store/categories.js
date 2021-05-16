export const state = () => ({
  categories: [],
})
export const mutations = {
  setCategories(store, data) {
    store.categories = data
  },
}
export const actions = {
  async axiosCategories({ commit, dispatch }) {
    const res = await this.$axios.$get(`${process.env.api}/product-category`)
    const categories = await dispatch('mapCategories', res)
    commit('setCategories', categories)
  },
  // eslint-disable-next-line no-empty-pattern
  mapCategories({}, data) {
    const res = []
    data.map((elem) =>
      res.push({
        id: elem.id,
        name: elem.name,
      })
    )
    return res
  },
}
export const getters = {
  getCategories: (s) => s.categories,
}
