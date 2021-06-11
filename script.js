var friends = ["Morgan", "Rick", "Jackson", "Noah", "Kaleb"];
var locations = ["Mount Saint Hellen", "Innovation headquarters", "Members Mart", "Sunset Blvd", "Big Blues Pub", "Mystery mountain", "Tuscaloosa", "Costco", "football game", "the black hole sun"];
var weapons = ["a Pistol", "a Cannon", "a paper clip", "a bowling ball", "a knife", "a bat", "a extra most bestest pizza slice", "a car", "a monitor", "a single drop of water", "a hoola hoop", "a serious conersation", "a pool stick", "a cue ball", "a door handle", "a odd look", "a virus", "a lacrosse stick", "a punch", "a nerf gun"];

  
for (let i = 1; i < 101; i++) {
        var h3 = document.createElement("h3");
        h3.innerText = "Accusation " + i + ".";
                 
        h3.addEventListener('click', function () {
                
                let friend = friends[Math.floor(Math.random() * friends.length)];
                let weapon = weapons[Math.floor(Math.random() * weapons.length)];
                let location = locations[Math.floor(Math.random() * locations.length)];
                             
                alert("Accusation " + i + ": I accuse " + friend + ", with " + weapon + " while at " + location + "!");
        });
                      
        document.body.appendChild(h3);
}