const hambugerButton = document.getElementById('hambuger')
const navList = document.getElementById('nav-list')

function toggleButton(argument) {
	navList.classList.toggle('show')
}
hambugerButton.addEventtListener('click',toggleButton)