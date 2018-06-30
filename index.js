const DELIVERY_BEL = "<h4>ДОСТАВКА И ГРУЗОПЕРЕВОЗКА ПО БЕЛАРУСИ БЫСТРО КАЧЕСТВЕННО ДОСТУПНО</h4>\n" +
    "          <p>Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.</p>";

const DELIVERY_MINSK = "<h4>ДОСТАВКА И ГРУЗОПЕРЕВОЗКА ПО МИНСКУ БЫСТРО КАЧЕСТВЕННО ДОСТУПНО</h4>\n" +
    "          <p>Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.</p>";

const DELIVERY_INET = "<h4>ДОСТАВКА И ГРУЗОПЕРЕВОЗКА ИЗ ИНЕТ МАГАЗА БЫСТРО КАЧЕСТВЕННО ДОСТУПНО</h4>\n" +
    "          <p>Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.\n" +
    "            Мы предоставляем услуги по перевозке крупногабаритных вещей и приборов в пределах города минска.</p>";



document.querySelector('.delivery__options').addEventListener('click', setActiveDelivery);
function setActiveDelivery(e){
    const allOptions = document.querySelectorAll('.delivery__option');
    allOptions.forEach((i) => {i.classList.remove('delivery__option_active')});
    const active = e.target.closest('.delivery__option');
    active.classList.add('delivery__option_active');

    const activeDesc = active.getAttribute("id");
    const deliveryDesc = document.querySelector(".delivery__desc");
    if (activeDesc === "delivery_bel")
        deliveryDesc.innerHTML = DELIVERY_BEL;
    if(activeDesc === "delivery_minsk")
        deliveryDesc.innerHTML = DELIVERY_MINSK;
    if(activeDesc === "delivery_inet")
        deliveryDesc.innerHTML = DELIVERY_INET;
}