const sidebar = document.getElementById('sidebar');
function toggleSidebar() {
  sidebar.classList.toggle('hidden');
}
/*
   DASHBOARD STATS DATA
*/
const stats = [
  {
    title: "Mood Average",
    value: "8.4",
    growth: "+12% this week",
    color: "text-green-400",
    icon: "assets/icons/mood.png"
  },
  {
    title: "Wellness Streak",
    value: "12",
    growth: "days active",
    color: "text-orange-400",
    icon: "assets/icons/streak.png"
  },
  {
    title: "Journal Entries",
    value: "28",
    growth: "reflections written",
    color: "text-pink-400",
    icon: "assets/icons/journal.png"
  },
  {
    title: "AI Sessions",
    value: "54",
    growth: "supportive chats",
    color: "text-cyan-400",
    icon: "assets/icons/chat.png"
  },
  {
    title: "Assessments",
    value: "6",
    growth: "completed",
    color: "text-purple-400",
    icon: "assets/icons/assessment.png"
  },
  {
    title: "Mood Check-ins",
    value: "44",
    growth: "entries logged",
    color: "text-green-400",
    icon: "assets/icons/checkin.png"
  }
];
/*
   RENDER STAT CARDS
*/
const statsGrid = document.getElementById('statsGrid');
function renderStats() {
  statsGrid.innerHTML = "";
  stats.forEach((card) => {
    statsGrid.innerHTML += `
      <div class="stat-card">
        <img src="${card.icon}"
             class="w-10 h-10 mb-4"/>
        <p class="card-title">
          ${card.title}
        </p>
        <h3 class="card-value">
          ${card.value}
        </h3>
        <p class="card-growth ${card.color}">
          ${card.growth}
        </p>
      </div>
    `;
  });
}
renderStats();
/*
   CHART.JS
*/
const ctx = document.getElementById('moodChart');
let moodChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Mood Score',
      data: [6,7,5,8,9,7,8],
      borderColor: '#8B5CF6',
      backgroundColor: 'rgba(139,92,246,0.2)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#8B5CF6',
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      y: {
        ticks: {
          color: 'white'
        }
      },
      x: {
        ticks: {
          color: 'white'
        }
      }
    }
  }
});
/*
   UPDATE CHART
*/
function updateChart(days) {
  if(days === '7d') {
    moodChart.data.datasets[0].data =
    [6,7,5,8,9,7,8];
  }
  else if(days === '14d') {
    moodChart.data.datasets[0].data =
    [5,6,7,6,8,7,8];
  }
  else {
    moodChart.data.datasets[0].data =
    [4,5,6,7,6,7,8];
  }
  moodChart.update();
}
/*
   RECENT MOOD ENTRIES
*/
const moodEntries = [
  {
    date: "02 June",
    mood: "😊 Happy",
    stress: "3/10",
    sleep: "8/10",
    energy: "9/10"
  },
  {
    date: "01 June",
    mood: "😌 Calm",
    stress: "4/10",
    sleep: "7/10",
    energy: "8/10"
  }
];
/*
   RENDER TABLE
*/
const tableBody =
document.getElementById('moodTableBody');
function renderTable() {
  if(moodEntries.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5"
            class="text-center py-10">
          <img src="assets/empty-mood.png"
               class="w-40 mx-auto mb-4"/>
          <p class="text-white/50">
            No mood entries found.
          </p>
        </td>
      </tr>
    `;
    return;
  }
  tableBody.innerHTML = "";
  moodEntries.forEach((entry) => {
    tableBody.innerHTML += `
      <tr class="border-b border-white/5">
        <td class="py-4">${entry.date}</td>
        <td class="py-4">${entry.mood}</td>
        <td class="py-4">${entry.stress}</td>
        <td class="py-4">${entry.sleep}</td>
        <td class="py-4">${entry.energy}</td>
      </tr>
    `;
  });
}
renderTable();
/*
   HANDLE MOOD SUBMISSION
*/
function handleMoodSubmit() {
  const mood =
  document.getElementById('mood').value;
  const stress =
  document.getElementById('stress').value;
  const sleep =
  document.getElementById('sleep').value;
  const energy =
  document.getElementById('energy').value;
  const newEntry = {
    date: new Date().toLocaleDateString(),
    mood,
    stress: `${stress}/10`,
    sleep: `${sleep}/10`,
    energy: `${energy}/10`
  };
  saveMoodEntry(newEntry);
  moodEntries.unshift(newEntry);
  renderTable();
  alert("Mood saved successfully!");
}
/*
   DYNAMIC GREETING
*/
const greeting =
document.getElementById('greeting');
const currentHour =
new Date().getHours();
if(currentHour < 12) {
  greeting.innerText =
  "Good Morning, Mrudu 👋";
}
else if(currentHour < 18) {
  greeting.innerText =
  "Good Afternoon, Mrudu 👋";
}
else {
  greeting.innerText =
  "Good Evening, Mrudu 👋";
}
