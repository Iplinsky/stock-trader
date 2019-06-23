import Vue from 'vue'

export default {
    loadData({ commit }) { // commit chama as mutations
        Vue.prototype.$http('data.json').then(resp => { // GET
            const data = resp.data
            if (data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}