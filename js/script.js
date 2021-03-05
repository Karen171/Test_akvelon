import {
  form,
  fields,
  comment,
  number,
  invoiceDate,
  supplyDate,
} from "../js/variables.js";
import {addInvoices} from "../js/api.js";
import {BASE_URL} from "../js/api.js"


document.querySelector(".actions__btn").addEventListener("click", () => {
  let title = document.querySelector(".title__h2");
  title.innerHTML = "Create invoices";
  title.classList.add("active");
  document.querySelector(".invoices__modal").style.display = "block";
});

const removeErrors = () => {
  let errors = form.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

const errorGenerator = (text) => {
  let error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerText = text;
  return error;
};

const validateForm = () => {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = errorGenerator(`Can't be empty`);
      fields[i].parentElement.insertBefore(error, fields[i]);
      return false;
    }
  }
  if (number.value.length < 3) {
    let error = errorGenerator("this field must contain at least 3 characters");
    number.parentElement.insertBefore(error, number);
    return false;
  }
  if (comment.value.length > 160) {
    let error = errorGenerator(
      "this field must be no more than 160 characters"
    );
    comment.parentElement.insertBefore(error, comment);
    return false;
  }
  return true;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  removeErrors();
  let validate = validateForm();
  if (validate) {
    addInvoices(
      number.value,
      invoiceDate.value,
      supplyDate.value,
      comment.value
    );
  }
});

const renderInvoices = async () => {
  const invoices = await fetch(BASE_URL).then((res) => res.json());
  let tbody = document.querySelector(".table-tbody");
  for (let i = 0; i < invoices.length; i++) {
    tbody.innerHTML += `
      <tr>
          <td>${invoices[i].date_created}</td>
          <td>${invoices[i].number}</td>
          <td>${invoices[i].date_supplied}</td>
          <td>${invoices[i].comment}</td>
      </tr>
      `;
  }
};

renderInvoices();
