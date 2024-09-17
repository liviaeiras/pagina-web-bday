document.querySelector('.surprise-button').addEventListener('click', function() {
    const hiddenPhoto = document.getElementById('hiddenPhoto');
    hiddenPhoto.style.display = hiddenPhoto.style.display === 'block' ? 'none' : 'block';
});
