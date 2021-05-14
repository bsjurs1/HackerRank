const superReducedString = (s: string) => {
    let isReduced = false;
    while ( !isReduced ) {
        isReduced = true;
        for(let i = 0; i < s.length - 1; i++) {
            if ( s[i] === s[i + 1] ) {
                s = s.slice(0, i) + s.slice(i + 2, s.length);
                isReduced = false;
            }
        }   
    }
    return ( s === "" ) ? "Empty String" : s;
}