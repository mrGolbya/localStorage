
area.value = localStorage.getItem('text')
area.addEventListener('input',()=>{
  localStorage.setItem('text',area.value)
})

