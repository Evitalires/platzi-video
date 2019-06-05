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
  try{ element.msRequestFullscreen()      } catch(evento){
  try{ element.webkitRequestFullscreen()  } catch(evento){
  try{ element.mozRequestFullscreen()     } catch(evento){
    console.log( evento )
  }}}
}

//   Salir de FullScreen
export const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(evento){
  try { document.webkitExitFullscreen() } catch(evento){
  try { document.mozCancelFullscreen()  } catch(evento){
  try { document.msExitFullscreen()     } catch(evento){
    console.log(evento)
  }}}}
}
