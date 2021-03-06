const DELIVERY_BEL =
  "<h4>Экспресс доставка и грузоперевозки сборных грузов в любой город Беларуси:<br>быстро, качественно, доступно.</h4>\n" +
  "        <ul>\n" +
  "          <li>доставка по Беларуси, включает в себя мелкие населенные пункты страны, а также садовые товарищества.</li>\n" +
  "          <li>мы доставим Ваш груз по самым низким ценам! Всего за 1 день!</li>\n" +
  "          <li>стоимость доставки по Беларуси Вы можете рассчитать самостоятельно с помощью Калькулятора.</li>\n" +
  "        </ul>";

const DELIVERY_MINSK =
  "<h4>Доставим Ваш груз в любую точку Минска!<br>Для чего подойдет услуга грузоперевозок в Минске?</h4>\n" +
  "        <ul>\n" +
  "          <li>дачный, офисный, квартирный переезд</li>\n" +
  "          <li>перевозка мебели, доставка строительных материалов</li>\n" +
  "          <li>развоз товара по точкам</li>\n" +
  "          <li>аренда грузового авто</li>\n" +
  "        </ul>";

const DELIVERY_INET =
  "<h4>Наша служба курьерской доставки поможет интернет-магазинам максимально оптимизировать и\n" +
  "          сделать более эффективной транспортировку, отправляя заказы непосредственно из офиса онлайн\n" +
  "          магазина в указанное конечным получателем место.<br>Владельцы интернет - магазинов и их клиенты, могут:</h4>\n" +
  "        <ul>\n" +
  "          <li>в удобной форме оставлять заявки</li>\n" +
  "          <li>просматривать даты доставок</li>\n" +
  "          <li>рассчитывать стоимость</li>\n" +
  "          <li>отследить доставку</li>\n" +
  "        </ul>";

document
  .querySelector(".delivery__options")
  .addEventListener("click", setActiveDelivery);
function setActiveDelivery(e) {
  const allOptions = document.querySelectorAll(".delivery__option");
  Array.prototype.forEach.call(allOptions, i => {
    i.classList.remove("delivery__option_active");
  });
  const active = e.target.closest(".delivery__option");
  active.classList.add("delivery__option_active");

  const activeDesc = active.getAttribute("id");
  const deliveryDesc = document.querySelector(".delivery__desc");
  if (activeDesc === "delivery_bel") {
    deliveryDesc.innerHTML = DELIVERY_BEL;
    document.querySelector(".accounts").style.display = "block";
    document.querySelector(".schedule").style.display = "block";
    document.querySelector(".accounts_minsk").style.display = "none";
    document.querySelector(".inet-prices").style.display = "none";
  }
  if (activeDesc === "delivery_minsk") {
    deliveryDesc.innerHTML = DELIVERY_MINSK;
    document.querySelector(".accounts_minsk").style.display = "block";
    document.querySelector(".accounts").style.display = "none";
    document.querySelector(".inet-prices").style.display = "none";
  }
  if (activeDesc === "delivery_inet") {
    deliveryDesc.innerHTML = DELIVERY_INET;
    document.querySelector(".accounts").style.display = "block";
    document.querySelector(".schedule").style.display = "none";
    document.querySelector(".accounts_minsk").style.display = "none";
    document.querySelector(".inet-prices").style.display = "block";
  }
}

