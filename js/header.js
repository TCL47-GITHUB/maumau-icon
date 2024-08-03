class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="bgc1 clearfix">
<a class="logo" href="#!">
<svg
xmlns="http://www.w3.org/2000/svg"
width="104"
height="16"
fill="none"
style="filter: brightness(0) invert(1)"
>
<path
fill="#D40535"
fill-rule="evenodd"
d="M104 2.076v7.72c.02.94-.18 1.87-.58 2.73a5.302 5.302 0 0 1-3.5 3.01c-1.38.4-2.83.42-4.22.07h-.02c-2.01-.56-3.33-1.9-3.89-3.9-.17-.62-.25-1.25-.25-1.88v-7.58c-.01-.17 0-.34.02-.5.06-.89.8-1.58 1.69-1.6.9-.05 1.69.58 1.84 1.47v.02c.03.23.05.47.03.71v7.31c0 .42.06.84.17 1.25.25.94 1.1 1.6 2.08 1.61h.04c.43.04.87 0 1.29-.09.78-.2 1.26-.63 1.5-1.34.1-.28.15-.56.16-.85v-.03c.02-.24.02-.49.02-.74.02-2.43.02-4.82 0-7.22 0-.26.02-.52.07-.78v-.02l.02-.03c.21-.74.88-1.25 1.64-1.27.79-.04 1.5.44 1.77 1.17l.01.01c.08.25.11.5.11.75M88.91 1.516v-.05c-.19-.76-.87-1.31-1.66-1.32h-.02c-.73.02-1.38.48-1.62 1.16-1.23-.99-2.68-1.29-4.22-1.11-1.21.14-2.34.63-3.26 1.41a7.135 7.135 0 0 0-2.57 4.43c-.19 1.04-.23 2.09-.11 3.14.08.91.31 1.8.68 2.63.82 1.76 2.12 3.04 4.02 3.68h.01c.48.16.97.26 1.47.32 1.42.21 2.87-.22 3.93-1.18.04.12.09.22.13.29.09.13.2.28.33.41.26.24.66.51 1.17.53.84.04 1.58-.54 1.72-1.37.04-.21.06-.42.05-.62V2.096c0-.19-.02-.38-.05-.58m-9.54 4.25.01-.01c.1-.31.23-.6.4-.87v-.02l.01-.01c.42-.79 1.21-1.31 2.1-1.39h.04c1.04-.15 2.07.31 2.65 1.19.33.49.56 1.04.67 1.61h.01v.02c.13.56.2 1.14.19 1.71.01 1.13-.25 2.23-.77 3.23-.22.41-.56.76-.98.98-.69.34-1.46.44-2.2.28-.52-.11-.99-.4-1.32-.81h-.01l-.01-.01c-.46-.53-.78-1.15-.92-1.83v-.02l-.01-.01c-.36-1.33-.31-2.74.13-4.04zM73.39 6.166v8.09c0 .47-.21.92-.56 1.23-.35.31-.79.48-1.25.47-.47 0-.91-.16-1.25-.47-.35-.32-.55-.76-.56-1.23v-8.14c0-.6-.23-1.19-.65-1.63-.43-.46-1.04-.71-1.67-.68h-.03c-.79 0-1.34.24-1.73.67a2.4 2.4 0 0 0-.61 1.67v8.11c-.01.47-.21.92-.57 1.24h-.01c-.71.62-1.78.62-2.5 0l-.01-.01c-.35-.32-.54-.77-.54-1.24v-8.09c.01-.62-.22-1.22-.64-1.67-.44-.46-1.05-.71-1.68-.68h-.02c-.8 0-1.35.24-1.74.67a2.4 2.4 0 0 0-.61 1.67v8.11c-.01.47-.21.92-.57 1.23-.34.31-.79.48-1.25.47-.47 0-.92-.16-1.26-.47-.36-.31-.56-.76-.57-1.23v-8.09c.01-.77.16-1.53.45-2.24.28-.7.71-1.34 1.25-1.87a6.06 6.06 0 0 1 1.88-1.23c.77-.31 1.59-.46 2.42-.45.91-.01 1.81.19 2.64.59.55.26 1.06.6 1.52 1.01.45-.42.96-.76 1.52-1.01.82-.41 1.72-.6 2.63-.59.81-.01 1.62.14 2.37.44.72.28 1.37.71 1.92 1.26.52.53.94 1.15 1.23 1.84h.01c.3.71.45 1.48.44 2.25M50.75 2.306v2.37c.01 1.59.01 3.19 0 4.78.02.87-.1 1.74-.37 2.56a5.444 5.444 0 0 1-4.09 3.64c-1.18.27-2.42.27-3.6 0-2.12-.47-3.5-1.81-4.13-3.86l-.01-.02c-.18-.69-.27-1.41-.25-2.13V1.786c.04-.92.81-1.64 1.73-1.64.94-.04 1.75.65 1.85 1.59v7.94c0 .44.06.87.19 1.28.25.92 1.08 1.55 2.02 1.56h.05c.41.04.82.02 1.23-.05.49-.11.85-.31 1.11-.57.26-.27.45-.64.57-1.14.07-.38.1-.77.09-1.15v-7.28c0-.18.01-.37.02-.55.03-.71.52-1.34 1.22-1.53.65-.23 1.38-.06 1.87.44.26.25.42.57.47.93v.04l.01.31h.01c0 .1.01.21.01.34M35.68 1.626c-.07-.63-.5-1.17-1.1-1.38-.58-.21-1.23-.1-1.69.31-.25.2-.43.46-.54.76-.59-.48-1.28-.82-2.03-1a5.884 5.884 0 0 0-3.3.14c-2.28.76-3.76 2.38-4.46 4.6h-.01c-.57 1.84-.59 3.81-.07 5.66a7.061 7.061 0 0 0 2.12 3.46c1.06.92 2.38 1.49 3.78 1.63 1.43.2 2.88-.24 3.96-1.19.21.77.94 1.29 1.74 1.24.83-.04 1.51-.67 1.6-1.5.02-.16.03-.34.02-.51v-11.7c.01-.18 0-.35-.02-.52m-9.91 6.39v-.02c0-.77.12-1.54.36-2.27.12-.3.25-.59.41-.87.42-.78 1.21-1.3 2.1-1.39h.01c1.15-.12 2 .28 2.69 1.19.27.38.47.81.59 1.26.25.9.34 1.85.26 2.78-.07.73-.25 1.44-.53 2.11-.02.03-.03.06-.06.1-.01.01-.02.03-.03.05-.03.07-.08.15-.12.25a2.49 2.49 0 0 1-1.95 1.31h-.02c-.44.07-.87.05-1.3-.05-.31-.08-.6-.22-.85-.43h-.01c-.48-.4-.86-.92-1.09-1.5-.32-.81-.48-1.66-.46-2.52M20.28 14.016c.01.49-.21.95-.6 1.25-.33.3-.76.47-1.21.47-.45 0-.92-.17-1.26-.47-.37-.32-.57-.77-.57-1.25v-8.11c0-.6-.23-1.19-.65-1.63-.43-.46-1.04-.71-1.67-.68h-.03c-.78 0-1.33.24-1.71.67-.4.44-.63 1.01-.63 1.61v8.14c0 .48-.21.93-.57 1.24-.34.31-.77.48-1.23.48-.47.01-.92-.16-1.26-.48-.37-.31-.57-.76-.57-1.24v-8.11c0-.6-.23-1.19-.64-1.63h-.01c-.43-.46-1.04-.71-1.67-.68h-.02c-.81 0-1.35.24-1.71.66l-.01.01a2.42 2.42 0 0 0-.63 1.64v8.1c.01.49-.2.95-.58 1.26-.33.3-.77.47-1.22.47-.45 0-.93-.16-1.28-.48-.36-.31-.55-.77-.55-1.25v-8.05c0-.77.14-1.53.42-2.25h.01v-.02c.29-.69.71-1.32 1.24-1.85h.02A5.96 5.96 0 0 1 3.58.596c.77-.3 1.58-.45 2.39-.45.92 0 1.82.2 2.64.59a6.1 6.1 0 0 1 1.53 1.02c.45-.41.96-.76 1.51-1.02h.01c.82-.39 1.72-.59 2.63-.59.82 0 1.62.15 2.38.44h.02c1.09.45 1.98 1.2 2.61 2.14.62.93.98 2.04.98 3.22z"
clip-rule="evenodd"
></path></svg></a>
<div
class="flex rounded gap-1 items-center search-container bg-white px-4 py-1.5"
>
<input
type="text"
class=""
id="searchInput"
oninput="searchIconByName(this.value)"
placeholder="Tìm Icon..."
/>
<div class="search-icon">
<?xml version="1.0" encoding="iso-8859-1"?><svg
version="1.1"
id="Capa_1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
x="0px"
y="0px"
width="16"
height="16"
viewBox="0 0 612.01 612.01"
style="enable-background: new 0 0 612.01 612.01"
xml:space="preserve"
>
<g>
  <g id="_x34__4_">
    <g>
      <path
        d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0                C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586               l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8              c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407               S377.82,467.8,257.493,467.8z"
      />
    </g>
  </g>
