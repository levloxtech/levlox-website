    function toggleBackToTop() {            // back to top Section
        const btn = document.getElementById('backToTop');
        const footer = document.querySelector('.footer-section');
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const footerVisible = footerRect.top < windowHeight && footerRect.bottom > 0;

        if (window.scrollY > 300 && !footerVisible) {
            btn.style.display = 'block';
            btn.style.transform = 'scale(1)';
        } else {
            btn.style.transform = 'scale(0)';
            setTimeout(()=>{btn.style.display='none'},300);
        }
    }
    

    (function(){
        emailjs.init("xz1Qjsvsdn8hTfyKF"); 
    })();

    let selectedServices = [];

    window.addEventListener('scroll', toggleBackToTop);

    document.getElementById('backToTop').addEventListener('click', function() {
        gsap.to(window, {duration: 0.8, scrollTo: {y:0}, ease: "power2.out"});
    });

    document.getElementById('backToTop').style.transform = 'scale(0)';








    












const queryCursor = document.querySelector(".cursor");        //Mouse Cursor

var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $cursor: queryCursor,

  init: function () {
    this.outlineSize = this.$cursor.offsetWidth;
    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function () {
    var self = this;

    // On Hover Some Elements
    document.querySelectorAll("img").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        queryCursor.classList.add("active");
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        queryCursor.classList.remove("active");
      });
    });
    
    // On Hover Disappears 
    document.querySelectorAll("a, input, textarea").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        queryCursor.classList.add("hidden");
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        queryCursor.classList.remove("hidden");
      });
    });

    document.addEventListener("mousemove", function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$cursor.style.opacity = 1;
    });

    document.addEventListener("mouseleave", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$cursor.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$cursor.style.top = self._y + "px";
    self.$cursor.style.left = self._x + "px";

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$cursor.style.opacity = 1;
    } else {
      self.$cursor.style.opacity = 0;
    }
  }
};
cursor.init();





const hamburger = document.querySelector('.hamburger');           //Nav Bar
        const menu = document.querySelector('.menu');
        const dropdowns = document.querySelectorAll('.dropdown');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');

            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!e.target.matches('.dropdown a') && !e.target.matches('.dropdown-menu a')) {
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.style.display = 'none';
                    });
                }
            }
        });










const words = [                   //hero section//
  "Real Impact.",
  "Spark growth",
  "Drive results",
  "& Win a claim"
];

let currentIndex = 0;
const el = document.querySelector(".highlight-text");

setInterval(() => {
  // Remove class to reset animation
  el.classList.remove("highlight-text");

  // Force DOM reflow to restart animation
  void el.offsetWidth;

  // Update text
  currentIndex = (currentIndex + 1) % words.length;
  el.textContent = words[currentIndex];

  // Re-add class
  el.classList.add("highlight-text");
}, 2500);



























document.addEventListener('DOMContentLoaded', function() {                    // line scroll
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        if (window.innerWidth > 0) {
            const textLines = gsap.utils.toArray('.text-line');
            
            // Create a timeline for sequential animation
            const fillTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".text-container",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 0.5,
                    markers: false,
                    toggleActions: "play none none none"
                }
            });
            
            // Add animations to timeline with a gap between them
            fillTimeline
                .to(textLines[0], { 
                    backgroundSize: '100%',
                    ease: "power2.out",
                    duration: 1
                })
                .to(textLines[1], {
                    backgroundSize: '100%',
                    ease: "power2.out",
                    duration: 1
                }, "+=0.3") // Starts 0.3 seconds after first line completes
                .to(textLines[2], {
                    backgroundSize: '100%',
                    ease: "power2.out",
                    duration: 1
                }, "+=0.6"); // Starts 0.6 seconds after second line completes
            }
    } else {
        document.querySelectorAll('.text-line').forEach(line => {
            line.style.backgroundSize = '100%';
        });
    }
});









// Function to check scroll position
function updateCircleBtnVisibility() {          // round text //
    const button = document.querySelector('.circle-btn');
    const footer = document.querySelector('.footer-section');
    if (!button || !footer) return;

    // Get the scroll position and the height of the document
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Check if the scroll position is more than 10% of the document height
    if (scrollPosition > documentHeight * 0.1) {
        button.style.opacity = 1; // Show button
        button.style.pointerEvents = 'auto'; // Enable interactions
    } else {
        button.style.opacity = 0; // Hide button
        button.style.pointerEvents = 'none'; // Disable interactions
    }
    
    // Check if we've reached the footer section
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < windowHeight) {
        button.style.opacity = 0; // Hide button when footer is visible
        button.style.pointerEvents = 'none'; // Disable interactions
    }
}

window.addEventListener('scroll', updateCircleBtnVisibility);
window.addEventListener('DOMContentLoaded', updateCircleBtnVisibility);

        





