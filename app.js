document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('tbody');
    const monthlyRadio = document.getElementById('monthly');
    const yearlyRadio = document.getElementById('yearly');
    const highlighter = document.querySelector('.highlighter');

    // Sample data for plans (you can replace this with your actual plan data)
    const monthlyPlans = [
        { name: 'Monthly price', price: '$10', videoQuality: 'Good, 480p', resolution: '480p', devices: 'Phone' },
        { name: 'Video quality', price: '$22', videoQuality: 'Good, 720p', resolution: '720p', devices: 'Phone+Tablet' },
        { name: 'Resolution', price: '$35', videoQuality: 'Better, 1080p', resolution: '1080p', devices: 'Phone+Tablet+Computer' },
        { name: 'Devices you can use to watch', price: '$40', videoQuality: 'Best, Ultra HD', resolution: 'Ultra HD', devices: 'Phone+Tablet+Computer+TV' }
    ];

    const yearlyPlans = [
        { name: 'Monthly price', price: '$7', videoQuality: 'Good, 480p', resolution: '480p', devices: 'Phone' },
        { name: 'Video quality', price: '$17', videoQuality: 'Good, 720p', resolution: '720p', devices: 'Phone+Tablet' },
        { name: 'Resolution', price: '$29', videoQuality: 'Better, 1080p', resolution: '1080p', devices: 'Phone+Tablet+Computer' },
        { name: 'Devices you can use to watch', price: '$35', videoQuality: 'Best,Ultra HD', resolution: 'Ultra HD', devices: 'Phone+Tablet+Computer+TV' }
    ];

    // Function to display plans based on billing cycle
    const displayPlans = (isYearly) => {
        const selectedPlans = isYearly ? yearlyPlans : monthlyPlans;

        tableBody.innerHTML = '';

        for (const plan of selectedPlans) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${plan.name}</td>
                <td>${plan.price}</td>
                <td>${plan.videoQuality}</td>
                <td>${plan.resolution}</td>
                <td>${plan.devices}</td>
            `;
            tableBody.appendChild(row);
        }
    };

    // Initial display of plans (monthly by default)
    displayPlans(false);

    // Toggle event listeners
    monthlyRadio.addEventListener('change', () => {
        displayPlans(false);
        highlighter.style.left = '0';
    });

    yearlyRadio.addEventListener('change', () => {
        displayPlans(true);
        highlighter.style.left = '50%';
    });
});


// Cancel-button

document.addEventListener('DOMContentLoaded', function () {
    const cancelBtn = document.getElementById('cancelBtn');

    cancelBtn.addEventListener('click', function () {
        window.location.href = 'cancel.html';
    });
});

