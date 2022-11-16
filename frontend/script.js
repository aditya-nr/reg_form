const form = document.getElementById('form');
const uname = document.getElementById('uname');
const n1 = document.getElementById('n1');
//page
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

//from page 1 to 2
n1.addEventListener('click', () => {
    p1.className = "container";
    p2.className = "container active"
})
//add event
form.addEventListener('submit', e => {
    e.preventDefault();
    // validate();
    swal(`Hello `, "Regestraion successfull !", "success");
})



// function validate() {
//     const unameVal = uname.value.trim();
//     if (unameVal === "") {
//         setErrormsg(uname, "username can't be blank");
//     } else if (unameVal.length <= 2) {
//         setErrormsg(uname, "username min 3 char");
//     } else {
//         setSuccessMsg(uname);
//     }

// }

function setErrormsg(input, msg) {
    console.log(input);
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = msg;
}

function setSuccessMsg(input) {
    input.parentElement.className = "form-control success"
}