const manager = new Manager('ahmet');
manager.check();

let elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (document.requestFullscreen) {
      document.requestFullscreen();
    } else if (document.mozRequestFullScreen) { /* Firefox */
      document.mozRequestFullScreen();
    } else if (document.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.webkitRequestFullscreen();
    } else if (document.msRequestFullscreen) { /* IE/Edge */
      document.msRequestFullscreen();
    }
  }