document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const day = now.toLocaleDateString('en-GB', { weekday: 'long' });

        document.getElementById('current-time').textContent = utcTime;
        document.getElementById('current-day').textContent = day;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 60000); // Update every minute
});
