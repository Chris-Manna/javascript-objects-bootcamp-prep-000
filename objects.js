var playlist = { artistNames: "songTitles"}

function updatePlaylist({}, aristName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle} )
}
