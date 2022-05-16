import { Artist } from './Artist.js';
import { Song } from './Song.js';

/**
 * @param {Object} obj
 * @param {string} obj.name
 * @param {string} obj.cover
 * @param {number} obj.year
 * @param {Song[]} obj.songs
 * @param {Artist} obj.artist
 * @constructor
 * @property {string} name
 * @property {string} cover
 * @property {number} year
 * @property {Song[]} songs
 * @property {Artist} artist
 * @property {number} duration
 */
export function Album({
  name,
  cover,
  year,
  songs,
  artist,
}) {
  this.name = name;
  this.cover = cover;
  this.year = year;
  this.songs = songs;
  this.artist = artist;
  this.duration = 0;

  this.songs.forEach((song) => {
    song.albums.push(this);
  });

  this.artist.albums.push(this);
}
