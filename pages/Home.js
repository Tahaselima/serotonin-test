class Home extends Page {
    get goToWomenTops(randomId) { 
        return $('#ui-id-1' + randomId); // 1 ile 4 arasında
    }

    get goToWomenBottoms(randomId) { 
        return $('#ui-id-1' + randomId); // 5 ile 6 arasında
    }

    get goToMenTops(randomId) {
        return $('#ui-id-1' + randomId); // 19 ile 22 arasında
    }

    get goToMenBottoms(randomId) {
        return $('#ui-id-1' + randomId); // 23 ile 24 arasında
    }
    
}