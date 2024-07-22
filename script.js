// 팝업 열기 및 닫기 함수
function openPopup() {
    document.getElementById('salePopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('salePopup').style.display = 'none';
}

// 카운트다운 설정
function startCountdown() {
    const countdownDate = new Date('2024-07-26T23:59:59').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText =
            `${hours}h ${minutes}m ${seconds}s`;

        document.getElementById('smallCountdown').innerText =
            `${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerText = "EXPIRED";
            document.getElementById('smallCountdown').innerText = "EXPIRED";
        }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
}

// 페이지 로드 시 팝업 열기 및 카운트다운 시작
window.onload = function() {
    openPopup();
    startCountdown();
};
