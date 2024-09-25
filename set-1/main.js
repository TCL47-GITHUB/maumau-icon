// Danh sách icon mới
var fontName = "maumau-set-1";

var prefix = "mm-1 ";

// Danh sách icon mới
var newIcons = [
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

