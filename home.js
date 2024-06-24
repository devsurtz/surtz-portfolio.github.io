
window.addEventListener('scroll', function() {
  var section = document.getElementById('navBarSection');
  var sideDiv = document.getElementById('stickyNav');

  var rect = section.getBoundingClientRect();

  if (rect.top >= window.innerHeight || rect.bottom <= 0) {
      
      sideDiv.style.right = '0';
  } else {
      sideDiv.style.right = '-200px'; 
  }
});

window.onload = function() {
  window.scrollTo(0, 0);
};
      
      window.onscroll = function () {
        stickyNavbar();
      };

      var navbar = document.getElementById("navBar");
      var sticky = navbar.offsetTop;

      function stickyNavbar() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
      /**----------------------------------- */
      const consoleElement = document.getElementById("console");
      const inputElement = document.getElementById("input");

      function handleInput(event) {
        if (event.key === "Enter") {
          const command = inputElement.value;
          setStatus("speaking");
          executeCommand(command);
          inputElement.value = "";
        }
      }

      function executeCommand(command) {
        const output = document.createElement("div");
        output.textContent = "> " + command;

        switch (command.toLowerCase()) {
          case "hello":
            printOutput("Hi there! It's Sylbot. How are you doing?");
            break;
          case "hobbies":
            case "past-time":
              case "past time":
            printOutput("Sylbert's hobbies are playing video games and coding.");
            break;
            
          case "hellow":
            printOutput("Do you mean Hello? Anyway. Hi there!");
            break;
            case "about":
            printOutput("Hello, My name is Sylbert John Asid. I'm 27 years old. I studied at Eastern Samar State University and graduated with Bachelor of Science in Information Technology on 2023.");
            break;
          case "time":
            printOutput("Current time: " + new Date().toLocaleTimeString());
            break;
          case "date":
            printOutput("Today's date: " + new Date().toLocaleDateString());
            break; 
          default:
            setStatus("computing");
            printOutput(
              "Command not recognized. Sorry for the inconvience, As of now, I have limited data encrypted with me. To make it up with you here's the available commands (about,time,date) "
            );
        }

        consoleElement.scrollTop = consoleElement.scrollHeight;
      }

      function printOutput(message) {
        const wrapper = document.createElement("div");

        const inputLine = document.createElement("div");
        inputLine.textContent = "You: " + inputElement.value;
        wrapper.appendChild(inputLine);

        const result = document.createElement("div");
        result.textContent = "SylBot: " + message;
        wrapper.appendChild(result);

        consoleElement.appendChild(wrapper);

        setTimeout(() => {
          wrapper.remove();
          setStatus("");
        }, 10000);
      }

      function setStatus(newstatus) {
        
        $("#bot").removeClass("speaking thinking listening computing");
        $("#bot").addClass(newstatus);
      }
    
      function showAll() {
        $(".portfolioContents div").show();
      }

      function showWebsite() {
        $(".portfolioContents div").hide();
        $(".1stImg").show();
      }

      function showMobileApp() {
        $(".portfolioContents div").hide();
        $(".2ndImg").show();
      }

      function showRobotics() {
        $(".portfolioContents div").hide();
        $(".3rdImg").show();
      }
      function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".skill-fill").style.width =
              entry.target.querySelector(".skill-percent").innerText;
          }
        });
      }

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
      });

      const skillBars = document.querySelectorAll(".skill-bar");
      skillBars.forEach((skillBar) => observer.observe(skillBar));