const form = document.querySelector("#waiver-form");
const digitalCopy = document.querySelector("#digital-copy");
const summaryBox = document.querySelector("#summary-box");
const numberSpan = document.querySelector("#assigned-number");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const participantNumber = Math.floor(Math.random() * 900 + 100);

  const firstName = document.querySelector("#first_name").value;
  const lastName = document.querySelector("#last_name").value;
  const dob = document.querySelector("#dob").value;
  const finalWords = document.querySelector("#final_words").value;

  summaryBox.innerHTML = `
  <p><strong>Name:</strong> ${firstName} ${lastName}</p>
  <p><strong>Date of Birth:</strong> ${dob}</p>
  <p><strong>Final Words Before Descent:</strong> "${finalWords}"</p>
  <p><em>You've officially agreed to chase cheese down a hill. No turning back now!</em></p>
`;

numberSpan.innerText = participantNumber;

form.style.display = "none";
digitalCopy.style.display = "block";
});

