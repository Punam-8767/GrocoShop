let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => 
{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next()
{
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev()
{
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// Shop ---  //




$(function (){
    var callback = function (event)
    {
        event.preventDefault();
        var input = $('input[type=text][name=item]'),
			value = input.val(),
			need = ($(event.target).attr('id') === 'addNeed'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (need) ? $('ul').first() : $('ul').last();
        input.val("");
        input.focus();

        if (value === "") return;

        if (!need)
        {
            item.find('input').attr('checked', true);
        }
        item.appendTo(list);
    }

    $('#addHave, #addNeed').click(callback); 

    $('ul').on('click', 'li a', function (event)
    {
        $(event.target).parent('li').remove();
    });

    $('ul').on('click', 'input[type=checkbox]', function (event)
    {
        var listItem = $(event.target).parent('li'),
			list = (event.target.checked) ? $('ul').last() : $('ul').first();
        listItem.appendTo(list);
    });
});








/* document.getElementById("map").innerHTML = "Map" +window.location.assign('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin'); */

 /* https://api.chec.io/v1

    $ curl https://api.chec.io/v1/products \
    -H "X-Authorization: sk_test_8146250gNZ8gddde480e07ac91c10c2651077176aed27" */
    /* https://real-time-product-search.p.rapidapi.com/search?q=Nike%20shoes&country=us&language=en*/ 
