let simpleCaseConverter = {}

simpleCaseConverter.sentenceCase = (e) => {
    if (typeof (e) == "string") {
        let newCase = ''
        for (let i = 0; i < e.length; i++) {
            if (i == 0) {
                newCase = newCase + e[i].toUpperCase()
            } else if (i == e.length - 1) {
                if (e[i] != '.') {
                    newCase = newCase + e[i] + '.'
                }
            } else {
                newCase = newCase + e[i]
            }
        }
        return newCase
    } else {
        return new Error('Parameter must be in string')
    }
}

simpleCaseConverter.capitalizeEachWord = (e) => {
    if (typeof (e) == "string") {
        let newCase = ''
        let eachWord = e.split(" ")
        for (let i = 0; i < eachWord.length; i++) {
            let capitalize = ""
            if (i != 0) {
                capitalize = " "
            }
            let someCase = eachWord[i];
            for (let n = 0; n < someCase.length; n++) {
                if (n == 0) {
                    capitalize = capitalize + someCase[n].toUpperCase()
                } else {
                    capitalize = capitalize + someCase[n]
                }
            }
            newCase = newCase + capitalize
        }

        if (newCase[newCase.length - 1] != '.') {
            newCase = newCase + '.'
        }

        return newCase
    } else {
        return new Error('Parameter must be in string')
    }
}

module.exports = simpleCaseConverter