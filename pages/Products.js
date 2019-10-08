class ProductsPage extends Page {
  getSorterSelect() { 
    return $('#sorter') 
  }
  getPriceSorterOption()  { 
    return $('#sorter option[value="price"]')
  }
  getStoreAsc() {
    return $('a[data-role="direction-switcher"]')
  }
  getProductTotalCount() {
    return $('#toolbar-amount > .toolbar-number:last-child')
  }
  getAddToCompareButton(index) {
    return $(`#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(${index}) > div > div > div.product-item-inner > div > div.actions-secondary > a.action.tocompare`)
  }
}

export default new ProductsPage()