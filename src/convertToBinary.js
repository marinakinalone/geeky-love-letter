// https://stackoverflow.com/questions/14430633/how-to-convert-text-to-binary-code-in-javascript

var convertToBinary = function(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let bin = input[i].charCodeAt().toString(2);
        output.push(Array(8 - bin.length +1 ).join("0") + bin)
    }
    return output.join("")
}


export {convertToBinary}