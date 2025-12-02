function toggleWechatNumber() {
            const wechatNumber = document.getElementById('wechatNumber');
            if (wechatNumber.style.display === 'none' || wechatNumber.style.display === '') {
                wechatNumber.style.display = 'block';
            } else {
                wechatNumber.style.display = 'none';
            }
        }