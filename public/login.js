document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.container').classList.toggle('s-signup');
});

//Sign in button event listener
document.getElementById("sign-in").addEventListener("click", sign_in);
async function sign_in() {
    let data = {
        username: document.getElementById("username-signin").value,
        password: document.getElementById("password-signin").value
    };

    let response = await fetch('http://localhost:3000/auth/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let nextData = await response.json();

    if (nextData) {
        window.location.href = "http://localhost:3000/home/home.html";
    }
    else {
        window.location.href = "http://localhost:3000/";
    }
}

//Sign up button event listener
document.getElementById("sign-up").addEventListener("click", sign_up);
async function sign_up() {
    let data = {
        username: document.getElementById("username-signup").value,
        password: document.getElementById("password-signup").value,
        name: document.getElementById("name-signup").value,
        description: document.getElementById("description-signup").value,
        location: document.getElementById("location-signup").value,
        phonenumber: document.getElementById("phone-number-signup").value,
        isVendor: document.getElementById("checkbox-signup").checked
    };

    let response = await fetch('http://localhost:3000/auth/signup', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let nextData = await response.json();

    console.log(nextData);

    window.location.href = "http://localhost:3000/";
}



