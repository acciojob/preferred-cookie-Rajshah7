// Select elements
const form = document.querySelector("form");

const fontSizeInput =
  document.getElementById("fontsize");

const fontColorInput =
  document.getElementById("fontcolor");

// Apply styles
function applyPreferences(fontSize, fontColor) {

  document.documentElement.style.setProperty(
    "--fontsize",
    `${fontSize}px`
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
}

// Get cookie value
function getCookie(name) {

  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {

    const [key, value] = cookie.split("=");

    if (key === name) {
      return value;
    }
  }

  return null;
}

// Load saved preferences
window.onload = function () {

  const savedFontSize =
    getCookie("fontsize");

  const savedFontColor =
    getCookie("fontcolor");

  if (savedFontSize && savedFontColor) {

    // Set input values
    fontSizeInput.value = savedFontSize;

    fontColorInput.value = savedFontColor;

    // Apply styles
    applyPreferences(
      savedFontSize,
      savedFontColor
    );
  }
};

// Save preferences
form.addEventListener("submit", function (e) {

  e.preventDefault();

  const fontSize =
    fontSizeInput.value;

  const fontColor =
    fontColorInput.value;

  // Save cookies
  document.cookie =
    `fontsize=${fontSize}; path=/`;

  document.cookie =
    `fontcolor=${fontColor}; path=/`;

  // Apply styles immediately
  applyPreferences(
    fontSize,
    fontColor
  );
});