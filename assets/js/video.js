// Click-to-play for the video figures. Progressive enhancement: with JS off,
// the poster frame still shows and nothing is broken.
(function () {
  var buttons = document.querySelectorAll('.video-play');

  Array.prototype.forEach.call(buttons, function (btn) {
    var video = btn.querySelector('video');
    if (!video) return;

    btn.addEventListener('click', function () {
      if (btn.getAttribute('data-playing') === 'true') {
        video.pause();
        btn.setAttribute('data-playing', 'false');
        btn.setAttribute('aria-pressed', 'false');
        return;
      }

      // Pause any other figure that is running.
      Array.prototype.forEach.call(buttons, function (other) {
        if (other === btn) return;
        var v = other.querySelector('video');
        if (v && !v.paused) { v.pause(); other.setAttribute('data-playing', 'false'); }
      });

      var playing = video.play();
      if (playing && typeof playing.then === 'function') {
        playing.then(function () {
          btn.setAttribute('data-playing', 'true');
          btn.setAttribute('aria-pressed', 'true');
        }).catch(function () {
          btn.setAttribute('data-playing', 'false');
        });
      } else {
        btn.setAttribute('data-playing', 'true');
      }
    });

    video.addEventListener('pause', function () {
      btn.setAttribute('data-playing', 'false');
      btn.setAttribute('aria-pressed', 'false');
    });
  });
})();
