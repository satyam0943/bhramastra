// Car names database
const carNames = [
    "Adder",
           "Albany Escalade",
           "Alpha",
           "Annis 350Z",
           "Annis GT-R I",
           "Annis RX-7 (FD)",
           "Annis RX-8",
           "Annis Silvia (S15)",
           "Annis Skyline GT-R (R34)",
           "Annis WRX 2004",
           "Annis ZR-350",
           "Apocalypse Impaler",
           "Apocalypse Imperator",
           "Apocalypse Issi",
           "Apocalypse Slamvan",
           "Ardent",
           "Asbo",
           "Asea",
           "Asterope",
           "Autarch",
           "Annis RX-7 (VF)",
           "Baller",
           "Baller LE LWB",
           "Baller SG",
           "Banshee",
           "Banshee 900R",
           "Beater Emperor",
           "Beater Mariachi Tornado",
           "Beater Surfer",
           "Beater Tornado",
           "Benefactor 600SEL (W140)",
           "Benefactor C63 Coupe (W205)",
           "Benefactor E420 (W210)",
           "Benefactor E420 (W210)",
           "Benefactor G63 (G770)",
           "Benefactor GT Black Series",
           "Benefactor GT-63 (S)",
           "Benefactor S63 (W222)",
           "Benefactor Vito (V447)",
           "Benefactor-AMG C63 (W205)",
           "Benefactor-AMG GT",
           "Benefactor-AMG GT 63 (S)",
           "Benefactor-AMG SL65 (R230)",
           "Benefactor-Maybach Pullman",
           "Benefactor-MG VT",
           "Bestia GTS",
           "Bison",
           "Blade",
           "Blista",
           "Blista Kanjo",
           "Bodhi",
           "Bravado Charger 1969",
           "Bravado Charger SRT",
           "Bravado Ram 1500",
           "Bravado Viper 2008",
           "Brawler",
           "Brioso R/A",
           "Buccaneer",
           "Buffalo",
           "Bullet",
           "Burgerfahrzeug Golf GTI Vision",
           "Burgerfahrzeug Tiguan",
           "Calico GTF",
           "Caracara 4x4",
           "Carbonizzare",
           "Casco",
           "Cavalcade",
           "Cheburek",
           "Cheetah",
           "Cheetah Classic",
           "Chino",
           "Clique",
           "Cognoscenti",
           "Cognoscenti 55",
           "Cognoscenti Cabrio",
           "Coil Cybertruck",
           "Coil H9",
           "Coil Model S",
           "Coil Model X",
           "Coil Roadster",
           "Comet",
           "Comet S2",
           "Comet SR",
           "Contender",
           "Coquette",
           "Coquette Blackfin",
           "Coquette Classic",
           "Coquette D10",
           "Cyclone",
           "Cypher",
           "Declasse Camaro 2020",
           "Declasse Corvette C7",
           "Declasse Tahoe",
           "Deveste Eight",
           "Deviant",
           "Dilettante",
           "Dinka NSX 2017",
           "Dinka RT-3000",
           "Dominator",
           "Dominator ASP",
           "Dominator GTT",
           "Dominator GTX",
           "Dominator PiBwasser",
           "Drift Yosemite",
           "Dubsta",
           "Dubsta 6x6",
           "Dubsta SG",
           "Dukes",
           "Elegy Retro Custom",
           "Elegy RH8",
           "Ellie",
           "Emperor",
           "Emperor LX-570",
           "Emperor RCF",
           "Entity XF",
           "Enus Bentayga",
           "Enus Continental GT",
           "Enus Cullinan",
           "Enus Phantom",
           "ETR-1",
           "Euros",
           "Exemplar",
           "Enus Spectre",
           "F620",
           "Faction",
           "Felon",
           "Felon GT",
           "Feltzer",
           "Flash GT",
           "FMJ",
           "FQ 2",
           "Fugitive",
           "Furore GT",
           "Fusilade",
           "Futo",
           "Futo GTX",
           "Future Shock Issi",
           "Gallivanter Defender",
           "Gallivanter Velar",
           "Gauntlet",
           "Gauntlet Classic",
           "Gauntlet Hellfire",
           "Gauntlet Redwood",
           "GB200",
           "Glendale",
           "GP-1",
           "Granger",
           "Grotti Italia (F458)",
           "Grotti Purosangue",
           "Growler",
           "GT 500",
           "Hermes",
           "Hotknife",
           "Huntley S",
           "Imorgon",
           "Impaler",
           "Infernus",
           "Infernus Classic",
           "Ingot",
           "Issi",
           "Itali GTB",
           "Itali GTB Custom",
           "Itali GTO",
           "Jackal",
           "JB 700",
           "Jester",
           "Jester (Racecar)",
           "Jester Classic",
           "Jester RR",
           "Journey",
           "Jugular",
           "Kamacho",
           "Karin Land Cruiser 200",
           "Karin Mark 2",
           "Karin Rav4 2021",
           "Karin Supra A80",
           "Karin Tundra 2021",
           "Khamelion",
           "Komoda",
           "Krieger",
           "Kuruma",
           "Lampadati Guilia GTA",
           "Landstalker",
           "Lynx",
           "Mamba",
           "Massacro",
           "Monroe",
           "Moonbeam",
           "Nebula Turbo",
           "Neon",
           "Nero",
           "Nero Custom",
           "Nightshade",
           "Novak",
           "Obey A6",
           "Obey A8",
           "Obey Q60",
           "Obey Q8",
           "Obey R8",
           "Obey RS6",
           "Obey RS7",
           "Obey S8 (D4)",
           "Ocelot DBS GT Zagato",
           "Ocelot Eletre",
           "Ocelot F-Type R",
           "Ocelot V12 Speedster",
           "Ocelot Vanquish Zagato SB",
           "Ocelot Victor",
           "Ocelot XE SV Project 8",
           "Octavia RS",
           "Oracle",
           "Osiris",
           "Panto",
           "Paragon R",
           "Pariah",
           "Patriot",
           "Patriot Stretch",
           "Pegassi Huayra BC",
           "Pegassi Performante (LP640)",
           "Penetrator",
           "Penumbra",
           "Pfister 911",
           "Pfister 918 Spyder",
           "Pfister Panamera",
           "Pfister Taycan",
           "Pheonix",
           "Picador",
           "Prairie",
           "Premier",
           "Previon",
           "Progen P1",
           "Raiden",
           "Rancher XL",
           "Rapid GT",
           "Raptor",
           "Rat-Loader",
           "Rat-Truck",
           "RE-7B",
           "Reaper",
           "Rebel",
           "Rebla GTS",
           "Regina",
           "Remus",
           "Revolter",
           "Rhapsody",
           "Riata",
           "Rocoto",
           "Ruiner",
           "Rumpo",
           "Ruston",
           "Rusty Rebel",
           "Sabre Turbo",
           "Sandking SWB",
           "Sandking XL",
           "SC-1",
           "Schafter",
           "Schafter LWB",
           "Schafter LWB (Armored)",
           "Schafter V12",
           "Schlagen GT",
           "Schwarzer",
           "Seminole",
           "Sentinel Classic",
           "Sentinel XS",
           "Serrano",
           "Seven-70",
           "Shelby GT500",
           "Slamvan",
           "Slamvan Custom",
           "Specter",
           "Stafford",
           "StafVapid",
           "Stalion",
           "Stinger",
           "Stinger GT",
           "Stirling GT",
           "Streiter",
           "Stretch",
           "Sultan",
           "Sultan Classic",
           "Sultan RS",
           "Sultan RS Classic",
           "Super Diamond",
           "Surano",
           "Surge",
           "Swinger",
           "T-20",
           "Tailgater",
           "Tailgater S",
           "Taipan",
           "Tampa",
           "Tempesta",
           "Tezeract",
           "Thrax",
           "Tigon",
           "Torero",
           "Toros",
           "Tropos Rallye",
           "Truffade Chiron",
           "Tulip",
           "Turismo Classic",
           "Turismo R",
           "Tyrant",
           "Tyrus",
           "Ubermacht 760 (LI)",
           "Ubermacht I8",
           "Ubermacht M3 (E46)",
           "Ubermacht M3 (G80)",
           "Ubermacht M3 CS",
           "Ubermacht M4 (G82)",
           "Ubermacht M4 (GTS)",
           "Ubermacht M5 (CS)",
           "Ubermacht M5 (E34)",
           "Ubermacht M5 (E60)",
           "Ubermacht M5 (F90)",
           "Ubermacht M8 (F91)",
           "Ubermacht X5 (E70)",
           "Ubermacht X5 (G05)",
           "Ubermacht X5-M (F95)",
           "Ubermacht X6-M (E71)",
           "Ubermacht X6-M 2021",
           "Ubermacht X7 (G07)",
           "V-STR",
           "Vacca",
           "Vagner",
           "Vamos",
           "Vapid Mustang GT500",
           "Vapid Raptor (F150)",
           "Vectre",
           "Velierer",
           "Vigero",
           "Virgo",
           "Virgo Classic",
           "Visione",
           "Voltic",
           "Voodoo",
           "Voodoo Custom",
           "Warrener",
           "Warrener HKR",
           "Washington",
           "Windsor",
           "Windsor Drop",
           "X80 Proto",
           "XA-21",
           "XLS",
           "XLS (Armored)",
           "Yosemite",
           "Yosemite Rancher",
           "Z-Type",
           "Zentorno",
           "Zion",
           "Zion Cabrio",
           "Zion Classic",
           "Zorrusso",
           "9F",
           "9F Cabrio",
           "Dinghy",
           "Dinghy (2-Seater)",
           "Dinghy (Yacht)",
           "Jetmax",
           "Marquis",
           "SeaShark",
           "Speeder",
           "Squalo",
           "Suntrap",
           "Toro",
           "Tropic",
           "Alpha-Z1",
           "Cuban 800",
           "Dodo",
           "Duster",
           "Howard NX-25",
           "Luxor",
           "Luxor Deluxe",
           "Malard",
           "Mammatus",
           "Microlight",
           "Nimbus",
           "P-45 Nokota",
           "V-65 Molotok",
           "Velum",
           "Buzzard",
           "Frogger",
           "Maverick",
           "Sparrow",
           "SuperVolito Carbon",
           "Swift Deluxe",
           "Volatus",
           "Akuma",
           "Apocalypse Deathbike",
           "Avarus",
           "Bagger",
           "Bati 801",
           "Bati 801RR",
           "BF-400",
           "Blazer",
           "Blazer Lifeguard",
           "BMX",
           "Carbon RS",
           "Chimera",
           "Cliffhanger",
           "Cruiser",
           "Daemon",
           "Defiler",
           "Diabolus",
           "Diabolus Custom",
           "Double-T",
           "Enduro",
           "Esskey",
           "Faggio",
           "FCR 1000",
           "FCR 1000 Custom",
           "Future Shock Deathbike",
           "Gargoyle",
           "Hakuchou",
           "Hakuchou Drag",
           "Hexer",
           "Innovation",
           "Lectro",
           "Nemesis",
           "Nightblade",
           "Manchez",
           "PCJ-600",
           "Rat Bike",
           "Ruffian",
           "Sanchez",
           "Sanctus",
           "Shotaro",
           "Sovereign",
           "Street Blazer",
           "Thrust",
           "Tri-Cycles Race Bike",
           "Vader",
           "Vindicator",
           "Vortex",
           "Whippet Race Bike",
           "Wolfsbane",
           "Zombie Chopper"
       // ...rest of car names 
       // Note: Full list trimmed for brevity but would include all car names from original code
   ];
   
   // Format budget function for car ads
   function formatBudget(budget, transactionType) {
       if (!budget) {
           return transactionType === "Selling" ? "Price: Negotiable" : "Budget: Negotiable";
       }
       
       try {
           if (budget.toLowerCase().includes("m")) {
               const value = parseFloat(budget.toLowerCase().replace("m", ""));
               const formattedBudget = value.toFixed(2).replace(/\.?0+$/, "");
               return transactionType === "Selling" 
                   ? `Price: $${formattedBudget} Million` 
                   : `Budget: $${formattedBudget} Million`;
           } else if (budget.toLowerCase().includes("k")) {
               const value = parseInt(budget.toLowerCase().replace("k", "")) * 1000;
               return transactionType === "Selling" 
                   ? `Price: $${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}` 
                   : `Budget: $${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
           } else {
               const value = parseInt(budget);
               return transactionType === "Selling" 
                   ? `Price: $${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}` 
                   : `Budget: $${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
           }
       } catch (error) {
           return "Invalid Budget";
       }
   }
   
   document.addEventListener('DOMContentLoaded', () => {
       // Car Ad Form Elements
       const carNameInput = document.getElementById('car-name');
       const tradingCheckbox = document.getElementById('trading');
       const tradingCarGroup = document.getElementById('trading-car-group');
       const tradingCarInput = document.getElementById('trading-car');
       const carSubmitBtn = document.getElementById('car-submit-btn');
       const carCopyBtn = document.getElementById('car-copy-btn');
       const carOutput = document.getElementById('car-output');
       const carSuggestions = document.getElementById('car-suggestions');
       const tradingCarSuggestions = document.getElementById('trading-car-suggestions');
       
       // Trading checkbox toggle
       tradingCheckbox.addEventListener('change', function() {
           tradingCarGroup.style.display = this.checked ? 'block' : 'none';
       });
       
       // Car name suggestions
       carNameInput.addEventListener('input', function() {
           updateSuggestions(this.value, carSuggestions, carNameInput);
       });
       
       // Trading car suggestions
       tradingCarInput.addEventListener('input', function() {
           updateSuggestions(this.value, tradingCarSuggestions, tradingCarInput);
       });
       
       // Submit car ad
       carSubmitBtn.addEventListener('click', function() {
           const carName = carNameInput.value;
           const transactionType = document.querySelector('input[name="transaction"]:checked').value;
           const isTrading = tradingCheckbox.checked;
           const tradingCar = tradingCarInput.value;
           const configType = [];
           
           // Instead of returning early, use "a car" when name is empty
           const displayCarName = carName.trim() ? `"${carName}"` : "a car";
           
           if (document.getElementById('full-config').checked) {
               configType.push("full configuration");
           }
           if (document.getElementById('partial-config').checked) {
               configType.push("partial configuration");
           }
           
           const configText = configType.length > 0 ? " in " + configType.join(' and ') : "";
           
           const extras = [];
           if (document.getElementById('visual').checked) extras.push("visual upgrades");
           if (document.getElementById('insurance').checked) extras.push("insurance");
           if (document.getElementById('tuning').checked) extras.push("tuning parts");
           if (document.getElementById('turbo').checked) extras.push("turbo kit");
           if (document.getElementById('drift').checked) extras.push("drift kit");
           
           let extrasText = "";
           if (extras.length > 1) {
               extrasText = " with " + extras.slice(0, -1).join(", ") + " and " + extras[extras.length - 1];
           } else if (extras.length === 1) {
               extrasText = " with " + extras[0];
           }
           
           const budget = document.getElementById('budget').value;
           const budgetText = formatBudget(budget, transactionType);
           
           // Build the output text
           let outputText;
           
           if (isTrading) {
               if (tradingCar) {
                   outputText = `${transactionType} or trading ${displayCarName} for "${tradingCar}"${configText}${extrasText}. ${budgetText}`;
               } else {
                   outputText = `${transactionType} or trading ${displayCarName}${configText}${extrasText}. ${budgetText}`;
               }
           } else {
               outputText = `${transactionType} ${displayCarName}${configText}${extrasText}. ${budgetText}`;
           }
   
           // Check if price ends with a digit (0-9)
           const priceEndsWithDigit = /\d$/.test(budgetText);
           
           // Only add period if price doesn't end with a digit
           if (!priceEndsWithDigit) {
               outputText += ".";
           }
           
           carOutput.textContent = outputText;
       });
       
       // Copy car ad to clipboard
       carCopyBtn.addEventListener('click', async function() {
           const outputText = carOutput.textContent;
           if (!outputText) {
               showErrorPopup("Nothing to copy! Please submit the form first.");
               return;
           }
           
           try {
               await navigator.clipboard.writeText(outputText);
               showNotification();
               await updateAdCount('car');
               
               // Clear form
               carNameInput.value = "";
               document.querySelector('input[name="transaction"][value="Buying"]').checked = true;
               tradingCheckbox.checked = false;
               tradingCarInput.value = "";
               tradingCarGroup.style.display = "none";
               document.getElementById('full-config').checked = false;
               document.getElementById('partial-config').checked = false;
               document.getElementById('visual').checked = false;
               document.getElementById('insurance').checked = false;
               document.getElementById('tuning').checked = false;
               document.getElementById('turbo').checked = false;
               document.getElementById('drift').checked = false;
               document.getElementById('budget').value = "";
               carOutput.textContent = "";
           } catch (err) {
               showErrorPopup("Error copying text: " + err);
           }
       });
       
       // Helper function for updating suggestions
       function updateSuggestions(typedText, suggestionBox, inputElement) {
           const searchText = typedText.toLowerCase();
           suggestionBox.innerHTML = '';
           
           if (searchText) {
               const matches = carNames.filter(name => name.toLowerCase().includes(searchText));
               
               if (matches.length > 0) {
                   matches.forEach(match => {
                       const div = document.createElement('div');
                       div.textContent = match;
                       div.addEventListener('click', () => {
                           inputElement.value = match;
                           suggestionBox.style.display = 'none';
                       });
                       suggestionBox.appendChild(div);
                   });
                   suggestionBox.style.display = 'block';
                   return;
               }
           }
           suggestionBox.style.display = 'none';
       }
   });