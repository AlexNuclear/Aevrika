var call = document.querySelector('.call')
var modal = document.querySelector('.modal')

var onCallClick = function {
	preventDefault();
	modal.classList.toggle('hidden');
}

call.addEventListener('click', onCallClick)