</g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
<g></g>
</svg>
</div>
</div>

<form class="max-w-sm mx-auto">
<select
id="copyFunctionSelect"
class="bg-gray-50 border border-gray-300 text-gray-800 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
<option value="copyIconName1">Copy full tag</option>
<option selected value="copyIconName2">Copy tên class</option>
</select>
</form>

<!-- Popup structure -->
<div class="flex m-2">
<a href="https://tcl47-github.github.io/maumau-icon/set-1/demo.html"
class="text-base rounded-r-none hover:scale-105 focus:outline-none flex justify-center px-2 py-1 rounded cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition">
<div class="flex leading-5">Set 1</div>
</a>
<a href="https://tcl47-github.github.io/maumau-icon/set-2/demo.html"
class="text-base hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition" >
<div class="flex leading-5">Set 2</div>
</a>

<a
href="https://tcl47-github.github.io/maumau-icon/admin/demo.html"
class="text-base hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-sky-700 hover:text-sky-100 bg-sky-100 text-sky-700 border border-r-0 duration-200 ease-in-out border-sky-600 transition"
>
<div class="flex leading-5">Icon-admin</div>
</a>
<button
id="open-popup"
class="text-base hover:scale-105 focus:outline-none flex justify-center px-2 py-1 cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border border-r-0 duration-200 ease-in-out border-teal-600 transition"
>
<div class="flex leading-5">Icon data</div>
</button>

