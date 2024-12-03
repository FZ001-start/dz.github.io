// 获取所有滚动到下一页的按钮
const scrollButtons = document.querySelectorAll('.scroll');

// 为每个按钮添加点击事件监听器
scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const currentSection = button.closest('section');
        const nextSection = currentSection.nextElementSibling;

        if (nextSection) {
            // 使用滚动动画平滑滚动到下一页
            window.scrollTo({
                top: nextSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 获取头像图片元素，用于鼠标移入移出效果
const portraitImg = document.querySelector('.portrait img');

// 鼠标移入时切换图片
portraitImg.addEventListener('mousemove', () => {
    portraitImg.src = './end.jpg';
});

// 鼠标移出时切换回原始图片
portraitImg.addEventListener('mouseout', () => {
    portraitImg.src = './start.jpg';
});
window.onload = function() {
    var images = document.getElementsByClassName('image - slide');
    var currentIndex = 0;
    setInterval(function() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }, 2000);
};
