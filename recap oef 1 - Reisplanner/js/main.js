document
  .getElementById("reisplanner-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Functie om een geldige datum te controleren
    function isValidDate(dateString) {
      const date = new Date(dateString);
      return !isNaN(date.getTime());
    }

    // Functie om een geldig positief getal te controleren
    function isValidPositiveNumber(value) {
      return !isNaN(value) && value >= 0;
    }

    // Haal alle ingevoerde waarden op
    const bestemming = document.getElementById("bestemming").value;
    const reisdatumsStr = document.getElementById("reisdatums").value;
    const terugkeerdatumsStr = document.getElementById("terugkeerdatums").value;
    const aantalReizigers = parseInt(
      document.getElementById("aantalReizigers").value
    );
    const vluchtkostenPerPersoon = parseFloat(
      document.getElementById("vluchtkostenPerPersoon").value
    );
    const kostenAccommodatiePerNacht = parseFloat(
      document.getElementById("kostenAccommodatiePerNacht").value
    );
    const dagelijkseKostenPerPersoon = parseFloat(
      document.getElementById("dagelijkseKostenPerPersoon").value
    );

    // Valideer de ingevoerde waarden
    if (
      !isValidPositiveNumber(aantalReizigers) ||
      !isValidPositiveNumber(vluchtkostenPerPersoon) ||
      !isValidPositiveNumber(kostenAccommodatiePerNacht) ||
      !isValidPositiveNumber(dagelijkseKostenPerPersoon) ||
      !isValidDate(reisdatumsStr) ||
      !isValidDate(terugkeerdatumsStr)
    ) {
      alert("Vul geldige gegevens in.");
      return;
    }

    const reisdatums = new Date(reisdatumsStr);
    const terugkeerdatums = new Date(terugkeerdatumsStr);

    if (terugkeerdatums < reisdatums) {
      alert("De terugkeerdatum moet na de vertrekdatum liggen.");
      return;
    }

    // Valutakeuze (standaard EUR)
    const valutaSelector = document.getElementById("valuta-selector");
    const gekozenValuta =
      valutaSelector.options[valutaSelector.selectedIndex].value;

    // Symbolen voor verschillende valuta's
    const valutaSymbolen = {
      EUR: "€",
      USD: "$",
      GBP: "£",
      JPY: "¥",
    };

    // Bereken de totale kosten
    const verblijfsduurInDagen =
      (terugkeerdatums - reisdatums) / (1000 * 60 * 60 * 24); // Milliseconden naar dagen
    const totaleVluchtkosten = aantalReizigers * vluchtkostenPerPersoon;
    const totaleKostenAccommodatie =
      aantalReizigers * verblijfsduurInDagen * kostenAccommodatiePerNacht;
    const totaleDagelijkseKosten =
      aantalReizigers * verblijfsduurInDagen * dagelijkseKostenPerPersoon;
    const totaleReiskosten =
      totaleVluchtkosten + totaleKostenAccommodatie + totaleDagelijkseKosten;

    // Toon het resultaat met valutasymbool
    const resultaatTekst = `Voor de reis naar ${bestemming} van ${reisdatums.toLocaleDateString()} tot ${terugkeerdatums.toLocaleDateString()} met ${aantalReizigers} reizigers bedragen de totale kosten ${
      valutaSymbolen[gekozenValuta]
    }${totaleReiskosten.toFixed(2)}`;
    document.getElementById("totaal").textContent = resultaatTekst;
    document.getElementById("resultaat").style.display = "block";

    // Toon de vernieuwingsknop
    document.getElementById("refresh-button").style.display = "block";
  });

// Voeg een event listener toe aan de vernieuwingsknop
document
  .getElementById("refresh-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Reset het formulier
    document.getElementById("reisplanner-form").reset();

    // Verberg het resultaat
    document.getElementById("resultaat").style.display = "none";

    // Verberg de vernieuwingsknop
    document.getElementById("refresh-button").style.display = "none";
  });