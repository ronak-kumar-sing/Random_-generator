let enterpoint = document.querySelector('#Enter')
let add = document.querySelector('#add')
function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      const { name, email, picture, gender } = data.results[0]
      document.querySelector(
        '#Enter'
      ).innerHTML += `<div class="w-60  bg-zinc-800 rounded-xl p-4 text-white">
          <div class="size-16 bg-zinc-700 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover"  src="${picture.large}" alt="img">
          </div>
          <h1 class="text-2xl font-semibold mt-2">${name.first}</h1>
          <h3 class="text-sm font-semibold opacity-60">${gender}</h3>
          <h3 class="text-sm opacity-40">${email}</h3>
          <p class="text-xs mt-5 font-semibold opacity-80">Lorem ipsum dolor! Rerum tenetur ducimus hic blanditiis provident molestias.</p>
        </div>`
    })
}
add.addEventListener('click', () => {
  fetchUser()
})
