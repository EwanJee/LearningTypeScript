type Combinable = string | number;
type ConversionDescriptor = 'as-number' | 'as-text';

function alias(i1 : Combinable, i2 : Combinable, conversion : ConversionDescriptor) {
    if(conversion === 'as-number') {
        return +i1 + +i2;
    }
}