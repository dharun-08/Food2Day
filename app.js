const togglebar = document.getElementsByClassName('toggle-bar')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]

togglebar.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})

const d = new Date();
let year = d.getFullYear();
document.getElementById("date").innerHTML = year
