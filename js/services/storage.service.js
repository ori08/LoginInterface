'use strict'

function saveToStorage(key, value) {
    // const str = JSON.stringify(value)
    localStorage.setItem(key, value)
}

function loadFromStorage(key) {
    const str = localStorage.getItem(key)
    return str
    // return JSON.parse(str)
}


function saveData(key, gUser) {

    savedObejct = JSON.stringify(gUser)
    localStorage.setItem(key, savedObejct)
}


function loadData(key) {
    return JSON.parse(localStorage.getItem(key))
}

