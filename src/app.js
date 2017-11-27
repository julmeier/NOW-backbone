// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';

// CSS
import './css/foundation.css';
import './css/style.css';

console.log('it loaded!');

import Song from './models/song';

const bathroomWindow = new Song({
  title: 'She Came In Through the Bathroom Window',
  year: 1969,
  artist: 'The Beatles',
});
console.log(bathroomWindow);

const songData = [
    {
      title: "Dancing in the Moonlight",
      year: 1972,
      artist: "King Harvest"
    },
    {
      title: "Highway to Hell",
      year: 1979,
      artist: "AC/DC"
    },
    {
      title: "What Do You Mean",
      year: 2015,
      artist: "Justin Bieber"
    },
    {
      title: "Hello Goodbye",
      year: 1967,
      artist: "The Beatles"
    },
  ];

let songTemplate;

$(document).ready( () => {

  songTemplate = _.template($('#song-template').html());

  $('#song-list').append(songTemplate(bathroomWindow.attributes));

  console.log('in the doc ready section');

});
