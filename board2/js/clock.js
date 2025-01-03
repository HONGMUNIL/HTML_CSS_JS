function clockRun() {
    const ipadClock = document.querySelector(".ipad-clock");
    setInterval(() => {
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const ampm = nowHours >= 12 ? '오후' : '오전';
        const displayHours = nowHours % 12 || 12;
        const year = now.getFullYear();
        const month = now.getMonth() + 1; 
        const day = now.getDate();
        
        const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        const weekday = weekdays[now.getDay()];

        const nowClockText = `${ampm} ${displayHours}:${nowMinutes} &emsp; ${month}월 ${day}일 ${weekday}`;
        
        ipadClock.innerHTML = nowClockText;
    }, 1000);
}

clockRun();