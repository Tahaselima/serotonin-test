class Page {
  constructor() {
    this.title = 'Home Page'
  }
  open (path) {
    browser.url(path)
  }

  getCurrentUrl () { 
    return browser.url(); 
  }
}

module.exports = Page