function setTheme() {
    const root = document.documentElement;
    document.querySelector('.checkbox').checked ? root.className = 'light' : root.className= 'dark';  
}

document.querySelector('.checkbox').addEventListener('click', setTheme);
setTheme();


