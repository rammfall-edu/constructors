import { Playlist } from './Playlist.js';
import { Artist } from './Artist.js';
import { Album } from './Album.js';
import { Song } from './Song.js';
import { User } from './User.js';

const psiheya = new Artist({
  name: 'Психея',
  dateOfBirth: new Date(1995, 0, 2),
});

const first = new Song({
  title: 'Видение первое',
  duration: 62,
  date: new Date(2021, 0, 1),
  artist: psiheya,
});

const second = new Song({
  title: 'Имя',
  duration: 371,
  date: new Date(2021, 0, 1),
  artist: psiheya,
});

const third = new Song({
  title: 'Расцвет (Свободный и дикий)',
  duration: 325,
  date: new Date(2021, 0, 1),
  artist: psiheya,
});

const fourth = new Song({
  title: '1 Х 1',
  duration: 408,
  date: new Date(2021, 0, 1),
  artist: psiheya,
});

const fifth = new Song({
  title: 'Небеса',
  duration: 684,
  date: new Date(2021, 0, 1),
  artist: psiheya,
});

const sixth = new Song({
  title: 'Матрешка + видение второе',
  duration: 481,
  date: new Date(2021, 0, 1),
  artist: psiheya,
});

const seventh = new Song({
  title: 'Инстинкты',
  duration: 340,
  date: new Date(2021, 0, 1),
  artist: psiheya,
});

const videniya = new Album({
  name: 'Видения',
  cover:
    'https://lh3.googleusercontent.com/rcJZHh_Xux0A7Ecj6-A0_uMPtjwAMNyuCKhWThe6pfU1a4khvQj2IFIWXB_CR2whK-6A8ZFoU4EgQj42=w544-h544-l90-rj',
  year: 2021,
  songs: [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
  ],
  artist: psiheya,
});

const rammfall = new User('Bohdan');
const rock = new Playlist({
  name: 'Rock!!!!!',
  user: rammfall,
  isPublic: true,
});

rock.addSong(...videniya.songs); // first, sec
rock.addSong(sixth);

console.log(rock.showLongSongs());
console.log(rock.showShortSongs());
