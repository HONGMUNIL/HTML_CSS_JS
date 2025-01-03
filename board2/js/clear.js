let boardInputDatas = {
    title: "",
    content: "",
    author: "",
}

function setInputsEvent(){
    const titleInput = document.querySelector(".main-body > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-body > textarea");
    const authorInput  = document.querySelector(".main-body> input:nth-of-type(2)")
    titleInput.onkeyup = handleBoardInputOnChange;
    contentInput.onkeyup = handleBoardInputOnChange;
    authorInput.onkeyup = handleBoardInputOnChange;
}



function handleBoardInputOnChange(e){
   console.log(showInputValue());
    boardInputDatas = {
        ...boardInputDatas,
        [e.target.id] : e.target.value,
    };
}