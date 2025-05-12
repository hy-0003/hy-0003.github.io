function loadPage(linkElement, pageUrl) {
    // 获取 iframe 元素
    const iframe = document.getElementById('contentFrame');
    // 动态修改 iframe 的 src 属性
    iframe.src = pageUrl;
    // 移除所有链接的 active 类
    const links = document.querySelectorAll('li a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    // 给当前点击的链接添加 active 类
    linkElement.classList.add('active');
}


//home.html
function navigateToStudy() {
    // 模拟点击学习成绩链接
    const parentDocument = window.parent.document;
    const studyLink = Array.from(parentDocument.querySelectorAll('li a')).find(link => 
        link.textContent === '学习成绩'
    );
    if (studyLink) {
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        studyLink.dispatchEvent(clickEvent);
    }
}