<button
onclick="openModal()"
class="text-base rounded-l-none hover:scale-105 focus:outline-none flex justify-center px-2 py-1 rounded cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition"
>
<div class="flex leading-5">New Icon</div>
</button>
</div>

<h1 class="mhmm mvm">
<span class="fgc1">Font Name:</span> font-icon-admin-mm
<small class="fgc1"><span id="totalIconCount"></span></small>
</h1>

</div>


<div id="popup" class="popup">
<div class="popup-content">
<i class="close-btn mm-1 times"></i>
<p
class="text-gray-600 font-bold"
style="
  font-size: 1.5rem;
  margin-top: 14px;
  border-bottom: 1px solid #e8e8e8;
"
>
Icon Data <span id="icon-count"></span>
</p>
<pre id="file-content"></pre>

<button
id="copy-btn"
class="mt-3 text-base focus:outline-none flex justify-center px-4 py-2 rounded cursor-pointer bg-white text-teal-700 border border-teal-600"
>
<div class="flex leading-5 gap-1 item-center">
  <i class="ad-mm mm-1 copy"></i> Sao chép
</div>
</button>
</div>
</div>

<div class="toast-container" id="toastContainer"></div>
<!-- Thẻ overlay và modal -->
<div class="overlay" id="overlay">
<div class="modal">
<strong
class="text-gray-600"
style="
  font-size: 1.5rem;
  margin-top: 14px;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 1rem;
"
>Icon mới</strong
>
<div class="icon-container" id="newIconContainer"></div>
<i onclick="closeModal()" class="close-btn mm-1 times"></i>
</div>
</div>

        `;
  }
}

customElements.define("my-header", Header);
