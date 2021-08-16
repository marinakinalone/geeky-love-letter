let input = "hello world";
let output = "0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"

var convertToBinary = function(input) {
    let result = []
    for (var i = 0; i < input.length; i++) {
        result += input[i].charCodeAt(0).toString(2) + "0";
    }
    return result


}

console.log(convertToBinary(input))

