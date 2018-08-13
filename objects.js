var playlist = { "Phil Ochs": "songTitles"}

function updatePlaylist(playlist, aristName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle } )
}

function removeFromPlaylist(playlist, artistName) {
  console.log(playlist);
  console.log(playlist.artistName);
  console.log(artistName);

  delete playlist.artistName
  console.log(playlist);
  return playlist
}
