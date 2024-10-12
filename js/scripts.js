let totalPoints = 0;
const events = [];

function addEvent() {
    const eventNameInput = document.getElementById('event-name-input');
    const eventPointsInput = document.getElementById('event-points-input');
    const eventList = document.getElementById('event-list');
    const eventName = eventNameInput.value.trim();
    const eventPoints = parseInt(eventPointsInput.value);

    if (eventName !== "" && !isNaN(eventPoints)) {
        events.push({ name: eventName, points: eventPoints });
        const li = document.createElement('li');
        li.textContent = `${eventName}: ${eventPoints} points`;
        eventList.appendChild(li);

        totalPoints += eventPoints;
        document.getElementById('total-points').textContent = totalPoints;

        eventNameInput.value = "";
        eventPointsInput.value = "";
    }
}
