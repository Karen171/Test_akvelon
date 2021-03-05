export const BASE_URL = "http://localhost:3000/invoices";
export const addInvoices = async (number, date_created, date_supplied, comment) => {
  let id = () => {
    return Math.floor(Math.random() * 1000000000);
  };
  try {
    const invoice = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id(),
        number: "INV-" + number,
        date_created: date_created,
        date_supplied: date_supplied,
        comment: comment,
      }),
    });
    const resolve = await invoice.json();
    return resolve;
  } catch (e) {
    console.log(e);
  }
};
