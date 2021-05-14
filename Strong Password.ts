const minimumNumber = (n: number, password: string) => {
    let missingSymbolCount = 0;
    missingSymbolCount += containsDigit(password) ? 0 : 1;
    missingSymbolCount += containsSpecialSymbol(password) ? 0 : 1;
    missingSymbolCount += containsLowercaseLetter(password) ? 0 : 1;
    missingSymbolCount += containsUppercaseLetter(password) ? 0 : 1;
    return (password.length + missingSymbolCount >= 6) ? missingSymbolCount : missingSymbolCount + (6 - (password.length + missingSymbolCount));
}

const containsDigit = (s: string) => {
    return /\d/.test(s);
}

const containsSpecialSymbol = (s: string) => {
    return /\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\+/.test(s);
}

const containsLowercaseLetter = (s: string) => {
    return /[a-z]/.test(s);
}

const containsUppercaseLetter = (s: string) => {
    return /[A-Z]/.test(s);
}