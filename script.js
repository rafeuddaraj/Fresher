// Selector
const customInput = document.getElementById('custom-input')
const startBtn = document.getElementById('start-button')
const endBtn = document.getElementById('end-button')

// behavior

customInput.focus()
let interval

startBtn.addEventListener('click', () => {
    const time = Number(customInput.value)
    if (time) {
        customInput.blur()
        interval = setInterval(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.reload(tabs[0].id);
              });
              i = 1
        }, time * 1000)
    }
})

endBtn.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval)
    }
})