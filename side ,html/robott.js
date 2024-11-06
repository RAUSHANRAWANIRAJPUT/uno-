const leftEye = document.querySelector('.eye.left');
const rightEye = document.querySelector('.eye.right');
const leftArm = document.querySelector('.arm.left');
const rightArm = document.querySelector('.arm.right');
const mouth = document.querySelector('.mouth');
const robot = document.querySelector('.robot');
const commandInput = document.getElementById('command-input');
const commandBtn = document.getElementById('command-btn');

// Function to make the robot wave
function wave() {
  leftArm.style.transform = 'rotate(30deg)';
  rightArm.style.transform = 'rotate(-30deg)';
  setTimeout(() => {
    leftArm.style.transform = 'rotate(0deg)';
    rightArm.style.transform = 'rotate(0deg)';
  }, 1000);
}

// Function to make the robot blink
function blink() {
  leftEye.style.height = '5px';
  rightEye.style.height = '5px';
  setTimeout(() => {
    leftEye.style.height = '20px';
    rightEye.style.height = '20px';
  }, 200);
}

// Function to make the robot jump
function jump() {
  robot.style.transform = 'translateY(-50px)';
  setTimeout(() => {
    robot.style.transform = 'translateY(0)';
  }, 500);
}

// Execute command based on user input
commandBtn.addEventListener('click', () => {
  const command = commandInput.value.toLowerCase();

  switch(command) {
    case 'wave':
      wave();
      break;
    case 'blink':
      blink();
      break;
    case 'jump':
      jump();
      break;
    default:
      alert("Robo+ doesn't know that command! Try 'wave', 'blink', or 'jump'.");
  }
});
function jump() {
    robot.style.transform = 'translateY(-50px)'; // Move up
    setTimeout(() => {
      robot.style.transform = 'translateY(0)'; // Move back down
    }, 500); // After 0.5 seconds
  }
  const commandInput = document.getElementById('command-input');
  const commandBtn = document.getElementById('command-btn');
  const robot = document.querySelector('.robot');
  
  // Function to make Robo+ speak
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text); // Create speech from text
    window.speechSynthesis.speak(utterance); // Speak the text
  }
  
  // Function to make Robo+ wave
  function wave() {
    speak('I am waving!');
    // Animation logic for waving
  }
  
  // Function to make Robo+ blink
  function blink() {
    speak('I am blinking!');
    // Animation logic for blinking
  }
  
  // Function to make Robo+ jump
  function jump() {
    speak('I am jumping!');
    robot.style.transform = 'translateY(-50px)';
    setTimeout(() => {
      robot.style.transform = 'translateY(0)';
    }, 500);
  }
  
  // Execute command based on user input
  commandBtn.addEventListener('click', () => {
    const command = commandInput.value.toLowerCase();
  
    switch(command) {
      case 'wave':
        wave();
        break;
      case 'blink':
        blink();
        break;
      case 'jump':
        jump();
        break;
      default:
        speak("Sorry, I don't understand that command."); // Robo+ speaks the error
    }
  });
    