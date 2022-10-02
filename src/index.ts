import { renderSearchFormBlock } from './search-form'
import { renderSearchStubBlock } from './search-results'
import { renderUserBlock } from './user'
import { renderToast } from './lib'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('name', './img/avatar.png', 0)
  const dateFrom: Date = new Date();
  const dateTo = new Date(dateFrom.getFullYear(), dateFrom.getMonth() + 2, 0);
  renderSearchFormBlock(dateFrom, dateTo)
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
