// 按需引入

import { Button } from 'vant'
import { CompatVue } from 'vue'

const pluginsVant = [Button]

export default {
    install: function (vm: any) {
        pluginsVant.forEach((item) => {
            vm.component(item.name, item)
        })
    }
}
