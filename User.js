import { Playlist } from './Playlist.js';

/**
 * @param {string} name
 * @constructor
 * @property {string} name
 * @property {Playlist[]} playlists
 */
export function User(name) {
  this.name = name;
  this.playlists = [];
}
