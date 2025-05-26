// Store registrations
let participants = [];

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const age = document.getElementById("age").value.trim();
      const category = document.getElementById("category").value;

      if (name && email && age && category) {
        const participant = { name, email, age, category };
        participants.push(participant);

        successMessage.textContent = "Registration successful!";
        form.reset();
        console.log("Registered Participants:", participants);
      } else {
        successMessage.textContent = "Please fill in all required fields.";
        successMessage.style.color = "red";
      }
    });
  }
});

// Registration handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const age = document.getElementById("age").value.trim();
      const category = document.getElementById("category").value;

      if (name && email && age && category) {
        const participant = { name, email, age, category };
        let participants =
          JSON.parse(localStorage.getItem("participants")) || [];
        participants.push(participant);
        localStorage.setItem("participants", JSON.stringify(participants));

        successMessage.textContent = "Registration successful!";
        successMessage.style.color = "green";
        form.reset();
      } else {
        successMessage.textContent = "Please fill in all required fields.";
        successMessage.style.color = "red";
      }
    });
  }

  // Display participants table
  const tableBody = document.querySelector("#participantsTable tbody");
  if (tableBody) {
    const participants = JSON.parse(localStorage.getItem("participants")) || [];
    if (participants.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No participants yet.</td></tr>`;
    } else {
      participants.forEach((p) => {
        const row = `
          <tr>
            <td>${p.name}</td>
            <td>${p.email}</td>
            <td>${p.age}</td>
            <td>${p.category}</td>
          </tr>`;
        tableBody.innerHTML += row;
      });
    }
  }
});

const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      // Normally, here you'd send data to server via AJAX/fetch.
      // For now, just show success message:
      contactSuccess.textContent =
        "Thank you for contacting us! We will get back to you soon.";
      contactForm.reset();
    } else {
      contactSuccess.textContent = "Please fill in all fields.";
      contactSuccess.style.color = "red";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Leaflet map
  var map = L.map('map').setView([37.7749, -122.4194], 13); // Coordinates (lat, lon) + zoom level

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker
  L.marker([37.7749, -122.4194]).addTo(map)
    .bindPopup('Marathon 2025 Location')
    .openPopup();
});

document.addEventListener("DOMContentLoaded", function () {

  // --- Contact Form handling (existing) ---
  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        contactSuccess.style.color = "green";
        contactSuccess.textContent = "Thank you for contacting us! We will get back to you soon.";
        contactForm.reset();
      } else {
        contactSuccess.style.color = "red";
        contactSuccess.textContent = "Please fill in all fields.";
      }
    });
  }

  // --- Countdown Timer ---
  const marathonDate = new Date("2025-10-15T08:00:00").getTime();

  const daysSpan = document.getElementById("days");
  const hoursSpan = document.getElementById("hours");
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");

  if (daysSpan && hoursSpan && minutesSpan && secondsSpan) {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = marathonDate - now;

      if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<h2>The marathon is live or completed!</h2>";
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysSpan.textContent = days.toString().padStart(2, '0');
      hoursSpan.textContent = hours.toString().padStart(2, '0');
      minutesSpan.textContent = minutes.toString().padStart(2, '0');
      secondsSpan.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    var timerInterval = setInterval(updateCountdown, 1000);
  }

  // --- Leaflet Map initialization ---
  if (document.getElementById("map")) {
    var map = L.map('map').setView([37.7749, -122.4194], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([37.7749, -122.4194]).addTo(map)
      .bindPopup('Marathon 2025 Location')
      .openPopup();
  }

});
