const selectAndCopy = async () => {
    let binary = document.getElementById("binary_content")
    binary.focus();
    binary.select();
    await document.execCommand("copy");
    alert('Text copied');
  }
  
export {selectAndCopy}