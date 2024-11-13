// Funkció az idő frissítéséhez
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = timeString;
  }
  
  // Az óra indítása és másodperces frissítés
  setInterval(updateClock, 1000);
  
  // Az óra első frissítése az oldal betöltődésekor
  updateClock();
  