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
   MOOD TREND API
*/
app.get('/api/moods/trend', (req, res) => {
  res.json({
    labels: [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ],
    values: [
      6,
      7,
      5,
      8,
      9,
      7,
      8
    ]
  });
});
/*
   ACTIVITY HEATMAP API
*/
app.get('/api/activity/heatmap', (req, res) => {
  res.json([
    1, 2, 0, 3, 4, 1, 2,
    3, 2, 1, 0, 4, 3, 2,
    1, 2, 4, 3, 0, 1, 2,
    4, 3, 2, 1, 2, 3, 4,
    1, 0, 2, 3, 4
  ]);
});
/*
   SERVER
*/
app.listen(5000, () => {
  console.log(
    'Server running on port 5000'
  );
});
