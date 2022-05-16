import { Artist } from './Artist.js';

/**
 * @param {Object} song
 * @param {string} song.title
 * @param {Date} song.date
 * @param {Artist} song.artist
 * @param {number} song.duration
 * @constructor
 */
export function Song({ title, duration, date, artist }) {
  this.title = title;
  this.date = date;
  this.duration = duration;
  this.artist = artist;
  this.albums = [];

  this.artist.songs.push(this);
}
