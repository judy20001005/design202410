 // 選擇需要監聽的元素
 const hiddenDiv = document.querySelector('.scroll-top');

 // 監聽滾動事件
 window.addEventListener('scroll', () => {
     // 如果滾動位置大於 100px，顯示 div
     if (window.scrollY > 100) {
         hiddenDiv.style.display = 'block';
     } else {
         hiddenDiv.style.display = 'none';
     }
 });