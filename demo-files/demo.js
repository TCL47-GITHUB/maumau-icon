//Font Icon Test
if (!("boxShadow" in document.body.style)) {
  document.body.setAttribute("class", "noBoxShadow");
}

document.body.addEventListener("click", function (e) {
  var target = e.target;
  if (
    target.tagName === "INPUT" &&
    target.getAttribute("class").indexOf("liga") === -1
  ) {
    target.select();
  }
});

(function () {
  var fontSize = document.getElementById("fontSize"),
    testDrive = document.getElementById("testDrive"),
    testText = document.getElementById("testText");
  function updateTest() {
    testDrive.innerHTML = testText.value || String.fromCharCode(160);
    if (window.icomoonLiga) {
      window.icomoonLiga(testDrive);
    }
  }
  function updateSize() {
    testDrive.style.fontSize = fontSize.value + "px";
  }
  fontSize.addEventListener("change", updateSize, false);
  testText.addEventListener("input", updateTest, false);
  testText.addEventListener("change", updateTest, false);
  updateSize();
})();
// Total icon
// function countTotalIcon() {
//   var iconElements = document.querySelectorAll(".mls");
//   var totalCount = iconElements.length;

//   var totalIconCountElement = document.getElementById("totalIconCount");
//   totalIconCountElement.innerHTML = "(Icons: " + totalCount + ")";
// }

//Live Search
function searchIconByName(iconName) {
  var iconElements = document.querySelectorAll(".mls");

  iconElements.forEach(function (element) {
    var iconText = element.textContent.toLowerCase();
    var parentGlyph = element.closest(".glyph");

    if (iconText.includes(iconName.toLowerCase())) {
      parentGlyph.classList.remove("hidden-true");
    } else {
      parentGlyph.classList.add("hidden-true");
    }
  });
}

//toast
// Sự kiện click trên pseudo-element :before
document.addEventListener("click", function (event) {
  var target = event.target;

  // Kiểm tra xem phần tử được click có class mls hay không
  if (target.classList.contains("mls")) {
    if (copyIcon() == 1) {
      copyIconName1(target.textContent.trim());
    } else if (copyIcon() == 2) {
      copyIconName2(target.textContent.trim());
    }
  }
});
function copyIconName1(iconName) {
  // Tạo một thẻ input tạm thời để sao chép giá trị vào clipboard
  var tempInput = document.createElement("input");
  tempInput.value = '<i class="' + iconName + '"></i>';
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Hiển thị toast
  var toastContainer = document.getElementById("toastContainer");
  //   toastContainer.innerHTML =
  //     "Đã copy: " + '<i class="' + prefix + iconName + '"></i>';
  toastContainer.innerText = "Đã copy: " + '<i class="' + iconName + '"></i>';
  toastContainer.classList.add("show");

  setTimeout(function () {
    toastContainer.classList.remove("show");
  }, 4000);
}

function copyIconName2(iconName) {
  // Tạo một thẻ input tạm thời để sao chép giá trị vào clipboard
  var tempInput = document.createElement("input");
  tempInput.value = +iconName;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Hiển thị toast
  var toastContainer = document.getElementById("toastContainer");
  // toastContainer.innerHTML =
  //   "Đã copy: " + '<i class="' + prefix + iconName + '"></i>';
  toastContainer.innerText = "Đã copy: " + iconName;
  toastContainer.classList.add("show");

  setTimeout(function () {
    toastContainer.classList.remove("show");
  }, 4000);
}
function copyIcon() {
  var selectedFunction = document.getElementById("copyFunctionSelect").value;

  if (selectedFunction === "copyIconName1") {
    return 1;
  } else if (selectedFunction === "copyIconName2") {
    return 2;
  }
}

// Mở modal và hiển thị danh sách icon mới
function openModal() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";

  // Hiển thị icon mới trong modal
  var newIconContainer = document.getElementById("newIconContainer");
  newIconContainer.innerHTML = "";

  newIcons.forEach(function (iconClass) {
    var iconElement = document.createElement("div");
    iconElement.className = "new-icon";
    iconElement.innerHTML =
      '<i class="' +
      prefix +
      iconClass +
      '"></i>' +
      "<p>" +
      prefix +
      iconClass +
      "</p>";
    if (copyIcon() == 1) {
      iconElement.setAttribute(
        "onclick",
        'copyIconName1("' + prefix + iconClass + '")'
      );
    } else if (copyIcon() == 2) {
      iconElement.setAttribute(
        "onclick",
        'copyIconName2("' + prefix + iconClass + '")'
      );
    }
    newIconContainer.appendChild(iconElement);
  });
}

function closeModal() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

// Close the popup if the user clicks outside of the popup content
window.addEventListener("click", function (event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
});

window.onload = function () {
  openModal();
};

// Get elements
const popup = document.getElementById("popup");
const openPopupBtn = document.getElementById("open-popup");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const fileContent = document.getElementById("file-content");
const copyBtn = document.getElementById("copy-btn");
const iconCount = document.getElementById("icon-count");

// Function to fetch and display the file content
async function displayFileContent() {
  try {
    const response = await fetch("iconData-1.txt");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    fileContent.textContent = text;

    // Count the occurrences of "mm-2"
    const iconCountMatch = text.match(/mm-2/g);
    const count = iconCountMatch ? iconCountMatch.length : 0;
    iconCount.textContent = ` (${count})`;
  } catch (error) {
    fileContent.textContent = `Error: ${error.message}`;
  }
}

// Function to open the popup
function openPopup() {
  displayFileContent();
  popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

// Function to copy the content to clipboard
function copyContent() {
  const text = fileContent.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Đã sao chép");
    })
    .catch((err) => {
      alert("Failed to copy content: ", err);
    });
}

// Event listeners
openPopupBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
copyBtn.addEventListener("click", copyContent);

// Close the popup if the user clicks outside of the popup content
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

// read iconData
fetch("iconData-1.txt")
  .then((response) => response.text())
  .then((data) => {
    // Xử lý dữ liệu từ file iconData.txt
    const iconDataText = data.replace("export default", "");
    const iconData = eval(iconDataText);

    const container = document.getElementById("icon-container");

    iconData.forEach((icon) => {
      const glyphDiv = document.createElement("div");
      glyphDiv.classList.add("glyph", "fs1");

      const iconDiv = document.createElement("div");
      iconDiv.classList.add("clearfix", "bshadow0", "pbs");

      const iconElement = document.createElement("i");
      icon.code.split(" ").forEach((cls) => iconElement.classList.add(cls));
      iconDiv.appendChild(iconElement);

      const spanElement = document.createElement("span");
      spanElement.classList.add("mls");
      spanElement.textContent = icon.code;
      iconDiv.appendChild(spanElement);

      glyphDiv.appendChild(iconDiv);

      const fieldset = document.createElement("fieldset");
      fieldset.classList.add("fs0", "size1of1", "clearfix", "hidden-false");

      const input = document.createElement("input");
      input.type = "text";
      input.readOnly = true;
      input.value = icon.content;
      input.classList.add("unit", "size1of2");
      fieldset.appendChild(input);

      glyphDiv.appendChild(fieldset);

      container.appendChild(glyphDiv);
    });

    //Hiển thị tên font
    const fontNameDIV = document.getElementById("fontName");
    fontNameDIV.textContent = `${fontName}`;
    // Hiển thị số lượng icon
    const iconCountDiv = document.getElementById("totalIconCount");
    iconCountDiv.textContent = `Icons: ${iconData.length}`;
  })
  .catch((error) => console.error("Error fetching iconData:", error));
