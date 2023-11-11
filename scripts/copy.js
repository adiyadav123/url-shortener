const copy_button = document.querySelector("#copy");
const copy_text = document.querySelector("#copy_url");

copy_button.addEventListener("click", function(){
    if(!copy_text.value){
       return swal("Shorten a URL Please!")
    }
    let copy_value = copy_text.value.toString();
    navigator.clipboard.writeText(copy_value);

    copy_button.innerHTML = `
    <i class="fa-solid fa-check"></i>
    `

    setTimeout(() => {
        copy_button.innerHTML = `
        <i class="fa-solid fa-copy"></i>
        `
    }, 2000);
})