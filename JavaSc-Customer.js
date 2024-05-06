 // Function to show hover info
        function showInfo(element) {
            let hoverInfo = element.querySelector('.hover-info');
            hoverInfo.style.display = 'block';
        }
        
        // Function to hide hover info
        function hideInfo(element) {
            let hoverInfo = element.querySelector('.hover-info');
            hoverInfo.style.display = 'none';
        }

        document.querySelectorAll('.ListRestaurants .Restaurant').forEach(item => {
            let hoverInfo = item.querySelector('.hover-info');
            hoverInfo.style.display = 'none'; 
            
            item.onmouseover = () => {
                showInfo(item);
            };
            
            item.onmouseout = () => {
                hideInfo(item);
            };
        });
	document.addEventListener('DOMContentLoaded', () => {
		// Current Week's Date
		let today = new Date();

		let startOfWeek = new Date(today);
		startOfWeek.setDate(startOfWeek.getDate() - today.getDay());

		let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		let formattedDate = startOfWeek.toLocaleDateString('en-US', options);

		let currentWeekDateElement = document.getElementById('current-week-date');
		currentWeekDateElement.textContent = 'current week date: ' + formattedDate;


		// Button add more
		[...document.querySelectorAll('.ListRestaurants .Restaurant')].slice(3).forEach(item => {
        item.style.display = 'none';
		});

    let loadMoreBtn = document.querySelector('#load-more');
    let currentItem = 3;

    loadMoreBtn.onclick = () => {
        let boxes = [...document.querySelectorAll('.ListRestaurants .Restaurant')];
        for (var i = currentItem; i < currentItem + 3; i++) {
            boxes[i].style.display = 'inline-block';
        }
        currentItem += 3;

        if (currentItem >= boxes.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
});
