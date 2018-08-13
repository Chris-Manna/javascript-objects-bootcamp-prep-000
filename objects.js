var playlist = { "artist name": "songTitles"}

function updatePlaylist({}, aristName, songTitle) {
  return Object.assign(playlist, playlist, { artistName: songTitle } )
}
