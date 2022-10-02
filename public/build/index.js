import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('name', './img/avatar.png', 0);
    const dateFrom = new Date();
    const dateTo = new Date(dateFrom.getFullYear(), dateFrom.getMonth() + 2, 0);
    renderSearchFormBlock(dateFrom, dateTo);
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});
