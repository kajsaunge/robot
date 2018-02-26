// What do I want to do?
// Clicka a swatch to add that color to the header

var element = document.getElementById("color-container");

for(var i = 1; i <120; i++) {
  element.innerHTML = element.innerHTML + '<div class="box">&nbsp;</div>'
};

document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.getElementsByClassName("box");
  var header = document.getElementById('header');
  var robotPart = initRobotParts();
  var createRobotPart = robotPart.head;
  var nextPart = 1;
  let restartButton = document.getElementById('restartButton');
  let robotControllersContainer = document.getElementById('robotControllersContainer');
  let robotContainerKids = document.querySelector('.robot-container').getElementsByTagName("div");
  let roundButton = document.getElementById('roundButton');
  let borderButton = document.getElementById('borderButton');
  let matteButton = document.getElementById('matteButton');

  let controllers = document.getElementsByClassName('robot-controllers');


  let roundStyle = () => {
    roundButton.addEventListener('click', function() {
      for (var i = 0; i < robotContainerKids.length; i++) {
        if (robotContainerKids[i].classList.contains('round')) {
          roundButton.classList.remove('active');
          robotContainerKids[i].classList.remove('round');
        } else {
          roundButton.classList.add('active');
          robotContainerKids[i].classList.add('round');
        }
      }
    })
  }

  let borderStyle = () => {
    borderButton.addEventListener('click', function() {
      for (var i = 0; i < robotContainerKids.length; i++) {
        if (robotContainerKids[i].classList.contains('border')) {
          borderButton.classList.remove('active');
          robotContainerKids[i].classList.remove('border');
        } else {
          borderButton.classList.add('active');
          robotContainerKids[i].classList.add('border');
        }
      }
    })
  }

  let matteStyle = () => {
    matteButton.addEventListener('click', function() {
    for (var i = 0; i < robotContainerKids.length; i++) {
      if (robotContainerKids[i].classList.contains('matte')) {
        matteButton.classList.remove('active');
        robotContainerKids[i].classList.remove('matte');
      } else {
        matteButton.classList.add('active');
        robotContainerKids[i].classList.add('matte');
      }
    }
    })
  }

  let restart = () => {
    restartButton.addEventListener('click', function() {
      let activeClasses = document.querySelectorAll('.active');
      for (let i = 0; i < activeClasses.length; i++) {
        activeClasses[i].classList.remove('active');
        robotPart = initRobotParts();
        createRobotPart = robotPart.head;
        nextPart = 1;
      }
    })
  }

  roundStyle();
  borderStyle();
  matteStyle();
  restart();


  let addFilter = (elem) => {
    for (var i = 0; i < controllers.length; i++) {
      if (controllers[i].classList.contains('active')) {
        let filter = controllers[i].id;
        switch (filter) {
          case 'roundButton':
            elem.classList.add('round');
            break;
          case 'borderButton':
            elem.classList.add('border');
            break;
          default:
            elem.classList.add('matte');
        }

      }
    }
  }


  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function (elem) {
      switch(createRobotPart) {
          case robotPart.head:
            header.className = "active";
            var robotHeadElement = document.getElementById('robot-head');
            robotHeadElement.className = "active";
            document.getElementById('color-container').className = "active";
            robotControllersContainer.classList.add('active');
            robotHeadElement.style.background = getComputedStyle(this).backgroundColor;
            createRobotPart += nextPart;
            break;
          case robotPart.belly:
            var robotBellyElement = document.getElementById('robot-belly');
            robotBellyElement.className = "active";
            robotBellyElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotBellyElement);
            createRobotPart += nextPart;
            break;
          case robotPart.neck:
            var robotNeckElement = document.getElementById('robot-neck');
            robotNeckElement.className = "active";
            robotNeckElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotNeckElement);
            createRobotPart += nextPart;
            break;
          case robotPart.leftArm:
            var robotArmLeftElement = document.getElementById('robot-left-arm');
            robotArmLeftElement.className = "active";
            robotArmLeftElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotArmLeftElement);
            createRobotPart += nextPart;
            break;
          case robotPart.rightArm:
            var robotRightArmElement = document.getElementById('robot-right-arm');
            robotRightArmElement.className = "active";
            robotRightArmElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotRightArmElement);
            createRobotPart += nextPart;
            break;
          case robotPart.rightEye:
            var robotRightEyeElement = document.getElementById('robot-right-eye');
            robotRightEyeElement.className = "active";
            robotRightEyeElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotRightEyeElement);
            createRobotPart += nextPart;
            break;
          case robotPart.leftEye:
            var robotLeftEyeElement = document.getElementById('robot-left-eye');
            robotLeftEyeElement.className = "active";
            robotLeftEyeElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotLeftEyeElement);
            createRobotPart += nextPart;
            break;
          case robotPart.mouth:
            var robotMouthElement = document.getElementById('robot-mouth');
            robotMouthElement.className = "active";
            robotMouthElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotMouthElement);
            createRobotPart += nextPart;
            break;
          case robotPart.leftEar:
            var robotLeftEarElement = document.getElementById('robot-left-ear');
            robotLeftEarElement.className = "active";
            robotLeftEarElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotLeftEarElement);
            createRobotPart += nextPart;
            break;
          case robotPart.rightEar:
            var robotRightEarElement = document.getElementById('robot-right-ear');
            robotRightEarElement.className = "active";
            robotRightEarElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotRightEarElement);
            createRobotPart += nextPart;
            break;
          case robotPart.pelvis:
            var robotPelvisElement = document.getElementById('robot-pelvis');
            robotPelvisElement.className = "active";
            robotPelvisElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotPelvisElement);
            createRobotPart += nextPart;
            break;
          case robotPart.leftLeg:
            var robotLeftLegElement = document.getElementById('robot-left-leg');
            robotLeftLegElement.className = "active";
            robotLeftLegElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotLeftLegElement);
            createRobotPart += nextPart;
            break;
          case robotPart.rightLeg:
            var robotRightLegElement = document.getElementById('robot-right-leg');
            robotRightLegElement.className = "active";
            robotRightLegElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotRightLegElement);
            createRobotPart += nextPart;
            break;
          case robotPart.rightFoot:
            var robotRightFootElement = document.getElementById('robot-right-foot');
            robotRightFootElement.className = "active";
            robotRightFootElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotRightFootElement);
            createRobotPart += nextPart;
            break;
          case robotPart.leftFoot:
            var robotLeftFootElement = document.getElementById('robot-left-foot');
            robotLeftFootElement.className = "active";
            robotLeftFootElement.style.background = getComputedStyle(this).backgroundColor;
            addFilter(robotLeftFootElement);
            createRobotPart += nextPart;
            break;
          case robotPart.heart:
            var robotHeartElement = document.getElementById('heart');
            robotHeartElement.className = "active";
            addFilter(robotHeartElement);
            createRobotPart += nextPart;
            break;

          default:
            alert('Love your robot');
      }

    }, false);
  }
});

function initRobotParts() {
  return {
    head: 1,
    belly: 2,
    neck: 3,
    leftArm: 4,
    rightArm: 5,
    rightEye: 6,
    leftEye: 7,
    mouth: 8,
    rightEar: 9,
    leftEar: 10,
    pelvis: 11,
    leftLeg: 12,
    rightLeg: 13,
    rightFoot: 14,
    leftFoot: 15,
    heart: 16,
  }
};
