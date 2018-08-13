var playlist = { "artist name": "songTitles"}

function updatePlaylist({}, aristName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle } )
}
