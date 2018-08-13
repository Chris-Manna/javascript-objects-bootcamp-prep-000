var playlist = { "artist name": "songTitles"}

function updatePlaylist(playlist, aristName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle } )
}
