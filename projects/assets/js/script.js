

//subscribe
function subscribe() {
  window.open('https://www.youtube.com/@dream_mlbb');
}

//-------------------------------------------------------------------Needs More

//Add new skins in here
function backToMainPanel() {
  var todoPanels = [
    document.querySelector('.AldousXSaitama'),
    document.querySelector('.AlucardXTanjiro')
  ];

  // Loop through each todoPanel element
  todoPanels.forEach(function(panel) {
    panel.style.display = 'none'; // Set display to none for each panel
  });

  selectionPanel.style.display = 'flex'; 
  puttingCreditsToBack(); 
}

//-------------------------------------------------------------------Needs More
//selection selecting what skin
function openAldousXSaitamaTodo() {
  window.location.href = "https://LinkSysFree.github.io/AldousXSaitama/";
}

function openAlucardXTanjiro() {
  window.location.href = "https://LinkSysFree.github.io/AlucardXTanjiro/";
}

function openPaquitoToKOFTodo(){
  window.location.href = "https://LinkSysFree.github.io/PaquitoToKOF/";
}

function openYinXErenTodo(){
  window.location.href = "https://LinkSysFree.github.io/YinXEren/";
}

function openMartisXLeviTodo(){
  window.location.href = "https://LinkSysFree.github.io/MartisSpXLevi/";
}

function openChouToIoriTodo(){
  window.location.href = "https://LinkSysFree.github.io/ChouToIori/";
}

function openLanceToZenitsuTodo(){
  window.location.href = "https://LinkSysFree.github.io/LanceToZenitsu/";
}

function openSunToNarutoTodo(){
  window.location.href = "https://LinkSysFree.github.io/SunToNaruto/";
}

function openAldousToStarStreamTodo(){
  window.location.href = "https://LinkSysFree.github.io/AldousXStarStream/";
}

function openUltraLOLMap(){
  window.location.href = "https://LinkSysFree.github.io/UltraLOLMap/";
}

function openXavierXGojo(){
  window.location.href = "https://LinkSysFree.github.io/XavierXGojo/";
}

//subscribe
function subscribe() {
  window.open('https://www.youtube.com/@dream_mlbb');
}

//-------------------------------------------------------------------Needs More

//Add new skins in here
function backToMainPanel() {
  var todoPanels = [
    document.querySelector('.AldousXSaitama'),
    document.querySelector('.AlucardXTanjiro')
  ];

  // Loop through each todoPanel element
  todoPanels.forEach(function(panel) {
    panel.style.display = 'none'; // Set display to none for each panel
  });

  selectionPanel.style.display = 'flex'; 
  puttingCreditsToBack(); 
}

//**Search Skin Scripts Skins */
function searchSkins() {
  const searchInput = document.getElementById('searchInput');
  const displaySkins = document.querySelectorAll('.display_skin');
  const searchTerm = searchInput.value.toLowerCase();
  let resultsFound = false;

  displaySkins.forEach(skin => {
    const skinName = skin.querySelector('skin_name').textContent.toLowerCase();
    if (skinName.includes(searchTerm)) {
      skin.style.display = 'flex';
      highlightMatch(skin.querySelector('skin_name'), searchTerm);
      resultsFound = true;
    } else {
      skin.style.display = 'none';
      removeHighlight(skin.querySelector('skin_name'));
    }
  });

  if (!resultsFound) {
    showNoResults();
  } else {
    hideNoResults();
  }
}

function highlightMatch(element, term) {
  const innerHTML = element.textContent;
  const index = innerHTML.toLowerCase().indexOf(term);
  if (index >= 0) {
    element.innerHTML = innerHTML.substring(0, index) +
                        "<span class='highlight'>" +
                        innerHTML.substring(index, index + term.length) +
                        "</span>" +
                        innerHTML.substring(index + term.length);
  }
}

function removeHighlight(element) {
  element.innerHTML = element.textContent;
}

function showNoResults() {
    document.getElementById('noresults').style.display = 'block';
}

function hideNoResults() {
  const noResults = document.getElementById('noResults');
  if (noResults) {
    noResults.style.display = 'none';
  }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.querySelector('button');

  searchButton.addEventListener('click', searchSkins);
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      searchSkins();
    }
  });
});
