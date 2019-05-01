const express = require('express');
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {
  'Philip': {category: 'Education', subscribers: '2.3M', upvote: '99%'},
  'Viki': {category: 'Beauty & Fashion', subscribers: '1.9M', upvote: '95%'},
  'Benny': {category: 'Music', subscribers: '1.9M', upvote: '93%'},
};

app.get('/youtuber', (req, res) => {
  const allYoutuber = Object.keys(fakeDatabase); // returns a list of object keys
  console.log('allUsernames is:', allYoutuber);
  res.send(allYoutuber);
});

app.get('/youtuber/:youtuberid', (req, res) => {
  const nameToLookup = req.params.youtuberid; // matches ':userid' above
  const val = fakeDatabase[nameToLookup];
  console.log(nameToLookup, '->', val); // for debugging
  if (val) {
    res.send(val);
  } else {
    res.send({}); // failed, so return an empty object instead of undefined
  }
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});