const schedule = {
  Бобруйск: "вт, ср, чт, пт, сб",
  Барановичи: "вт,ср,пт,сб",
  Борисов: "вт, ср, чт, пт, сб",
  Барань: "вт, ср, чт, пт, сб",
  Белоозерск: "вт,ср,пт,сб",
  Белыничи: "вт, ср, чт, пт, сб",
  Берестовица: "сб",
  Береза: "вт,ср, пт,сб",
  Березино: "вт, ср, чт, пт, сб",
  Березовка: "вт,ср,пт, сб",
  Бешенковичи: "вт, чт, пт, сб",
  Брагин: "сб",
  Браслав: "сб",
  Брест: "вт,ср, пт,сб",
  "Буда-Кошелево": "ср, сб",
  Быхов: "пт",
  "Василевичи (Слонимский)": "сб",
  "Василевичи (Речицкий)": "вт, ср, чт, пт, сб",
  Ветка: "ср, сб",
  Вилейка: "вт,ср,пт, сб",
  Витебск: "вт, ср, чт, пт, сб",
  Волковыск: "вт,ср,пт,сб",
  Вороново: "сб",
  Воложин: "вт,ср,пт,сб",
  "Высокое (Рогачев)": "вт, ср, чт, пт, сб",
  Ганцевичи: "вт,ср,пт,сб",
  "Ганцевичи (Борисовский)": "вт, ср, чт, пт, сб",
  Глубокое: "ср, сб",
  Глуск: "ср,сб",
  Гомель: "вт, ср, чт, пт, сб",
  Горки: "ср, сб",
  Городея: "вт, ср, чт, пт, сб",
  Городок: "ср,сб",
  Гродно: "вт,ср,пт,сб",
  "Давид-Городок": "сб",
  Дзержинск: "вт,ср,пт,сб",
  Дисна: "сб",
  Добруш: "ср, сб",
  Докшицы: "ср, сб",
  Дрибин: "ср, сб",
  Дрогичин: "вт,ср,пт,сб",
  Дубровно: "вт, ср, чт, пт, сб",
  Дятлово: "вт,ср,пт, сб",
  Ельск: "сб",
  Жодино: "вт, ср, чт, пт, сб",
  Жабинка: "вт,ср,пт,сб",
  Житковичи: "вт, ср, чт, пт, сб",
  Жлобин: "вт, ср, чт, пт, сб",
  Заславль: "вт, ср, чт, пт, сб",
  Зельва: "вт, ср,пт, сб",
  Иваново: "вт,ср,пт,сб",
  Ивацевичи: "вт,ср,пт,сб",
  Ивенец: "вт,ср,пт, сб",
  Ивье: "вт, ср,пт,сб",
  Калинковичи: "ср,сб",
  Каменец: "сб",
  Кировск: "ср, пт",
  Клецк: "вт,ср,пт, сб",
  Климовичи: "ср, сб",
  Кличев: "пт",
  Кобрин: "вт,ср,пт, сб",
  Копыль: "ср, сб",
  Кореличи: "вт,ср,пт, сб",
  Корма: "пт",
  Коссово: "ср, сб",
  Костюковичи: "ср, сб",
  Кричев: "ср, сб",
  "Краснополье (Краснопольский р-н, Могил. Обл)": "ср, сб",
  "д. Краснополье-2 ( Могилевский р-н, Могил. Обл)": "вт, ср, чт, пт, сб",
  Крупки: "вт, ср, чт, пт, сб",
  Лельчицы: "сб",
  Лепель: "вт, ср, чт, пт, сб",
  Лида: "вт,ср,пт,сб",
  Лиозно: "сб",
  Логойск: "вт,ср,чт,пт,сб",
  Лоев: "сб",
  Лунинец: "ср,сб",
  Любань: "ср, сб",
  Ляховичи: "вт,ср,пт, сб",
  Мозырь: "вт, ср, чт, пт, сб",
  Малорита: "сб",
  "Марьина Горка": "вт, ср, чт, пт, сб",
  Микашевичи: "вт,ср,пт,сб",
  Миоры: "сб",
  Могилев: "вт, ср, чт, пт, сб",
  Молодечно: "вт,ср,пт, сб",
  Мосты: "вт,ср,пт, сб",
  Мстиславль: "ср, сб",
  Мядель: "вт,ср, пт,сб",
  Новополоцк: "вт, ср, чт, пт, сб",
  Наровля: "сб",
  "Нарочь (Вилейский р-н)": "вт,ср,пт, сб",
  Нарочь: "вт,ср,пт, сб",
  Несвиж: "вт,ср,пт, сб",
  Новогрудок: "вт,ср.пт,сб",
  Новолукомль: "ср, сб",
  Октябрьский: "сб",
  Ольшаны: "сб",
  Орша: "вт, ср, чт, пт, сб",
  Осиповичи: "вт, ср, чт, пт, сб",
  Островец: "вт,ср,пт,сб",
  Ошмяны: "вт,ср,пт, сб",
  Пинск: "вт,ср,пт,сб",
  Полоцк: "вт, ср, чт, пт, сб",
  Петриков: "вт,ср,чт,пт,сб",
  Поставы: "ср, сб",
  Пружаны: "сб",
  Речица: "вт, ср, чт, пт, сб",
  Рогачев: "вт, ср, чт, пт, сб",
  Россоны: "сб",
  Светлогорск: "вт, ср, чт, пт, сб",
  Свислочь: "сб",
  Сенно: "ср, сб",
  Скидель: "вт,ср,пт,сб",
  Славгород: "ср, сб",
  Слоним: "вт,ср,пт,сб",
  Слуцк: "вт, ср, чт, пт, сб",
  Смолевичи: "вт, ср, чт, пт, сб",
  Сморгонь: "вт,ср,пт, сб",
  Солигорск: "вт, ср, чт, пт, сб",
  "Старые Дороги": "вт, ср, чт, пт, сб",
  Столбцы: "вт,ср,пт, сб",
  Столин: "сб",
  Толочин: "вт, ср, чт, пт, сб",
  Туров: "сб",
  Узда: "ср, чт, пт, сб",
  Фаниполь: "вт, ср, чт, пт, сб",
  Хотимск: "сб",
  Хойники: "сб",
  Чаусы: "ср, сб",
  Чашники: "ср, сб",
  Червень: "вт, ср, чт, пт, сб",
  Чериков: "ср, сб",
  Чечерск: "пт",
  Шарковщина: "сб",
  Шклов: "вт,ср,чт,пт, сб",
  Шумилино: "вт, ср, чт, пт, сб",
  Щучин: "вт,ср,пт,сб"
};


