const getHooks = (isVue3: boolean) => {
  return isVue3
    ? {
        mounted: 'mounted',
        updated: 'updated',
        unmounted: 'unmounted'
      }
    : {
        mounted: 'inserted',
        updated: 'componentUpdated',
        unmounted: 'unbind'
      }
}

export { getHooks }
