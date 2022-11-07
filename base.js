let menu = document.querySelector('.menu-mobile');
let menuBtn = document.querySelector('.menu-btn');
let menuMobileItem = document.querySelectorAll('.menu-mobile-item');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('menu-btn-active');
    menu.classList.toggle('menu-mobile-open');
});

// menuMobileItem.addEventListener('click', function(){
//     console.log("111");
//     menuBtn.classList.toggle('menu-btn-active');
//     menu.classList.toggle('menu-mobile-open');
// });

// menuMobileItem.forEach.call(like,function(el){
//     el.addEventListener('click', function (e) {
//         console.log("111");
//         menuBtn.classList.toggle('menu-btn-active');
//         menu.classList.toggle('menu-mobile-open');
//     })
// });

menuMobileItem.forEach(el => el.addEventListener('click', function (e) {
    console.log("111");
    menuBtn.classList.toggle('menu-btn-active');
    menu.classList.toggle('menu-mobile-open');
})
);




let portfolioLp = document.querySelector('.portfolio-lp');
let portfolioWebSites = document.querySelector('.portfolio-web-sites');
let portfolioOnlineStores = document.querySelector('.portfolio-online-stores');
let portfolioWebApplications = document.querySelector('.portfolio-web-applications');

let portfolioMenuItemLP = document.querySelector('.portfolio__menu-item-1 a');
let portfolioMenuItemWebSites = document.querySelector('.portfolio__menu-item-2 a');
let portfolioMenuItemOnlineStores = document.querySelector('.portfolio__menu-item-3 a');
let portfolioMenuItemWebApplications = document.querySelector('.portfolio__menu-item-4 a');

portfolioMenuItemLP.addEventListener('click', function(e){
    e.preventDefault();
	portfolioLp.classList.add('portfolio-item-active');
    portfolioWebSites.classList.remove('portfolio-item-active');
    portfolioOnlineStores.classList.remove('portfolio-item-active');
    portfolioWebApplications.classList.remove('portfolio-item-active');

    portfolioMenuItemLP.classList.add('portfolio__menu-item_active');
    portfolioMenuItemWebSites.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemOnlineStores.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemWebApplications.classList.remove('portfolio__menu-item_active');
});

portfolioMenuItemWebSites.addEventListener('click', function(e){
    e.preventDefault();
	portfolioLp.classList.remove('portfolio-item-active');
    portfolioWebSites.classList.add('portfolio-item-active');
    portfolioOnlineStores.classList.remove('portfolio-item-active');
    portfolioWebApplications.classList.remove('portfolio-item-active');
    
    portfolioMenuItemLP.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemWebSites.classList.add('portfolio__menu-item_active');
    portfolioMenuItemOnlineStores.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemWebApplications.classList.remove('portfolio__menu-item_active');
});

portfolioMenuItemOnlineStores.addEventListener('click', function(e){
    e.preventDefault();
	portfolioLp.classList.remove('portfolio-item-active');
    portfolioWebSites.classList.remove('portfolio-item-active');
    portfolioOnlineStores.classList.add('portfolio-item-active');
    portfolioWebApplications.classList.remove('portfolio-item-active');

    portfolioMenuItemLP.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemWebSites.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemOnlineStores.classList.add('portfolio__menu-item_active');
    portfolioMenuItemWebApplications.classList.remove('portfolio__menu-item_active');
});

portfolioMenuItemWebApplications.addEventListener('click', function(e){
    e.preventDefault();
	portfolioLp.classList.remove('portfolio-item-active');
    portfolioWebSites.classList.remove('portfolio-item-active');
    portfolioOnlineStores.classList.remove('portfolio-item-active');
    portfolioWebApplications.classList.add('portfolio-item-active');

    portfolioMenuItemLP.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemWebSites.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemOnlineStores.classList.remove('portfolio__menu-item_active');
    portfolioMenuItemWebApplications.classList.add('portfolio__menu-item_active');
});
