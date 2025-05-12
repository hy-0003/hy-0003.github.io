function toggleSections() {
            const infoAndScoreSection = document.getElementById('imageSection');
            const imageSection = document.getElementById('imageSection');
            const button = document.querySelector('button');

            if (imageSection.style.display === 'none') {
                // 隐藏个人信息和成绩区域
                infoAndScoreSection.style.display = 'none';
                // 显示图片区域
                imageSection.style.display = 'block';
                button.textContent = '点击返回信息';
            } else {
                // 显示个人信息和成绩区域
                infoAndScoreSection.style.display = 'block';
                // 隐藏图片区域
                imageSection.style.display = 'none';
                button.textContent = '点击查看图片';
            }
        }

