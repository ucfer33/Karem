document.getElementById('giftBox').addEventListener('click', function() {
    const lid = document.querySelector('.lid');
    const gift = document.querySelector('.gift');

    lid.style.transform = 'rotateX(-120deg)';
    gift.style.display = 'flex';
});
