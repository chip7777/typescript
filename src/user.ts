import { renderBlock } from './lib'

export function renderUserBlock(name: string, linkAvatar: string, favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${linkAvatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
