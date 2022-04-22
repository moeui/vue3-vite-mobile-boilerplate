import { ActionContext } from 'vuex'

import { IStore } from '../types'

export type IBaseState = {
    viewWidth: number
}

export default {
    namespaced: true,
    state: {
        viewWidth: NaN
    },
    mutations: {
        ['SET_VIEW_WIDTH'](state: IBaseState, payload: number) {
            state.viewWidth = payload
        }
    },
    actions: {
        setViewWidth({ commit }: ActionContext<IBaseState, IStore>, payload: number) {
            commit('SET_VIEW_WIDTH', payload)
        }
    },
    getters: {
        viewWidth: (state: IBaseState) => state.viewWidth
    }
}