(function createOptions() {
    const list = document.getElementById("cities");
    const arrOfCities = Object.keys(schedule);
    var option = "dsd";

    for (var i in schedule) {
        option = document.createElement("option");
        option.value = i;
        option.text = i;
        list.appendChild(option);
    }
})();

document.getElementById('btn-schedule').addEventListener('click', showSchedule);

function showSchedule() {
    const selected = document.getElementById('cities');
    const city = selected.value;
    const timetable = schedule[city];
    document.querySelector('.schedule__answer').innerHTML = `<h5>Доставка в ${city} осуществляется в следующие дни: ${timetable}</h5>`;
    document.querySelector('.schedule__answer').style.display = "block";
}

const prices = {
  9: [0, 1],
  11: [1, 10],
  15: [10, 20],
  16: [20, 30],
  17: [30, 40],
  19: [40, 50],
  22: [50, 60],
  25: [60, 70],
  28: [70, 80],
  30: [80, 100],
  33: [100, 120],
  36: [120, 140],
  40: [140, 160],
  42: [160, 180],
  45: [180, 200],
  49: [200, 220],
  52: [220, 240],
  55: [240, 260],
  60: [260, 280],
  63: [280, 300],
  68: [300, 320],
  73: [320, 340],
  80: [340, 360],
  85: [360, 380],
  95: [380, 400],
  105: [400, 500],
  125: [500, 600],
  145: [600, 700],
  170: [700, 800],
  205: [800, 1000]
};

document.getElementById('btn-calc').addEventListener('click', showPrice);

function showPrice() {
  event.preventDefault();
  const weight = document.getElementById('weight').value;
  if(weight >= prices["205"][1]){
    document.querySelector('.calc__answer').innerHTML = `<h5>Свяжитесь с нами, чтобы обсудить стоимость доставки такого увесистого груза:)</h5>`;
  }
  else if(weight > prices["9"][0] && weight < prices["205"][1]) {
    for(var i in prices){
      if(weight >= prices[i][0] && weight < prices[i][1]){
        const price = i;
        document.querySelector('.calc__answer').innerHTML = `<h5>Приблизительная стоимость доставки - ${price} BYN</h5>`;
        break;
      }
    }
  }
  else{
    document.querySelector('.calc__answer').innerHTML = `<h5 style="color: #ff6e69;">Проверьте правильность введенных данных!</h5>`;
  }
  document.querySelector('.calc__answer').style.display = "flex";

}

document.getElementById("request").addEventListener("click", openCloseRequest);
document.querySelector(".img-cross").addEventListener("click", openCloseRequest);

function openCloseRequest() {
  document.getElementById("form-request").classList.toggle("visibility");
}
