import { Selector, ClientFunction } from 'testcafe'

export const getLocation = ClientFunction(() => document.location.pathname)
export const setToken = ClientFunction(token => {
  window.localStorage.setItem('token', token)
  location.reload(true)
})

export const getToken = ClientFunction(() =>
  window.localStorage.getItem('token')
)

export const clearLocalStorage = ClientFunction(() =>
  window.localStorage.clear()
)

export const dataQaSelector = dataQa => Selector(`[data-qa="${dataQa}"]`)
export const dataQaExists = dataQa => dataQaSelector(dataQa).exists

export const randomString = () =>
  Math.random()
    .toString(36)
    .substr(2, 5)
