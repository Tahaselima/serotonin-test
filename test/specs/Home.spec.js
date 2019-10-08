import HomePage from '../../pages/Home';

import 'chai/register-expect';

describe('Route is Corrent in Menu', ()  => {
  it('menu click correct', () => {
    HomePage.gotoHomePage();
    if (!browser.isLoading()) {
      const who = Math.floor(Math.random() * 2) + 1 
      const topEach = who === 1 ? [11, 14] : [19,22]; 
      const bottomEach = who === 1 ? [15, 16] : [23,24]; 
    
      const randomTop = Math.floor(Math.random() * (topEach[1] - topEach[0])) + (topEach[0])
      const randomBottom = Math.floor(Math.random() * (bottomEach[1] - bottomEach[0])) + (bottomEach[0])
      if (who === 1) {
        $('#ui-id-4').moveTo()
        $('#ui-id-9').moveTo()
      } else {
        $('#ui-id-5').moveTo()
        $('#ui-id-17').moveTo()
      }
      const menuText = HomePage.gotoProduct(randomTop).getText()
      HomePage.gotoProduct(randomTop).click()
      expect(browser.getTitle()).to.contain(menuText)
    }
  })
})