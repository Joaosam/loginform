function displayPassword() {
  var password = document.getElementById('password')
  if (password.type == 'password') {
    password.type = 'text'
    password.style.backgroundImage = "url('images/lock-focus.svg')"
    password.style.backgroundRepeat = 'no-repeat'
    password.style.backgroundPosition = '5px'
    password.style.paddingLeft = '30px'
    password.style.border = '2px solid #ffc632'
    password.style.outline = 'none'
  } else {
    password.type = 'password'
    password.style.backgroundImage = ''
    password.style.backgroundPosition = '5px'
    password.style.paddingLeft = '30px'
    password.style.border = ''
    password.style.outline = 'none'
  }
}
