const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

 weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value

    messageOne.textContent = ''
    messageTwo.textContent = 'Loading...'

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log('Error: city not found')
            messageTwo.textContent = 'Error'
        } else {
            console.log(data)
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecastData
        }
    })
})
 })