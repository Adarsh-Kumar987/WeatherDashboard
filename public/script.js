document.getElementById('searchBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) return alert('Please enter a city name.');

  try {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();

    if (data.error) {
      document.getElementById('weatherDisplay').textContent = data.error;
    } else {
      document.getElementById('weatherDisplay').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].main}:</strong> ${data.weather[0].description}</p>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    }
  } catch (err) {
    document.getElementById('weatherDisplay').textContent = 'Error fetching data.';
  }
});