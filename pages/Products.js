import Page from './Page'
class ProductsPage extends Page {
  get getPriceSorterOption()  { 
    return $('#sorter option[value="price"]')
  }
  get StoreAsc() {
    return $('#maincontent > div.columns > div.column.main > div:nth-child(3) > div.toolbar-sorter.sorter > a')
  }
  get ProductTotalCount() {
    return $('#toolbar-amount > .toolbar-number:last-child')
  }
  get CompareButton() {
    return $('body > div.page-wrapper > header > div.header.content > ul > li > a')
  }
  get addedItemCount() {
    return $('body > div.page-wrapper > header > div.header.content > ul > li > a > span')
  }
  getProductItem(index) {
    return $(`ol > li:nth-child(${index}`)
  }
  getAddToCompareButton(index) {
    return $(`#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(${index}) > div > div > div.product-item-inner > div > div.actions-secondary > a.action.tocompare`)
  }
}

export default new ProductsPage()