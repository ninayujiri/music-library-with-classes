class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = []; // an array of Playlist objects
  }

  addPlaylist(playlist){
    this.playlists.push(playlist);
  }
}


class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  overallRating() {
    let overallRating = 0;

    for (let track of this.tracks) {
      overallRating += track.rating;
    }
    return overallRating / this.tracks.length;
  }

  totalDuration() {
    let totalDuration = 0;

    for (let track of this.tracks) {
      totalDuration += track.length;
    }
    return totalDuration;
  }
}


class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating; // an integer from 1 to 5
    this.length = length; // an integer in seconds
  }

}


let library1 = new Library('Summer', 'Nina');

let playlist1 = new Playlist('Summer');

let hipsDontLie = new Track('Hips Dont Lie', 3, 200);
let yeah = new Track('Yeah', 4, 300);


library1.addPlaylist(playlist1);

playlist1.addTrack(hipsDontLie);
playlist1.addTrack(yeah);

console.log('Library', library1);
console.log('Playlist', playlist1);
console.log('Overall Rating', playlist1.overallRating());
console.log('Total Duration', playlist1.totalDuration());


