const passwordBox = document.getElementById('password');
const length = 16;

const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~|{}[]></-=';

document.getElementById('generateBtn').onclick = function createPassword(){
    let password ='';
    for (let i=0; i<=length; i++){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;

    let image = document.getElementById('monkey');
    image.style.display='block';
}

document.getElementById('copy').onclick = function copyText(){
    let input = document.getElementById('password');
    input.select();
    document.execCommand('copy');
}
