// Danh sách icon mới
var fontName = "maumau-set-1";

var prefix = "mm-1 ";
// Danh sách icon mới
var newIcons = [
  "icon1-real-estate-sale",
  "icon1-real-estate-rent",
  "icon1-heart-broken",
  "icon1-accessories",
  "icon1-hand-bag-1",
  "icon1-health",
  "icon1-travel-luggage",
  "icon1-waist-bag",
  "icon1-solid-camera-flycam",
  "icon1-camera-flycam",
  "icon1-real-estate",
  "icon1-real-estate-1",
  "icon1-real-estate-agency",
  "icon1-refresh",
  "icon1-refresh-2",
  "icon1-add-cart-1",
  "icon1-add-cart-1-thin",
  "icon1-clothing",
  "icon1-solid-clothing",
  "icon1-costume",
  "icon1-solid-costume",
  "icon1-dress",
  "icon1-solid-dress",
  "icon1-jeans",
  "icon1-solid-jeans",
  "icon1-shirt",
  "icon1-solid-shirt",
  "icon1-shorts",
  "icon1-solid-shorts",
  "icon1-socks",
  "icon1-solid-socks",
  "icon1-clothing-1",
  "icon1-solid-clothing-1",
  "icon1-fabric",
  "icon1-solid-fabric",
  "icon1-wedding-dress",
  "icon1-solid-wedding-dress",
  "icon1-womens-fashion",
  "icon1-solid-womens-fashion",
  "icon1-sweater",
  "icon1-solid-sweater",
  "icon1-tiktok",
  "icon1-sync-thin",
  "icon1-sync-user",
  "icon1-logo-sm",
  "icon1-resume-1",
  "icon1-solid-resume-1",
  "icon1-resume",
  "icon1-solid-resume",
  "icon1-resume-2",
  "icon1-solid-resume-2",
  "icon1-avatar-woman",
  "icon1-solid-avatar-woman",
  "icon1-avatar-man",
  "icon1-solid-avatar-man",
  "icon1-solid-gender",
  "icon1-gender",
  "icon1-graduate-1",
  "icon1-solid-graduate-1",
  "icon1-mail",
  "icon1-solid-mail",
  "icon1-birth",
  "icon1-solid-birth",
  "icon1-interview",
  "icon1-solid-interview",
  "icon1-experience",
  "icon1-solid-experience",
  "icon1-solid-interest",
  "icon1-interest",
  "icon1-solid-payment",
  "icon1-payment",
  "icon1-solid-certificate-1",
  "icon1-solid-salary",
  "icon1-salary",
  "icon1-solid-job",
  "icon1-job",
  "icon1-solid-vaccinated",
  "icon1-vaccinated",
];

// read iconData
fetch("set-1/iconData-1.txt")
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
    iconCountDiv.textContent = `Icon: ${iconData.length}`;
  })
  .catch((error) => console.error("Error fetching iconData:", error));

// Function to fetch and display the file content Icon data
async function displayFileContent() {
  try {
    const response = await fetch("set-1/iconData-1.txt");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    fileContent.textContent = text;

    // Count the occurrences of "ad-tgic"
    // const iconCountMatch = text.match(/ad-mm/g);
    const iconCountMatch = text.match(new RegExp(`${prefix}`, "g"));
    const count = iconCountMatch ? iconCountMatch.length : 0;
    iconCount.textContent = ` (${count})`;
  } catch (error) {
    fileContent.textContent = `Error: ${error.message}`;
  }
}
