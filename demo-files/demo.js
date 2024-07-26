//Font Icon Test
if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

(function() {
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');
    function updateTest() {
        testDrive.innerHTML = testText.value || String.fromCharCode(160);
        if (window.icomoonLiga) {
            window.icomoonLiga(testDrive);
        }
    }
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    updateSize();
}());
// Total icon
    function countTotalIcon() {
        var iconElements = document.querySelectorAll('.mls');
        var totalCount = iconElements.length;

        var totalIconCountElement = document.getElementById('totalIconCount');
        totalIconCountElement.innerHTML = '(Icons: ' + totalCount + ')';
    }

//Live Search
    function searchIconByName(iconName) {

        var iconElements = document.querySelectorAll('.mls');

        iconElements.forEach(function (element) {
            var iconText = element.textContent.toLowerCase();
            var parentGlyph = element.closest('.glyph');

            if (iconText.includes(iconName.toLowerCase())) {
                parentGlyph.classList.remove('hidden-true');
            } else {
                parentGlyph.classList.add('hidden-true');
            }
        });
    }

//toast
// Sự kiện click trên pseudo-element :before
    document.addEventListener('click', function (event) {
        var target = event.target;

        // Kiểm tra xem phần tử được click có class mls hay không
        if (target.classList.contains('mls')) {
            copyIconName(target.textContent.trim());
        }
    });
	
	function copyIconName(iconName) {
        // Tạo một thẻ input tạm thời để sao chép giá trị vào clipboard
        var tempInput = document.createElement('input');
        tempInput.value = iconName;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Hiển thị toast
        var toastContainer = document.getElementById('toastContainer');
        toastContainer.innerHTML = 'Đã copy: ' + iconName;
        toastContainer.classList.add('show');

        setTimeout(function () {
            toastContainer.classList.remove('show');
        }, 4000);
    }
	
		// Mở modal và hiển thị danh sách icon mới
		function openModal() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';

        // Danh sách icon mới
        var newIcons = ["mm-direction-solid","mm-clock-solid","mm-box-solid", "mm-locked-solid", "mm-analysis-1-solid","mm-analysis-solid", "mm-copy-solid","mm-phone-1-solid", "mm-phone-solid", "mm-fullscreen-1", "mm-fullscreen","mm-technicians","mm-tour-guide","mm-more-v-1","mm-avatar","mm-avatar-solid","mm-shopping-bag","mm-shopping-bag-solid","mm-checklist","mm-checklist-solid","mm-bell","mm-bell-solid","mm-chats-1-smile","mm-chats-1-smile-solid","mm-home","mm-home-solid","mm-post-add","mm-car-plane","mm-chats-1-smile","mm-chats-dots-thin","mm-chats-2","mm-chats-thin","mm-chats-1","mm-chats","mm-more-h-1","mm-check-list-file-thin","mm-feedback2","mm-clipboard-list-check","mm-shopping-cart-3","mm-shopping-cart-2","mm-shopping-cart-thin","mm-shopping-cart","mm-shopping-cart-1"
		];

        // Hiển thị icon mới trong modal
        var newIconContainer = document.getElementById('newIconContainer');
        newIconContainer.innerHTML = '';

        newIcons.forEach(function (iconClass) {
            var iconElement = document.createElement('div');
            iconElement.className = 'new-icon';
            iconElement.innerHTML = '<i class="'+ 'icon-' + iconClass + '"></i>' + '<p>' + iconClass + '</p>';
            iconElement.setAttribute('onclick', 'copyIconName("' + iconClass + '")');
            newIconContainer.appendChild(iconElement);
        });
    }

    function closeModal() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }

     // Close the popup if the user clicks outside of the popup content
     window.addEventListener('click', function(event) {
        if (event.target == overlay) {
            overlay.style.display = 'none';
        }
    });
	
	window.onload = function () {
		countTotalIcon();
		openModal();
	}
	



	
	 // Get elements
        const popup = document.getElementById('popup');
        const openPopupBtn = document.getElementById('open-popup');
        const closeBtn = document.getElementsByClassName('close-btn')[0];
        const fileContent = document.getElementById('file-content');
        const copyBtn = document.getElementById('copy-btn');

        // Function to fetch and display the file content
        async function displayFileContent() {
            try {
                const response = await fetch('iconData.txt');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                fileContent.textContent = text;
            } catch (error) {
                fileContent.textContent = `Error: ${error.message}`;
            }
        }

        // Function to open the popup
        function openPopup() {
            displayFileContent();
            popup.style.display = 'flex';
        }

        // Function to close the popup
        function closePopup() {
            popup.style.display = 'none';
        }

        // Function to copy the content to clipboard
        function copyContent() {
            const text = fileContent.textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert('Đã sao chép');
            }).catch(err => {
                alert('Failed to copy content: ', err);
            });    
        }

        // Event listeners
        openPopupBtn.addEventListener('click', openPopup);
        closeBtn.addEventListener('click', closePopup);
        copyBtn.addEventListener('click', copyContent);

        // Close the popup if the user clicks outside of the popup content
        window.addEventListener('click', function(event) {
            if (event.target == popup) {
                popup.style.display = 'none';
            }
        });