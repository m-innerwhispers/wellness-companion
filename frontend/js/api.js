/* SAVE MOOD ENTRY */
function saveMoodEntry(entry) {
  let moods =
  JSON.parse(localStorage.getItem('moodEntries'))
  || [];
  moods.unshift(entry);
  localStorage.setItem(
    'moodEntries',
    JSON.stringify(moods)
  );
}
/* GET MOOD ENTRIES */
function getMoodEntries() {
  return JSON.parse(
    localStorage.getItem('moodEntries')
  ) || [];
}
