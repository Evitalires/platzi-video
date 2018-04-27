// Format for digit and seconds
export const leftPad = digit => `0${digit}`.substr(-2)
export const formatTime = secs => `${leftPad(~~(secs/60))}:${leftPad(~~(secs%60))}`

//    Object document is FullScreen
export const isFullScreen = () => (
  document.fullscreen
  ||
  document.webkitIsFullScreen
  ||
  document.mozFullScreen
)


//   FullScreen para element
export const requestFullScreen = element =>
{
  try{ element.msRequestFullscreen()      } catch(e){
  try{ element.webkitRequestFullscreen()  } catch(e){
  try{ element.mozRequestFullscreen()     } catch(e){
    console.log(evento)
  }}}
}

//   Salir de FullScreen
export const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(e){
  try { document.webkitExitFullscreen() } catch(e){
  try { document.mozCancelFullscreen()  } catch(e){
  try { document.msExitFullscreen()     } catch(e){
    console.log(evento)
  }}}}
}
