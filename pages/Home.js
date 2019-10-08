class HomePage extends Page {
    get gotoProduct(randomId) {
        // 1 ile 4 arasında -> womentops
        // 5 ile 6 arasında -> womentbottoms
        // 19 ile 22 arasında -> mentops
        // 23 ile 24 arasında -> menButtons
        return $('#ui-id-1' + randomId);
    }
}

export default new HomePage()