const main = document.querySelector('.main');
const audios = document.querySelectorAll('audio');

main.addEventListener('click', (e) => {
	if (e.target.tagName === 'H2') {
		const audio = e.target.nextElementSibling;
		audios.forEach((a) => {
			if (a !== audio) {
				a.pause();
			}
		});
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	}
});
