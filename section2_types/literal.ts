function literal(i1 : string | number, i2 : string | number, conversion : 'as-number' | 'as-text') {
    if(conversion === 'as-number') {
        return +i1 + +i2;
    }
}