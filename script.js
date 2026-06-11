// 確保網頁所有元件都載入完成後才執行
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 抓取 HTML 中的任務標籤元素
    const questTag = document.querySelector('.quest-tag');

    // 2. 幫它綁定點擊（Click）事件監聽器
    if (questTag) {
        questTag.addEventListener('click', function() {
            
            // 檢查是否已經點擊過（classList.contains）
            if (!this.classList.contains('is-success')) {
                
                // 幫自己（this）加上成功的 class 樣式
                this.classList.add('is-success');
                
                // 抓取圖標與文字元素
                const icon = document.getElementById('quest-icon');
                const text = document.getElementById('quest-text');
                
                // 原地替換內容與顏色
                if (icon && text) {
                    icon.className = 'fa-solid fa-trophy';
                    icon.style.color = '#ffd700'; 
                    text.innerText = 'Quest Completed! 🏆 獲得 Lizzie 的合作企劃書';
                }
            }
        });
    }
});