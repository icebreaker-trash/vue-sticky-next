import type { DirectiveBinding, VNode, ComponentPublicInstance } from 'vue'

export function getVm(binding: DirectiveBinding, vnode: VNode, isVue3: boolean) {
  if (isVue3) {
    return binding.instance
  }
  // @ts-ignore
  return vnode.context as ComponentPublicInstance
}
