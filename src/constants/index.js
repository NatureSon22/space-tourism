import moonImg from '../assets/destination/image-moon.webp';
import marsImg from '../assets/destination/image-mars.webp';
import europaImg from '../assets/destination/image-europa.webp';
import titanImg from '../assets/destination/image-titan.webp';
import crew1 from '../assets/crew/image-douglas-hurley.webp';
import crew2 from '../assets/crew/image-mark-shuttleworth.webp';
import crew3 from '../assets/crew/image-victor-glover.webp';
import crew4 from '../assets/crew/image-anousheh-ansari.webp';
import techLaunchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import techLaunchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import techSpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import techSpaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import techSpaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import techSpaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';

export const navLinks = [
  {
    index: "00", 
    label: "home",
    link: "/"
  },
  {
    index: "01", 
    label: "destinations",
    link: "/destination"
  },
  {
    index: "02", 
    label: "crew",
    link: "/crew"
  },
  {
    index: "03", 
    label: "technology",
    link: "/technology"
  }
];

export const bgClassesMap = {
  home: {
    mobile: "bg-home-mobile",
    tablet: "sm:bg-home-tablet",
    desktop: "lg:bg-home-desktop"
  },
  destinations: {
    mobile: "bg-destinations-mobile",
    tablet: "sm:bg-destinations-tablet",
    desktop: "lg:bg-destinations-desktop"
  },
  crew: {
    mobile: "bg-crew-mobile",
    tablet: "sm:bg-crew-tablet",
    desktop: "lg:bg-crew-desktop"
  },
  technology: {
    mobile: "bg-technology-mobile",
    tablet: "sm:bg-technology-tablet",
    desktop: "lg:bg-technology-desktop"
  }
};

export const destinations = [
  {
    name: "Moon",
    image: moonImg,
    description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "Mars",
    image: marsImg,
    description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "Europa",
    image: europaImg,
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    image: titanImg,
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];

export const crew = [
  {
    name: "Douglas Hurley",
    image: crew1,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    name: "Mark Shuttleworth",
    image: crew2,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    name: "Victor Glover",
    image: crew3,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    name: "Anousheh Ansari",
    image: crew4,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  },
  {
    name: "Douglas Hurley",
    image: crew1,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
];

export const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: techLaunchVehiclePortrait,
      landscape: techLaunchVehicleLandscape
    },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    name: "Spaceport",
    images: {
      portrait: techSpaceportPortrait,
      landscape: techSpaceportLandscape
    },
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    name: "Space capsule",
    images: {
      portrait: techSpaceCapsulePortrait,
      landscape: techSpaceCapsuleLandscape
    },
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
];
