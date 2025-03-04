# **Swaipers – Синхронний фотослайдер**

## 📌 Опис проєкту  
**SyncSlider** – це привабливий слайдер із фотографіями, особливістю якого є **синхронний рух кількох слайдерів** у різних напрямках. Два з них рухаються **вгору**, а два **вниз**, створюючи ефект динамічного переміщення. Крім цього, реалізовані **анімації наведення (hover)**, що додають плавності взаємодії.  

## 🛠 Використані технології  

### 🔹 Основні:  
- **HTML, CSS, JavaScript**  
- **Swiper.js** – бібліотека для створення слайдера  

### 🔹 CSS:  
- **Анімації**:  
  - **Hover-ефекти**  
- **Медіазапити** для адаптивності  

## ✨ Основні можливості  
✅ **Синхронний рух слайдів у різних напрямках**  
✅ **Безперервне прокручування (loop)**  
✅ **Навігація колесом миші**  
✅ **Анімовані ефекти наведення**  

---

## 🔧 Опис JavaScript-логіки  

### 📌 **1. Робота зі слайдерами (Swiper.js)**  
- Усі `.slider`-контейнери вибираються через `querySelectorAll()`, після чого для кожного створюється екземпляр `Swiper()`.  
- Налаштування включають:  
  - `freeMode: true` – вільне прокручування  
  - `centeredSlides: true` – слайди розташовані по центру  
  - `loop: true` – безперервне прокручування  
  - `direction: 'vertical'` – вертикальна орієнтація  
  - `mousewheel: true` – керування прокруткою миші  

### 📌 **2. Синхронізація руху всіх слайдерів**  
Для того, щоб усі чотири слайдери рухалися синхронно, використовується функція `bindSwipers()`. Вона отримує список слайдерів і переписує їхні методи `setTranslate` і `setTransition`, щоб вони **одночасно змінювали своє положення**.  

#### ✨ Використані механізми:  
- **Прототипне успадкування** (`Swiper.prototype.setTranslate.apply(this, arguments)`) – дозволяє викликати оригінальні методи Swiper  
- **Цикл `for...of`** – використовується для перебору всіх переданих слайдерів  
- **Методи `setTranslate()` та `setTransition()`**  
  - `setTranslate(translate, byController, doNotPropagate)` – змінює позицію слайдера  
  - `setTransition(duration, byController, doNotPropagate)` – задає плавність зміни позиції  

Завдяки цій логіці **всі слайдери отримують однакові значення зміщення**, але два з них рухаються в одному напрямку, а два – в протилежному.

---

