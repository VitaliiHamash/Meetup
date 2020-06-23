export const fetchMeetups = () => {
    fetch('http://localhost:7000/api/meetups')
    .then(response => response.json())
}