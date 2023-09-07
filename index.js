function updateDateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const utcTime = now.getUTCHours() + ':' + now.getUTCMinutes() + ' UTC';

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

// Call the function to update the date and time initially
updateDateTime();

// Update the date and time every minute
setInterval(updateDateTime, 60000);
