import Page from './Page'
class HomePage extends Page {
    gotoHomePage() {
      super.open('/')
    }
    gotoProduct(randomId) {
      return $('#ui-id-1' + randomId);
    }
}

export default new HomePage()