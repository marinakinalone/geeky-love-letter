const convertToBinary = (input: string) => {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        const bin = input[i].charCodeAt(0).toString(2);
        output.push(Array(8 - bin.length + 1 ).join("0") + bin)
    }
    return output.join(" ")
}

export default convertToBinary