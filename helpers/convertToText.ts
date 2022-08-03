export const convertToText = (str: string) => {
    return str.split(" ").map((binary: string) => {
      return String.fromCharCode(parseInt(binary, 2));
    }).join("")
  }
  