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
        var newIcons = ["mm-fire","mm-fire-solid","mm-home","mm-home-solid"
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
	window.onload = function () {
		countTotalIcon();
		openModal();
	}
	