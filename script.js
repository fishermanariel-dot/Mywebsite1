const words = [
    { word: "Ability", meaning: "היכולת הפיזית או המנטלית לעשות משהו" }, //
    { word: "To access", meaning: "להגיע או להשתמש במשהו" }, //
    { word: "To accomplish", meaning: "לסיים משהו בהצלחה" }, //
    { word: "To acquire", meaning: "להשיג או לקנות משהו" }, //
    { word: "To adapt", meaning: "להסתגל או לשנות התנהגות למצב חדש" }, //
    { word: "To admire", meaning: "להעריך ולכבד מישהו או משהו" }, //
    { word: "Advantage", meaning: "יתרון; תוצאה מועילה או עוזרת" }, //
    { word: "Aim", meaning: "מטרה; תוצאה שהתוכניות שלך מכוונות אליה" }, //
    { word: "Alarmed", meaning: "מבוהל או מודאג שמשהו רע עלול לקרות" }, //
    { word: "Alibi", meaning: "אליבי; הוכחה שמישהו היה במקום אחר בזמן פשע" } //
];

let currentIndex = 0;

function updateDisplay() {
    const wordDisplay = document.getElementById('word-display');
    const meaningDisplay = document.getElementById('meaning-display');
    const progress = document.getElementById('progress-fill');
    const card = document.getElementById('card');

    card.classList.remove('flipped');
    
    setTimeout(() => {
        wordDisplay.innerText = words[currentIndex].word;
        meaningDisplay.innerText = words[currentIndex].meaning;
        progress.style.width = ((currentIndex + 1) / words.length) * 100 + "%";
    }, 200);
}

function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

function nextWord() {
    if (currentIndex < words.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function prevWord() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

// אתחול ראשוני
updateDisplay();