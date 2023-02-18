function setTheme() {
    const root = document.documentElement;
    document.querySelector('.checkbox').checked ? root.className = 'light' : root.className= 'dark';  
}

document.querySelector('.checkbox').addEventListener('click', setTheme);
setTheme();

function validate() {
    let password = document.getElementById('password').value;
    let confirm_p = document.getElementById('confirm_p').value;
    if (password != confirm_p) {
        document.querySelector(".password_validate").textContent = "Passwords do not match";
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('confirm_p').style.borderColor = "red";
        return false;
    }
    document.querySelector(".password_validate").textContent = "";
    document.getElementById('password').style.borderColor = "green";
        document.getElementById('confirm_p').style.borderColor = "green";
    return true;
}