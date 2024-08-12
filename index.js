document.getElementById('lightThemeBtn').addEventListener('click', function() {
    console.log("hello lightthemebtn");
    
    document.body.removeAttribute('data-theme');
});

document.getElementById('contrastThemeBtn').addEventListener('click', function() {
    console.log("hello other theme");
    document.body.setAttribute('data-theme', 'altoContraste');
});