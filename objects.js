var playlist = { "Phil Ochs": "songTitles"}

function updatePlaylist(playlist, aristName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle } )
}
