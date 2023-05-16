(function ($) {
  jQuery(document).ready(function () {
    // Get our Elements
    const player = document.querySelector(".player");
    const video = player.querySelector(".viewer");
    const toggle = player.querySelector(".toggle");
    //get the modal video button
    // const playVideo = player.querySelector(".play-video");


    // Build out functions

    function togglePlay() {
      const method = video.paused ? "play" : "pause";
      video[method]();
    }

    // Stop background video when modal gets opened
    // function stopPlay() {
    //   video.pause();
    //   video.currentTime = 0;
    // }

    function updateButton() {
      const icon = this.paused ? "►" : "❚❚";
      toggle.textContent = icon;
    }

    // Hookup event listeners
    // video.addEventListener("click", togglePlay);
    video.addEventListener("play", updateButton);
    video.addEventListener("pause", updateButton);
    toggle.addEventListener("click", togglePlay);
    // listen for click on modal play button
    // playVideo.addEventListener("click", stopPlay);
    // video.addEventListener('ended', stopPlay);

    // Make the prospective tool bar stick to the bottom of the window on scroll
    // var nav = document.querySelector(".prospect-call--expanded"); //class needs to be the container with nav in it
    // var topOfNav = nav.offsetTop - 97;

    // function fixNav() {
    //   if (window.scrollY >= topOfNav) {
    //     console.log(nav.offsetHeight);

    //     document.body.style.paddingTop = nav.offsetHeight + 'px';
    //     document.body.classList.add('sticky');
    //   } else {
    //     document.body.classList.remove('sticky');
    //     document.body.style.paddingTop = 0;
    //   }
    // }

    // window.addEventListener('scroll', fixNav);
  });
})(jQuery);
