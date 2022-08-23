const amountPopup = document.querySelector(".form__popup");
const amountBtn = document.querySelector(".js-amount-btn");
const formAmount = document.querySelector(".js-form-amount");
const userAmount = document.querySelector(".js-form__user-input_type_amount");
const amount = document.querySelector(".js-amount");
const radioTopBtns = document.querySelectorAll(".js-radio-top-amount");
const radioBottomBtns = document.querySelectorAll(".js-radio-bottom-amount");
const supportBtn = document.querySelector(".js-support-btn");
function openPopup(popup) {
  popup.classList.add('form__popup_opened');
  };
function closePopup(popup) {
  popup.classList.remove('form__popup_opened');
  }
amountBtn.addEventListener("click", () => openPopup(amountPopup));
const changeAmount = function (evt) {
    evt.preventDefault();
    amount.textContent = `${userAmount.value}₽`;
        closePopup(amountPopup)
  };
formAmount.addEventListener("submit", changeAmount);
// СКРОЛЛ С ВЕРХНЕГО БЛОКА
function chooseAmount() {
    for (let i=0;i<=radioTopBtns.length; i++) {
    if (radioTopBtns[i].checked) {
      radioBottomBtns.forEach((item) => item.removeAttribute("checked"))
      closePopup(amountPopup)
      radioBottomBtns[i].setAttribute("checked", "checked");
    }
    if(radioBottomBtns[4].checked) {
      openPopup(amountPopup)
    }
  }
}
supportBtn.addEventListener("click", () => chooseAmount())
