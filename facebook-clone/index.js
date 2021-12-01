let btn = document.querySelector("button");
let div = document.querySelector(".floatingmsg__hide");

btn.addEventListener('click', function () {
        if (div.style.display === 'none') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    })