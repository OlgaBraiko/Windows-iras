const form = () => {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: data,
    });

    return await result.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMesage = document.createElement("div");
      statusMesage.classList.add("status");
      form.appendChild(statusMesage);

      const formData = new FormData(form);

      const objDataForm = {};

      formData.forEach((value, key) => (objDataForm[key] = value));
      const json = JSON.stringify(objDataForm);

      postData("https://simple-server-cumz.onrender.com/api/data", json)
        .then((result) => {
          console.log(result);
          statusMesage.textContent = message.success;
        })
        .catch(() => (statusMesage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMesage.remove();
          }, 6000);
        });
    });
  });
};

export default form;
