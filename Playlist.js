import { User } from './User.js';
import { Song } from './Song.js';

/**
 * @param {Object} obj
 * @param {string} obj.name
 * @param {User} obj.user
 * @param {boolean} obj.isPublic
 * @constructor
 * @property {string} name
 * @property {User} user
 * @property {boolean} isPublic
 * @property {Song[]} songs
 */
export function Playlist({ name, user, isPublic }) {
  this.isPublic = isPublic;
  this.name = name;
  this.user = user;
  this.duration = 0;
  this.songs = [];

  this.user.playlists.push(this);
  /**
   * @param {Iterator<Song>} songs
   */
  this.addSong = function (...songs) {
    songs.forEach((song) => {
      if (this.songs.includes(song)) {
        this.songs = this.songs.filter(
          (filterSong) => filterSong !== song
        );
        this.duration -= song.duration;
      } else {
        this.songs.push(song);
        this.duration += song.duration;
      }
    });
  };

  this.removeSong = this.addSong;

  this.toggleIsPublic = function () {
    this.isPublic = !this.isPublic;
  };

  this.showShortSongs = function () {
    return this.songs.filter(({ duration }) => {
      return duration < 180;
    });
  };

  this.showLongSongs = function () {
    return this.songs.filter(({ duration }) => {
      return duration > 180;
    });
  };
}
