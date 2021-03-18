// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const flightStatus = document.getElementById("flightStatus");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const rocket = document.getElementById('rocket');
    rocket.style.position = 'relative';
    rocket.style.top = '240px';
    rocket.style.left = '0px';


    takeOff.addEventListener("click", function(event){
        let miles = 0;
        if (window.confirm("Confirm that the shuttle is ready for takeoff") === true){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            miles = 10000;
            spaceShuttleHeight.innerHTML= miles;
        }
        event.stopPropagation("click");
        if(flightStatus.innerHTML = "Shuttle in flight"){
            upButton.addEventListener('click', function(event){
                if(parseInt(rocket.style.top) -10 >= 0){
                    rocket.style.top = parseInt(rocket.style.top) -10 + "px";
                    miles += 10000;
                    spaceShuttleHeight.innerHTML = miles;
                }
                event.stopPropagation("click");
            });
            downButton.addEventListener('click', function(event){
                if(parseInt(rocket.style.top) <= 240){
                    rocket.style.top = parseInt(rocket.style.top) + 10 + "px";
                    if (spaceShuttleHeight.innerHTML >= 10000){
                        miles -= 10000;
                        spaceShuttleHeight.innerHTML = miles;
                    }
                }
                event.stopPropagation("click");
            });
            leftButton.addEventListener("click", function(event){
                if(parseInt(rocket.style.left) >= -240){
                    rocket.style.left = parseInt(rocket.style.left) -10 + 'px';
                }
                event.stopPropagation("click");
            })
            rightButton.addEventListener('click', function(event){
                if(parseInt(rocket.style.left) <= 250){
                    rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
                }
                event.stopPropagation("click");
            });
        }
    });
    landing.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML= 0;
        rocket.style.position = 'relative';
        rocket.style.top = '250px';
        rocket.style.left = '0px';
        event.stopPropagation("click");
    });
    missionAbort.addEventListener("click", function(event){
        if (window.confirm("Confirm that you want to abort the mission.") === true){
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML= 0;
            rocket.style.position = 'relative';
            rocket.style.top = '250px';
            rocket.style.left = '0px';
        }
        event.stopPropagation("click");
    });
}
window.addEventListener("load", init);