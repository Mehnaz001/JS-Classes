const form = document.getElementById('loginForm')
const username = document.getElementById('username')
const preview = document.getElementById('preview')
const city = document.getElementById('city')
const profile= document.getElementById('profile')

//Preventing default behavior of browser
form.addEventListener('submit',function (event) {
    event.preventDefault()
    console.log("Form submitted")
})

//Extracting values on change in input
username.addEventListener('input',function (){
    preview.textContent = username.value
})

//change event in select
city.addEventListener('change',function(){
    console.log(city.value)
})

//change event in input
username.addEventListener('change',function (){
    console.log(username.value)
    profile.textContent = username.value
})

//focus event
username.addEventListener('focus',function (){
    username.style.border = "2px solid blue"
})

//reset event 

//practice - password checker
//print weak if password length is <6
//medium if password length is <10
//print strong if password length is <10