import Page from './Page'
class HomePage extends Page {
  gotoHomePage() {
    super.open('/')
  }
  gotoProduct(randomId) {
    return $(`#ui-id-${randomId}`);
  }
}

export default new HomePage()