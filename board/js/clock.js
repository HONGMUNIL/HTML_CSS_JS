function clockRun(){
    const phoneClock = document.querySelector(".phone-clock");
    setInterval(() => {
        const now = new Date();
        const noewHours = now.getHours();
        const noewMinutes = now.getMinutes();
        const nowClockText = `${noewHours}:${noewMinutes}`;
        phoneClock.innerHTML = nowClockText;
    }, 1000);
}

clockRun();







