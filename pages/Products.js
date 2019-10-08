import Page from './Page'
class ProductsPage extends Page {
  get SorterSelect() { 
    return $('#sorter') 
  }
  get getPriceSorterOption()  { 
    return $('#sorter option[value="price"]')
  }
  get StoreAsc() {
    return $('a[data-role="direction-switcher"]')
  }
  get ProductTotalCount() {
    return $('#toolbar-amount > .toolbar-number:last-child')
  }
  getAddToCompareButton(index) {
    return $(`#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(${index}) > div > div > div.product-item-inner > div > div.actions-secondary > a.action.tocompare`)
  }
}

export default new ProductsPage()