import { InjectionKey } from 'vue'
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import modules from './modules'
import { IStore } from './types'

export const key: InjectionKey<Store<IStore>> = Symbol()

export const store = createStore<IStore>({
    modules
})

export function useStore() {
    return useVuexStore(key)
}
