let selectedFilm;
let selectedTime;
let selectedSeats = [];
let filmPrice;

function showFilmInfo(title, time, price) {
  selectedFilm = title;
  selectedTime = time;
  filmPrice = price;

  document.getElementById("filmTitle").textContent = selectedFilm;
  document.getElementById("filmPrice").textContent = "Цена: " + filmPrice + " рублей";
  
  document.getElementById("filmPopup").style.display = "block";
}

function showSeatMap() {
  selectedSeats = [];
  let seatMap = document.querySelector("#seatMapPopup .seat-map");
  seatMap.innerHTML = "";

  for (let i = 1; i <= 8; i++) {
    let row = document.createElement("div");
    row.classList.add("seat-row");
    for (let j = 1; j <= 10; j++) {
      let seat = document.createElement("button");
      seat.textContent = j;
      seat.dataset.row = i;
      seat.dataset.seat = j;
      seat.addEventListener("click", selectSeat);
      row.appendChild(seat);
    }
    seatMap.appendChild(row);
  }

  document.getElementById("seatMapPopup").style.display = "block";
}

function selectSeat(event) {
  let seat = event.target;
  let row = seat.dataset.row;
  let seatNumber = seat.dataset.seat;
  let index = selectedSeats.findIndex(item => item.row === row && item.seatNumber === seatNumber);

  if (index !== -1) {
    selectedSeats.splice(index, 1);
    seat.classList.remove("selected");
  } else {
    selectedSeats.push({ row, seatNumber });
    seat.classList.add("selected");
  }

  updateTotalPrice();
}

function updateTotalPrice() {
  let totalPrice = selectedSeats.length * filmPrice;
  document.getElementById("totalPrice").textContent = totalPrice;
}

function confirmPayment() {
  if (selectedSeats.length === 0) {
    alert("Пожалуйста, выберите места.");
    return;
  }

  let ticketNumber = generateTicketNumber();
  let seatsString = selectedSeats.map(item => `Ряд ${item.row}, Место ${item.seatNumber}`).join(", ");
  let totalPrice = document.getElementById("totalPrice").textContent;

  let xhr = new XMLHttpRequest();
  
  xhr.open("POST", "save_ticket.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      document.getElementById("paymentPopup").style.display = "block";
    }
  };

  console.log(`Отправляем данные на сервер: film_title=${selectedFilm}&time=${selectedTime}&seat_number=${selectedSeats.length}&ticket_number=${ticketNumber}&price=${totalPrice}`);

  xhr.send(`film_title=${selectedFilm}&time=${selectedTime}&seat_number=${selectedSeats.length}&ticket_number=${ticketNumber}&price=${totalPrice}`);

  let paymentInfo = `Номер билета: ${ticketNumber}<br>Фильм: ${selectedFilm}<br>Места: ${seatsString}<br>Цена: ${totalPrice} рублей`;
  document.getElementById("paymentInfo").innerHTML = paymentInfo;
}

function closePopup() {
  document.querySelectorAll(".popup").forEach(popup => {
    popup.style.display = "none";
  });
}

function generateTicketNumber() {
  return Math.random().toString(36).substr(2, 9);
}

function openTicketSearch() {
  window.open("search_ticket.php", "_blank", "width=600,height=400");
}

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  } else {
      console.error("Элемент с ID " + elementId + " не найден.");
  }
}
