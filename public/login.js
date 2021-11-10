document.querySelector('.img-btn').addEventListener('click', function () {
    document.querySelector('.container').classList.toggle('s-signup');
});

//Sign in button event listener
document.getElementById("sign-in").addEventListener("click", sign_in);
async function sign_in() {
    console.log("111");
    let data = {
        username: document.getElementById("username-signin").value,
        password: document.getElementById("password-signin").value
    };


    let response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let nextData = await response.status;
    let user = await response.json();

    console.log("here");
    console.log(nextData);
    if (nextData === 200) {
        window.location.href = "/home/home.html?userId=" + user.userId;
    }
    else {
        alert("Username or password is incorrect");
        window.location.href = "/";
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

    let response = await fetch('/auth/signup', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let nextData = await response.status;

    if (nextData === 200) {
        window.location.href = "/";
    }
    else {
        alert("Account exists already");
    }

}



