const form = document.querySelector('#my__form')
const btn = document.querySelector('#my__form input.btn')
const firstNameInput = document.querySelector('#firstName')
const emailInput = document.querySelector('#email')
const itemsElement = document.querySelector('#items')

btn.addEventListener('click' , function(e)
{
    e.preventDefault()

    const firstName = firstNameInput.value
    const email = emailInput.value

    // alert('Please Enter all the value')

    var nameValue = document.getElementById('firstName').value
    var emailValue = document.getElementById('email').value

        if(nameValue === '' || emailValue === '')
            {    alert("This is required") }
            
        else{
        itemsElement.innerHTML +=`<li class="test"><b>${firstName}</b>: <a href="mailto:${email}">
        ${email}</a> 
        <span id="hours"></span>
        <span id="minutes"></span>
        <span id="seconds"></span>
        </li>`        
            }

    firstNameInput.value =''
    emailInput.value =''
})


function showTime()
{
    'use strict';

    var now = new Date(),

        hours = now.getHours(),

        minutes = now.getMinutes(),

        seconds = now.getSeconds();

        if(hours < 10)
        {  hours = '0' + hours; }
        
        if(minutes < 10)
        {  minutes = '0' + minutes; }
        
        if(seconds < 10)
        {  seconds = '0' + seconds; }

    document.getElementById('hours').textContent = hours + ' :';
    document.getElementById('minutes').textContent = minutes + ' :';
    document.getElementById('seconds').textContent = seconds + '';
}
window.onload = function()
{
    'use strict';

    setInterval(showTime, 500);  //function It works every half a second
}





