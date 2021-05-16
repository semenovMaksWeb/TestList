export const state = () => ({
  validate: false,
  order: {
    tlf: {
      value: '',
    },
    name: {
      value: '',
    },
    adress: {
      value: '',
    },
  },
})
export const mutations = {
  setOrder(store, data) {
    store.order[data.name].value = data.value
  },
  resetOrder(store) {
    for (const storeElement in store.order) {
      store.order[storeElement].value = ''
    }
  },
  validate(store) {
    store.validate = false
    for (const storeElement in store.order) {
      if (store.order[storeElement].value.trim() === '') {
        store.validate = true
        break
      }
    }
    if (store.validate) {
      return false
    }
    if (store.order.tlf.value.length !== 16) {
      store.validate = true
    }
  },
}

export const getters = {
  getOrder: (s) => s.order,
  getOrderName: (s) => (name) => s.order[name],
  getValidate: (s) => s.validate,
}
