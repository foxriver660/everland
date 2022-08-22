const amountPopup = document.querySelector(".form__popup");
const amountBtn = document.querySelector(".js-amount-btn");
const formAmount = document.querySelector(".js-form-amount");
const userAmount = document.querySelector(".js-form__user-input_type_amount");
const amount = document.querySelector(".js-amount");
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
