var playlist = { "Phil Ochs": "songTitles"}

function updatePlaylist(playlist, aristName, songTitle) {
  return Object.assign({}, playlist, { artistName: songTitle } )
}

function removeFromPlaylist(thisPlaylist, artistName) {
  console.log('playlist: #{thisPlaylist}');
  delete thisPlaylist.artistName
  return thisPlaylist
}
