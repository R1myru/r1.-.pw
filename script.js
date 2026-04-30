document.addEventListener('DOMContentLoaded', () => {
    const sticker = document.getElementById('sticker');
    const overlay = document.getElementById('stickerOverlay');
    const body = document.body;

    const toggleSticker = (show) => {
        if (show) {
            overlay.classList.add('active');
            body.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('active');
            body.style.overflow = 'auto';
        }
    };

    sticker.addEventListener('click', () => toggleSticker(true));
    overlay.addEventListener('click', () => toggleSticker(false));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleSticker(false);
    });
});