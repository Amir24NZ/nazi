window.addEventListener("load", () => {
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
        Telegram.WebApp.ready();    // آماده شدن اپ تلگرام
        Telegram.WebApp.expand();   // فول‌اسکرین کردن
    }
});
