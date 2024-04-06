import type { Directive, App, DirectiveBinding, VNode, Plugin } from 'vue'
import type { UserDefineOptions } from './options'
import { getHooks, getVm, isVue3 } from './utils'
import { Sticky } from './sticky'
// import { namespace } from './constants'
export interface VStickyInstallObject {
  install: (app: any, globalUserOptions?: Partial<UserDefineOptions>) => void
  installed: boolean
}

export interface DirectiveList {
  vSticky: Directive
}

const weakmap = new WeakMap()

export const createDirective = (globalUserOptions: Partial<UserDefineOptions> = {}, app: App | 'vue2' | 'vue3' = 'vue3'): DirectiveList => {
  let vue3: boolean

  if (app === 'vue2') vue3 = false
  else if (app === 'vue3') vue3 = true
  else vue3 = isVue3(app)

  const hooks = getHooks(vue3)

  const stickyDirective: Directive<HTMLElement, UserDefineOptions> = {
    [hooks.mounted](el: HTMLElement, binding: DirectiveBinding<UserDefineOptions>, vnode: VNode) {
      if (binding.value === undefined || binding.value) {
        const sticky = new Sticky(el, getVm(binding, vnode, vue3), binding.value)

        weakmap.set(el, sticky)
        sticky.doBind()
      }
    },
    [hooks.unmounted](el: HTMLElement) {
      const sticky = weakmap.get(el)
      if (sticky) {
        sticky.doUnbind()
        weakmap.delete(el)
      }
    },
    [hooks.updated](el: HTMLElement, binding: DirectiveBinding<UserDefineOptions>, vnode: VNode) {
      let sticky = weakmap.get(el)
      if (binding.value === undefined || binding.value) {
        if (!sticky) {
          sticky = new Sticky(el, getVm(binding, vnode, vue3), binding.value)
          weakmap.set(el, sticky)
        }
        sticky.doBind()
      } else if (sticky) {
        sticky.doUnbind()
        weakmap.delete(el)
      }
    }
  }

  return {
    vSticky: stickyDirective
  }
}

export const vStickyPlugin: VStickyInstallObject = {
  install(app: App, globalUserOptions = {}) {
    if (this.installed) return
    this.installed = true

    const { vSticky } = createDirective(globalUserOptions, app)

    app.directive('sticky', vSticky)
  },
  installed: false
}
