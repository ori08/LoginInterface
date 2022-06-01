'use strict'
var gUser = _createUsers()

var key = "Data"
var savedObejct = ""
var stoargeObject = ""
var adminFlag = false;
var usernameFromBrowser = ""
var passwordFromBrowser = ""
const STORAGE_KEY = 'corecctLogin'
const USER_KEY = ""
var userRight = false
var passRight = false






function onInit() {
    if (loadFromStorage(STORAGE_KEY) === "ok") {
        showPic()
    }
}


// get the username from user and save it to local var 

function onAddUserTodo(ev) {
    ev.preventDefault()

    const elTxt = document.querySelector('[name=txt]')
    usernameFromBrowser = elTxt.value

    //reset the input after submit 
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));

}

// get the pass from user and save it to local var 

function onAddPassTodo(ev) {
    ev.preventDefault()
    const elTxt = document.querySelector('[name=txt1]')
    passwordFromBrowser = elTxt.value


    //reset the input after submit 
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));

}


// function that ceack if the login dtatils are coreect and nevgate the user/admin
function login() {


    var userIdx = gUser.findIndex((person) => person.username === usernameFromBrowser)
    var user = gUser.find((person) => person.username === usernameFromBrowser)
    var passIdx = gUser.findIndex((person) => person.password === passwordFromBrowser)
    var pass = gUser.find((person) => person.password === passwordFromBrowser)


    if (user && pass && userIdx === passIdx && user.isAdmin) {
        alert("walcom")

        saveToStorage(STORAGE_KEY, "admin")
        saveToStorage(USER_KEY, gUser[userIdx].username)
        if (localStorage.length > 0) gUser = loadData("userData")
        gUser[userIdx].lastLoginTime = timestamp()

        saveData("userData", gUser)

        var getData = JSON.parse(localStorage.getItem("UserData"))

        window.location.href = "admin.html";

    }
    else if (user && pass && userIdx === passIdx) {
        if (localStorage.length > 0) gUser = loadData("userData")

        saveToStorage(USER_KEY, gUser[userIdx].username)

        gUser[userIdx].lastLoginTime = timestamp()
        saveData("userData", gUser)
        console.log(localStorage.length);
        showPic(userIdx)
    }
}



//function that convert num to time

function timestamp() {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()
    var hour = today.getHours()
    var min = today.getMinutes()
    if (min < 10) min = "0" + min
    today = `${mm}|${dd}|${yyyy}|${hour}:${min}`
    return today
}



//function that create users
function _createUsers() {
    var arr = [{
        id: 'u101',
        username: 'puki',
        password: 'secret',
        lastLoginTime: 1601891998864,
        isAdmin: true
    },
    {
        id: 'u102',
        username: 'ori',
        password: '123',
        lastLoginTime: 1601891998864,
        isAdmin: false
    },
    {
        id: 'u102',
        username: 'yossi',
        password: '987',
        lastLoginTime: 1601891998864,
        isAdmin: false
    }
    ]
    return arr
}


//function that alow acsses only if admin key available

function adminThere() {

    if (loadFromStorage(STORAGE_KEY) != "admin") window.location.href = "index.html"
    else return
}



function showPic() {
    saveToStorage(STORAGE_KEY, "ok")
    var name = loadFromStorage(USER_KEY)
    console.log(name)



    var elBody = document.querySelector("div")
    elBody.innerHTML = `<img class="secretpic" src="pic/pic1.jpg" alt="">
    <button class="logout" onclick="logout()">${name} (logout)</button>`
}



function logout() {
    saveToStorage(STORAGE_KEY, "")
    userRight = false
    passRight = false
    document.location.reload()

}






















