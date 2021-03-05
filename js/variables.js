let form = document.querySelector(".invoices__form");
let fields = form.querySelectorAll(".field");
let comment = form.querySelector(".form__textarea");
let number = document.forms["reg-form"]["number"];
let invoiceDate = document.forms["reg-form"]["invoice-date"];
let supplyDate = document.forms["reg-form"]["supply-date"];

export {form, fields, comment, number, invoiceDate, supplyDate}