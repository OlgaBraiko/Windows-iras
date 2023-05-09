/*const timer = (id, deadline) => {
  const addZero = (num) => {
    num <= 9 ? "0" + num : num;
  };

  const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date());

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };
  const updateClock = () => {
    const t = getTimeRemaining(endtime);
    days.textContent = addZero(t.days);
    hours.textContent = addZero(t.hours);
    minutes.textContent = addZero(t.minutes);
    seconds.textContent = addZero(t.seconds);

    if (t.total <= 0) {
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";

      clearInterval(timeInterval);
    }

    updateClock();

    const setClock = (selector, endtime) => {
      const timer = document.querySelector(selector);
      const days = document.querySelector("#days");
      const hours = document.querySelector("#hours");
      const minutes = document.querySelector("#minutes");
      const seconds = document.querySelector("#seconds");
      const timeInterval = setInterval(updateClock, 1000);
    };
    setClock(id, deadline);
  };
};

export default timer;
*/

const timer = (id, deadline) => {
  console.log("hello");
  const addZero = (num) => (num <= 9 ? "0" + num : num);

  const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date());

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };

    const setClock = (selector, endtime) => {
      const timer = document.querySelector(selector);
      const days = document.querySelector("#days");
      const hours = document.querySelector("#hours");
      const minutes = document.querySelector("#minutes");
      const seconds = document.querySelector("#seconds");

      const updateClock = () => {
        const t = getTimeRemaining(endtime);
        days.textContent = addZero(t.days);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
          days.textContent = "00";
          hours.textContent = "00";
          minutes.textContent = "00";
          seconds.textContent = "00";

          clearInterval(timeInterval);
        }
      };
      updateClock();
      const timeInterval = setInterval(updateClock, 1000);
    };

    setClock(id, deadline);
  };
};

export default timer;
