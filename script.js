function showPopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
  
    if (popup.style.display === 'none' || popup.style.display === '') {
      // Show the popup and overlay
      popup.style.display = 'block';
      overlay.style.display = 'block';
    } else {
      // Hide the popup and overlay
      popup.style.display = 'none';
      overlay.style.display = 'none';
    }
  }

  function toggleSettings() {
    const settingsPopup = document.getElementById('settingsPopup');
    settingsPopup.style.display = settingsPopup.style.display === 'none' ? 'block' : 'none';
  }
  
  function changeStyle() {
    const styleLink = document.getElementById('gameStyle');
    styleLink.href = styleLink.href.includes('style.css') ? 'style2.css' : 'style.css';
}
  
  function Website() {
      window.location.href = "https://hussientalha.com"; // Make sure to include the protocol (http:// or https://)
    }