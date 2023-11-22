// List of words
const words = [
    { word: 'hangman', hints: ['game', 'challenge'], category: 'game' },
    { word: 'programming', hints: ['coding', 'development'], category: 'technology' },
    { word: 'elephant', hints: ['animal', 'mammal'], category: 'nature' },
    { word: 'pizza', hints: ['food', 'italian'], category: 'cuisine' },
    { word: 'guitar', hints: ['music', 'instrument'], category: 'entertainment' },
    { word: 'beach', hints: ['destination', 'sun'], category: 'travel' },
    { word: 'ocean', hints: ['water', 'waves'], category: 'nature' },
    { word: 'computer', hints: ['device', 'technology'], category: 'technology' },
    { word: 'jazz', hints: ['music', 'genre'], category: 'entertainment' },
    { word: 'mountain', hints: ['nature', 'climbing'], category: 'travel' },
    { word: 'python', hints: ['snake', 'programming language'], category: 'technology' },
    { word: 'movie', hints: ['film', 'cinema'], category: 'entertainment' },
    { word: 'basketball', hints: ['sport', 'hoop'], category: 'game' },
    { word: 'moon', hints: ['celestial', 'night sky'], category: 'nature' },
    { word: 'coffee', hints: ['beverage', 'caffeine'], category: 'cuisine' },
    { word: 'novel', hints: ['book', 'literature'], category: 'entertainment' },
    { word: 'island', hints: ['landform', 'tropical'], category: 'travel' },
    { word: 'robot', hints: ['machine', 'automation'], category: 'technology' },
    { word: 'puzzle', hints: ['game', 'challenge'], category: 'entertainment' },
    { word: 'forest', hints: ['nature', 'trees'], category: 'travel' },
    { word: 'sunset', hints: ['nature', 'evening sky'], category: 'travel' },
    { word: 'chemistry', hints: ['science', 'elements'], category: 'education' },
    { word: 'soccer', hints: ['sport', 'goal'], category: 'game' },
    { word: 'fireworks', hints: ['celebration', 'explosion'], category: 'entertainment' },
    { word: 'garden', hints: ['nature', 'flowers'], category: 'home' },
    { word: 'cloud', hints: ['weather', 'sky'], category: 'nature' },
    { word: 'keyboard', hints: ['instrument', 'typing'], category: 'technology' },
    { word: 'dessert', hints: ['food', 'sweet'], category: 'cuisine' },
    { word: 'history', hints: ['subject', 'past'], category: 'education' },
    { word: 'camera', hints: ['photography', 'device'], category: 'technology' },
    { word: 'unicorn', hints: ['mythical', 'fantasy'], category: 'fiction' },
    { word: 'aviation', hints: ['flight', 'airplane'], category: 'technology' },
    { word: 'architect', hints: ['profession', 'design'], category: 'career' },
    { word: 'cactus', hints: ['plant', 'desert'], category: 'nature' },
    { word: 'detective', hints: ['investigator', 'mystery'], category: 'profession' },
    { word: 'energy', hints: ['power', 'source'], category: 'science' },
    { word: 'glacier', hints: ['ice', 'mountain'], category: 'nature' },
    { word: 'karaoke', hints: ['music', 'singing'], category: 'entertainment' },
    { word: 'penguin', hints: ['bird', 'Antarctica'], category: 'nature' },
    { word: 'rocket', hints: ['space', 'launch'], category: 'technology' },
    { word: 'marathon', hints: ['race', 'endurance'], category: 'sport' },
  { word: 'whale', hints: ['marine mammal', 'ocean'], category: 'nature' },
  { word: 'symphony', hints: ['music', 'orchestra'], category: 'entertainment' },
  { word: 'continent', hints: ['landmass', 'geography'], category: 'geography' },
  { word: 'quasar', hints: ['astronomy', 'celestial'], category: 'science' },
  { word: 'basket', hints: ['container', 'storage'], category: 'home' },
  { word: 'compass', hints: ['navigation', 'direction'], category: 'tool' },
  { word: 'elephant', hints: ['animal', 'mammal'], category: 'nature' },
  { word: 'harmony', hints: ['music', 'balance'], category: 'entertainment' },
  { word: 'jungle', hints: ['forest', 'wildlife'], category: 'nature' },
  { word: 'algorithm', hints: ['coding', 'problem-solving'], category: 'technology' },
  { word: 'ballet', hints: ['dance', 'performance'], category: 'entertainment' },
  { word: 'zenith', hints: ['peak', 'highest point'], category: 'nature' },
  { word: 'alchemy', hints: ['ancient', 'transformation'], category: 'science' },
  { word: 'cliff', hints: ['rock', 'height'], category: 'nature' },
  { word: 'diamond', hints: ['precious stone', 'jewelry'], category: 'mineral' },
  { word: 'monument', hints: ['structure', 'memorial'], category: 'architecture' },
  { word: 'rhythm', hints: ['music', 'pattern'], category: 'entertainment' },
  { word: 'horizon', hints: ['skyline', 'distance'], category: 'nature' },
  { word: 'galaxy', hints: ['astronomy', 'space'], category: 'science' },
  { word: 'isolate', hints: ['separate', 'alone'], category: 'emotion' },
  { word: 'puzzle', hints: ['game', 'challenge'], category: 'entertainment' },
  { word: 'flute', hints: ['instrument', 'music'], category: 'entertainment' },
  { word: 'quill', hints: ['feather', 'writing'], category: 'tool' },
  { word: 'crystal', hints: ['mineral', 'transparency'], category: 'nature' },
  { word: 'rhapsody', hints: ['music', 'expressive'], category: 'entertainment' },
  { word: 'majestic', hints: ['grand', 'impressive'], category: 'nature' },
  { word: 'labyrinth', hints: ['maze', 'confusing'], category: 'game' },
  { word: 'illuminate', hints: ['light', 'brighten'], category: 'verb' },
  { word: 'tapestry', hints: ['art', 'fabric'], category: 'craft' },
  { word: 'stellar', hints: ['celestial', 'outstanding'], category: 'adjective' },
  { word: 'magnetic', hints: ['attraction', 'force'], category: 'science' },
  { word: 'cascade', hints: ['waterfall', 'flow'], category: 'nature' },
  { word: 'serenity', hints: ['peaceful', 'calm'], category: 'emotion' },
  { word: 'cosmic', hints: ['space', 'universe'], category: 'adjective' },
  { word: 'zen', hints: ['calm', 'meditation'], category: 'philosophy' },
  { word: 'spectacle', hints: ['show', 'display'], category: 'entertainment' },
  { word: 'volcano', hints: ['eruption', 'lava'], category: 'nature' },
  { word: 'tornado', hints: ['storm', 'cyclone'], category: 'nature' },
  { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
  { word: 'equinox', hints: ['celestial', 'day and night equal'], category: 'astronomy' },
  { word: 'nostalgia', hints: ['sentimental', 'past'], category: 'emotion' },
  { word: 'cathedral', hints: ['church', 'architecture'], category: 'building' },
  { word: 'solitude', hints: ['loneliness', 'seclusion'], category: 'emotion' },
  { word: 'harbor', hints: ['port', 'dock'], category: 'location' },
  { word: 'infinity', hints: ['endless', 'limitless'], category: 'concept' },
    // Previous words...
    { word: 'twilight', hints: ['dusk', 'evening'], category: 'nature' },
    { word: 'alchemy', hints: ['ancient', 'transformation'], category: 'science' },
    { word: 'crimson', hints: ['red', 'color'], category: 'color' },
    { word: 'serendipity', hints: ['fortunate', 'unexpected'], category: 'emotion' },
    { word: 'chalice', hints: ['cup', 'vessel'], category: 'object' },
    { word: 'lunar', hints: ['moon', 'celestial'], category: 'space' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'soothe', hints: ['calm', 'comfort'], category: 'verb' },
    { word: 'resonate', hints: ['vibrate', 'echo'], category: 'verb' },
    { word: 'mystique', hints: ['enigma', 'charm'], category: 'emotion' },
    { word: 'labyrinth', hints: ['maze', 'confusing'], category: 'game' },
    { word: 'stellar', hints: ['celestial', 'outstanding'], category: 'adjective' },
    { word: 'magnetic', hints: ['attraction', 'force'], category: 'science' },
    { word: 'cascade', hints: ['waterfall', 'flow'], category: 'nature' },
    { word: 'serenity', hints: ['peaceful', 'calm'], category: 'emotion' },
    { word: 'cosmic', hints: ['space', 'universe'], category: 'adjective' },
    { word: 'zen', hints: ['calm', 'meditation'], category: 'philosophy' },
    { word: 'spectacle', hints: ['show', 'display'], category: 'entertainment' },
    { word: 'volcano', hints: ['eruption', 'lava'], category: 'nature' },
    { word: 'tornado', hints: ['storm', 'cyclone'], category: 'nature' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'equinox', hints: ['celestial', 'day and night equal'], category: 'astronomy' },
    { word: 'nostalgia', hints: ['sentimental', 'past'], category: 'emotion' },
    { word: 'cathedral', hints: ['church', 'architecture'], category: 'building' },
    { word: 'solitude', hints: ['loneliness', 'seclusion'], category: 'emotion' },
    { word: 'harbor', hints: ['port', 'dock'], category: 'location' },
    { word: 'infinity', hints: ['endless', 'limitless'], category: 'concept' },
    { word: 'twilight', hints: ['dusk', 'evening'], category: 'nature' },
    { word: 'silhouette', hints: ['outline', 'shadow'], category: 'art' },
    { word: 'oblivion', hints: ['forgetfulness', 'nothingness'], category: 'concept' },
    { word: 'alchemy', hints: ['ancient', 'transformation'], category: 'science' },
    { word: 'crimson', hints: ['red', 'color'], category: 'color' },
    { word: 'serendipity', hints: ['fortunate', 'unexpected'], category: 'emotion' },
    { word: 'chalice', hints: ['cup', 'vessel'], category: 'object' },
    { word: 'lunar', hints: ['moon', 'celestial'], category: 'space' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'soothe', hints: ['calm', 'comfort'], category: 'verb' },
    { word: 'resonate', hints: ['vibrate', 'echo'], category: 'verb' },
    { word: 'mystique', hints: ['enigma', 'charm'], category: 'emotion' },
    { word: 'labyrinth', hints: ['maze', 'confusing'], category: 'game' },
    { word: 'stellar', hints: ['celestial', 'outstanding'], category: 'adjective' },
    { word: 'magnetic', hints: ['attraction', 'force'], category: 'science' },
    { word: 'cascade', hints: ['waterfall', 'flow'], category: 'nature' },
    { word: 'serenity', hints: ['peaceful', 'calm'], category: 'emotion' },
    { word: 'cosmic', hints: ['space', 'universe'], category: 'adjective' },
    { word: 'zen', hints: ['calm', 'meditation'], category: 'philosophy' },
    { word: 'spectacle', hints: ['show', 'display'], category: 'entertainment' },
    { word: 'volcano', hints: ['eruption', 'lava'], category: 'nature' },
    { word: 'tornado', hints: ['storm', 'cyclone'], category: 'nature' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'equinox', hints: ['celestial', 'day and night equal'], category: 'astronomy' },
    { word: 'nostalgia', hints: ['sentimental', 'past'], category: 'emotion' },
    { word: 'cathedral', hints: ['church', 'architecture'], category: 'building' },
    { word: 'solitude', hints: ['loneliness', 'seclusion'], category: 'emotion' },
    { word: 'harbor', hints: ['port', 'dock'], category: 'location' },
    { word: 'infinity', hints: ['endless', 'limitless'], category: 'concept' },
    { word: 'quintessence', hints: ['purest', 'essence'], category: 'concept' },
    { word: 'melancholy', hints: ['sadness', 'gloom'], category: 'emotion' },
    { word: 'elusive', hints: ['hard to catch', 'mysterious'], category: 'adjective' },
    { word: 'luminary', hints: ['celebrity', 'inspirational'], category: 'person' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    // Previous words...
    { word: 'celestial', hints: ['heavenly', 'cosmic'], category: 'space' },
    { word: 'zenith', hints: ['highest point', 'peak'], category: 'position' },
    { word: 'obfuscate', hints: ['confuse', 'bewilder'], category: 'verb' },
    { word: 'luminous', hints: ['radiant', 'glowing'], category: 'adjective' },
    { word: 'effervescent', hints: ['bubbly', 'lively'], category: 'adjective' },
    { word: 'quasar', hints: ['astronomy', 'cosmic'], category: 'space' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'resplendent', hints: ['shining', 'dazzling'], category: 'adjective' },
    { word: 'quintessence', hints: ['purest', 'essence'], category: 'concept' },
    { word: 'melancholy', hints: ['sadness', 'gloom'], category: 'emotion' },
    { word: 'elusive', hints: ['hard to catch', 'mysterious'], category: 'adjective' },
    { word: 'luminary', hints: ['celebrity', 'inspirational'], category: 'person' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'celestial', hints: ['heavenly', 'cosmic'], category: 'space' },
    { word: 'zenith', hints: ['highest point', 'peak'], category: 'position' },
    { word: 'obfuscate', hints: ['confuse', 'bewilder'], category: 'verb' },
    { word: 'luminous', hints: ['radiant', 'glowing'], category: 'adjective' },
    { word: 'effervescent', hints: ['bubbly', 'lively'], category: 'adjective' },
    { word: 'quasar', hints: ['astronomy', 'cosmic'], category: 'space' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'resplendent', hints: ['shining', 'dazzling'], category: 'adjective' },
    { word: 'quintessence', hints: ['purest', 'essence'], category: 'concept' },
    { word: 'melancholy', hints: ['sadness', 'gloom'], category: 'emotion' },
    { word: 'elusive', hints: ['hard to catch', 'mysterious'], category: 'adjective' },
    { word: 'luminary', hints: ['celebrity', 'inspirational'], category: 'person' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'quintessential', hints: ['typical', 'representative'], category: 'concept' },
    { word: 'nostalgic', hints: ['sentimental', 'longing'], category: 'emotion' },
    { word: 'whimsical', hints: ['playful', 'fanciful'], category: 'adjective' },
    { word: 'efflorescence', hints: ['blooming', 'flourishing'], category: 'nature' },
    { word: 'labyrinthine', hints: ['complex', 'intricate'], category: 'concept' },
    { word: 'mellifluous', hints: ['sweet-sounding', 'harmonious'], category: 'adjective' },
    { word: 'effulgent', hints: ['radiant', 'shining'], category: 'adjective' },
    { word: 'serendipity', hints: ['fortunate', 'pleasant surprise'], category: 'concept' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    // Previous words...
    { word: 'effervescent', hints: ['bubbly', 'lively'], category: 'adjective' },
    { word: 'quasar', hints: ['astronomy', 'cosmic'], category: 'space' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'resplendent', hints: ['shining', 'dazzling'], category: 'adjective' },
    { word: 'quintessence', hints: ['purest', 'essence'], category: 'concept' },
    { word: 'melancholy', hints: ['sadness', 'gloom'], category: 'emotion' },
    { word: 'elusive', hints: ['hard to catch', 'mysterious'], category: 'adjective' },
    { word: 'luminary', hints: ['celebrity', 'inspirational'], category: 'person' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'celestial', hints: ['heavenly', 'cosmic'], category: 'space' },
    { word: 'zenith', hints: ['highest point', 'peak'], category: 'position' },
    { word: 'obfuscate', hints: ['confuse', 'bewilder'], category: 'verb' },
    { word: 'luminous', hints: ['radiant', 'glowing'], category: 'adjective' },
    { word: 'effervescent', hints: ['bubbly', 'lively'], category: 'adjective' },
    { word: 'quasar', hints: ['astronomy', 'cosmic'], category: 'space' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'resplendent', hints: ['shining', 'dazzling'], category: 'adjective' },
    { word: 'quintessence', hints: ['purest', 'essence'], category: 'concept' },
    { word: 'melancholy', hints: ['sadness', 'gloom'], category: 'emotion' },
    { word: 'elusive', hints: ['hard to catch', 'mysterious'], category: 'adjective' },
    { word: 'luminary', hints: ['celebrity', 'inspirational'], category: 'person' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'quintessential', hints: ['typical', 'representative'], category: 'concept' },
    { word: 'nostalgic', hints: ['sentimental', 'longing'], category: 'emotion' },
    { word: 'whimsical', hints: ['playful', 'fanciful'], category: 'adjective' },
    { word: 'efflorescence', hints: ['blooming', 'flourishing'], category: 'nature' },
    { word: 'labyrinthine', hints: ['complex', 'intricate'], category: 'concept' },
    { word: 'mellifluous', hints: ['sweet-sounding', 'harmonious'], category: 'adjective' },
    { word: 'effulgent', hints: ['radiant', 'shining'], category: 'adjective' },
    { word: 'serendipity', hints: ['fortunate', 'pleasant surprise'], category: 'concept' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
    { word: 'quintessential', hints: ['typical', 'representative'], category: 'concept' },
    { word: 'nostalgic', hints: ['sentimental', 'longing'], category: 'emotion' },
    { word: 'whimsical', hints: ['playful', 'fanciful'], category: 'adjective' },
    { word: 'efflorescence', hints: ['blooming', 'flourishing'], category: 'nature' },
    { word: 'labyrinthine', hints: ['complex', 'intricate'], category: 'concept' },
    { word: 'mellifluous', hints: ['sweet-sounding', 'harmonious'], category: 'adjective' },
    { word: 'effulgent', hints: ['radiant', 'shining'], category: 'adjective' },
    { word: 'serendipity', hints: ['fortunate', 'pleasant surprise'], category: 'concept' },
    { word: 'ephemeral', hints: ['transient', 'fleeting'], category: 'adjective' },
    { word: 'tranquil', hints: ['calm', 'peaceful'], category: 'emotion' },
    { word: 'ambiance', hints: ['atmosphere', 'mood'], category: 'concept' },
    { word: 'verdant', hints: ['green', 'lush'], category: 'color' },
    { word: 'ethereal', hints: ['delicate', 'heavenly'], category: 'adjective' },
  ];
  
  function fetchWord() {
    // Select a random word from the list
    return words[Math.floor(Math.random() * words.length)];
  }
  
  let selectedWord;
  let guessedWord;
  let incorrectGuesses;
  const maxIncorrectGuesses = 6;
  
  function displayHints() {
    const hintsContainer = document.getElementById('hints-container');
    hintsContainer.innerHTML = `
      <p>Category: ${selectedWord.category}</p>
      <p>Hints: ${selectedWord.hints.join(', ')}</p>
      <p>Number of letters: ${selectedWord.word.length}</p>
    `;
  }
  
  function displayWord() {
    document.getElementById('word-container').innerText = guessedWord.join(' ');
  }
  
  function displayGuesses() {
    document.getElementById('guess-container').innerHTML = '';
    for (let letter of guessedWord) {
      const button = document.createElement('button');
      button.textContent = letter;
      document.getElementById('guess-container').appendChild(button);
    }
  }
  
  function guessLetter() {
    const inputElement = document.getElementById('letter-input');
    const guessedLetter = inputElement.value.toLowerCase();
  
    if (guessedLetter.length === 1 && /^[a-z]$/.test(guessedLetter)) {
      checkGuess(guessedLetter);
    } else {
      alert('Please enter a valid single letter.');
    }
  
    inputElement.value = ''; // Clear the input after guessing
  }
  
  function checkGuess(letter) {
    if (selectedWord.word.includes(letter)) {
      for (let i = 0; i < selectedWord.word.length; i++) {
        if (selectedWord.word[i] === letter) {
          guessedWord[i] = letter;
        }
      }
  
      displayWord();
      displayGuesses();
      checkGameStatus();
  
      // Highlight correct guess
      const button = document.createElement('button');
      button.textContent = letter;
      button.classList.add('correct');
      document.getElementById('guess-container').appendChild(button);
  
      setTimeout(() => {
        button.remove(); // Remove the highlighted letter after 2 seconds
      }, 2000);
    } else {
      // Highlight incorrect guess
      const button = document.createElement('button');
      button.textContent = letter;
      button.classList.add('wrong');
      document.getElementById('guess-container').appendChild(button);
  
      incorrectGuesses++;
      checkGameStatus();
  
      setTimeout(() => {
        button.remove(); // Remove the highlighted letter after 2 seconds
      }, 2000);
    }
  }
  
  function checkGameStatus() {
    if (guessedWord.join('') === selectedWord.word) {
      alert('Congratulations! You guessed the word.');
      resetGame();
    } else if (incorrectGuesses === maxIncorrectGuesses) {
      alert(`Game Over! The word was "${selectedWord.word}".`);
      resetGame();
    }
  }
  
  function resetGame() {
    selectedWord = fetchWord();
    guessedWord = Array(selectedWord.word.length).fill('_');
    incorrectGuesses = 0;
    displayHints();
    displayWord();
    displayGuesses();
  }
  
  // Initial setup
  resetGame();  