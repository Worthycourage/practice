const toggleswitch=document.querySelector('input[type="checkbox"]')
toggleswitch.addEventListener('click', function(e){
    const {checked}=toggleSwitch;
    document.body.className=toggleSwitch.checked ? 'dark' : ' '
    localStorage.setItem('darkModeEnabled',)
    
})