/*
Dashboard API
*/
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
/*
   USER PROFILE API
*/
app.get('/api/users/me', (req, res) => {
  res.json({
    name: "Gali Mrudu Nayana",
    role: "Full Stack Development",
    avatar:
    "assets/avatar-mrudu.jpg"
  });
});
/*
   DASHBOARD STATS API
*/
app.get('/api/users/me/stats', (req, res) => {
  res.json({
    moodAverage: 8.4,
    streak: 12,
    journalEntries: 28,
    aiSessions: 54,
    assessments: 6,
    checkins: 44
  });
});
/*
   SERVER
*/
app.listen(5000, () => {
  console.log(
    'Server running on port 5000'
  );
});
