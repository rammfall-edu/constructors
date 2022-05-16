import { Album } from './Album.js';
import { Song } from './Song.js';

/**
 * @param {Object} obj
 * @param {string} obj.name
 * @param {Date} obj.dateOfBirth
 * @constructor
 * @property {string} name
 * @property {Date} dateOfBirth
 * @property {Album[]} albums
 * @property {Song[]} songs
 */
export function Artist({ name, dateOfBirth }) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.albums = [];
  this.songs = [];

  Object.defineProperty(this, 'timeOfSongs', {
    get() {
      const allTime = this.songs.reduce(
        (accumulator, { duration }) => {
          return accumulator + duration;
        },
        0
      );
      const duration = new Date(allTime * 1000);

      return `${duration.getUTCHours()}:${duration.getUTCMinutes()}:${duration.getUTCSeconds()}`;
    },
  });
}
