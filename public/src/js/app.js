if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log('service worker registered!')  
    }).catch(err => {
      console.log(err)
    })  
}

// diable default mobile install prompt
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired')
  event.preventDefault();
  deferredPrompt = event
  return false
})

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('This is executed once the timer is done')
  }, 3000)
});

promise.then((text) => {
  console.log(text)
})

console.log('This is executed right after setTimeout()')
