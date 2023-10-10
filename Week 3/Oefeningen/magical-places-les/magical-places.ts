type GhentPlace = {
  name: string;
  description: string;
};

type Explorer = GhentPlace[];

function addPlace(explorer: Explorer, place: GhentPlace): Explorer {
  explorer.push(place);
//   explorer = [...explorer, place];
  console.log(`The mystical place: ${place.name} has been added to the explorer's map!`);
  return explorer;
}

const removePlace = (explorer: Explorer, placeName: string): Explorer => {
  const index = explorer.findIndex((place) => place.name === placeName);
  if (index !== -1) {
    const removedPlace = explorer.splice(index, 1)[0];
    console.log(
      `Poof! ${removedPlace.name} has disappeared from the explorer's map!`
    );
  } else {
    console.log(`Sorry, ${placeName} is not in the explorer's map.`);
  }
  return explorer;
};

const listplaces = (explorer: Explorer) => {
  if (explorer.length === 0) {
    console.log("The explorer's map is empty.");
  } else {
    console.log("Quirky places in Ghent:");
    explorer.forEach((place) => {
      console.log(`${place.name}: ${place.description}`);
    });
  }
};

const ghentExplorer: Explorer = [];

const gravensteenCastle: GhentPlace = {
  name: "Gravensteen Castle",
  description: "A medieval castle in the heart of Ghent.",
};

const graffitiStreet: GhentPlace = {
  name: "Graffiti Street",
  description: "A street filled with vibrant graffiti art.",
};

const catCafe: GhentPlace = {
  name: "Cat Café",
  description: "A café where you can enjoy coffee in the company of cats.",
};

addPlace(ghentExplorer, gravensteenCastle);
addPlace(ghentExplorer, graffitiStreet);
addPlace(ghentExplorer, catCafe);

listplaces(ghentExplorer);

removePlace(ghentExplorer, "Cat Café");

listplaces(ghentExplorer);

listplaces(ghentExplorer);