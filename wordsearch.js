const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    let string = false;
    for (let l of horizontalJoin) {
        let verify = 0;
        for (let letter of word) {
            let index = l.indexOf(letter)
            if (index !== -1) {
                l = l.slice(index);
                verify++;
            }
        }
        if (verify === word.length) {
            string = true;
        }
    }
    return string;
};

module.exports = wordSearch;

