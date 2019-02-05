import { dataQaSelector } from './utils'

export const fillNewBet = async (t, statement, quantity) => {
  await t.typeText(dataQaSelector('bet-input-statement'), statement)
  await t.typeText(dataQaSelector('bet-input-quantity'), quantity)
  await t.click(dataQaSelector('create-bet-button'))
}

export const fillAnonymousLogin = async (t, name) => {
  await t.typeText(dataQaSelector('anonymous-login-input'), name)
  await t.click(dataQaSelector('anonymous-login-confirm'))
}

export const acceptBet = async t => {
  await t.click(dataQaSelector('accept-bet-button'))
}
