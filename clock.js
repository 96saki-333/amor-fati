const clock = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const date = String(d.getDate()).padStart(2, "0");
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = weekday[d.getDay()];
  const hour = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");

  const yearLine = `<span class="year-small">${year}</span>`;
  const monthDayLine = `<span class="monthday-line">${month}.${date}</span>`;
  const dayLine = `<span class="date-right">${day}</span>`;
  const time = `${hour}:${min}`;

  document.querySelector(".clock-date").innerHTML = `
    <div class="date-left">
      ${yearLine}
      ${monthDayLine}
    </div>
    ${dayLine}
  `;

  document.querySelector(".clock-time").innerText = time;
};

setInterval(clock, 1000);
