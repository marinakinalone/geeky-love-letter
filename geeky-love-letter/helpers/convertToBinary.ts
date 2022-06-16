// https://stackoverflow.com/questions/14430633/how-to-convert-text-to-binary-code-in-javascript

const convertToBinary = (input: string) => {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "\n") {
            output.push('\n')
        } else {
            let bin = input[i].charCodeAt(0).toString(2);
        output.push(Array(8 - bin.length +1 ).join("0") + bin)

        }
        
    }
    return output.join("")
}


export default convertToBinary