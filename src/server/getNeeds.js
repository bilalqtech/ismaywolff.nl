import { matchPath } from 'react-router-dom'

/**
 * Some components require data before rendering. Those components have a static method `needs`,
 * which returns an array of async actions. This function uses react-router's matching algorithm to
 * gather any needs the rendered route might have, hooks them up to the store and returns them.
 */

function getNeeds(routes, url, store) {
  const needs = []

  routes.some(route => {
    const match = matchPath(url, route)

    if (match && route.component && route.component.needs) {
      route.component.needs().map(need => needs.push(need(store.dispatch, store.getState)))
    }

    return match
  })

  return needs
}

export default getNeeds
