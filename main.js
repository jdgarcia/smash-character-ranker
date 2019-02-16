const elA = document.getElementById('A');
const elB = document.getElementById('B');
const resultsDiv = document.getElementById('results');

const images = {
  'Mario': 'https://www.ssbwiki.com/images/thumb/4/44/Mario_SSBU.png/200px-Mario_SSBU.png',
  'Donkey Kong': 'https://www.ssbwiki.com/images/thumb/c/c9/Donkey_Kong_SSBU.png/200px-Donkey_Kong_SSBU.png',
  'Link': 'https://www.ssbwiki.com/images/thumb/8/84/Link_SSBU.png/200px-Link_SSBU.png',
  'Samus': 'https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/200px-Samus_SSBU.png',
  'Dark Samus': 'https://www.ssbwiki.com/images/thumb/a/a6/Dark_Samus_SSBU.png/200px-Dark_Samus_SSBU.png',
  'Yoshi': 'https://www.ssbwiki.com/images/thumb/8/8d/Yoshi_SSBU.png/200px-Yoshi_SSBU.png',
  'Kirby': 'https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/200px-Kirby_SSBU.png',
  'Fox': 'https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/200px-Fox_SSBU.png',
  'Pikachu': 'https://www.ssbwiki.com/images/thumb/9/93/Pikachu_SSBU.png/200px-Pikachu_SSBU.png',
  'Luigi': 'https://www.ssbwiki.com/images/thumb/b/bb/Luigi_SSBU.png/182px-Luigi_SSBU.png',
  'Ness': 'https://www.ssbwiki.com/images/thumb/8/82/Ness_SSBU.png/200px-Ness_SSBU.png',
  'Captain Falcon': 'https://www.ssbwiki.com/images/thumb/d/da/Captain_Falcon_SSBU.png/200px-Captain_Falcon_SSBU.png',
  'Jigglypuff': 'https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/200px-Jigglypuff_SSBU.png',
  'Peach': 'https://www.ssbwiki.com/images/thumb/7/74/Peach_SSBU.png/177px-Peach_SSBU.png',
  'Daisy': 'https://www.ssbwiki.com/images/thumb/2/21/Daisy_SSBU.png/200px-Daisy_SSBU.png',
  'Bowser': 'https://www.ssbwiki.com/images/thumb/4/49/Bowser_SSBU.png/200px-Bowser_SSBU.png',
  'Ice Climbers': 'https://www.ssbwiki.com/images/thumb/1/12/Ice_Climbers_SSBU.png/200px-Ice_Climbers_SSBU.png',
  'Sheik': 'https://www.ssbwiki.com/images/thumb/0/00/Sheik_SSBU.png/200px-Sheik_SSBU.png',
  'Zelda': 'https://www.ssbwiki.com/images/thumb/c/c8/Zelda_SSBU.png/200px-Zelda_SSBU.png',
  'Dr. Mario': 'https://www.ssbwiki.com/images/thumb/3/3f/Dr._Mario_SSBU.png/200px-Dr._Mario_SSBU.png',
  'Pichu': 'https://www.ssbwiki.com/images/thumb/c/c1/Pichu_SSBU.png/200px-Pichu_SSBU.png',
  'Falco': 'https://www.ssbwiki.com/images/thumb/8/80/Falco_SSBU.png/200px-Falco_SSBU.png',
  'Marth': 'https://www.ssbwiki.com/images/thumb/e/e9/Marth_SSBU.png/200px-Marth_SSBU.png',
  'Lucina': 'https://www.ssbwiki.com/images/thumb/d/dc/Lucina_SSBU.png/200px-Lucina_SSBU.png',
  'Young Link': 'https://www.ssbwiki.com/images/thumb/8/8a/Young_Link_SSBU.png/200px-Young_Link_SSBU.png',
  'Ganondorf': 'https://www.ssbwiki.com/images/thumb/9/91/Ganondorf_SSBU.png/198px-Ganondorf_SSBU.png',
  'Mewtwo': 'https://www.ssbwiki.com/images/thumb/d/de/Mewtwo_SSBU.png/198px-Mewtwo_SSBU.png',
  'Roy': 'https://www.ssbwiki.com/images/thumb/9/9d/Roy_SSBU.png/200px-Roy_SSBU.png',
  'Chrom': 'https://www.ssbwiki.com/images/thumb/5/57/Chrom_SSBU.png/170px-Chrom_SSBU.png',
  'Mr. Game & Watch': 'https://www.ssbwiki.com/images/thumb/c/cb/Mr._Game_%26_Watch_SSBU.png/200px-Mr._Game_%26_Watch_SSBU.png',
  'Meta Knight': 'https://www.ssbwiki.com/images/thumb/0/00/Meta_Knight_SSBU.png/200px-Meta_Knight_SSBU.png',
  'Pit': 'https://www.ssbwiki.com/images/thumb/3/38/Pit_SSBU.png/200px-Pit_SSBU.png',
  'Dark Pit': 'https://www.ssbwiki.com/images/thumb/0/09/Dark_Pit_SSBU.png/190px-Dark_Pit_SSBU.png',
  'Zero Suit Samus': 'https://www.ssbwiki.com/images/thumb/f/f0/Zero_Suit_Samus_SSBU.png/200px-Zero_Suit_Samus_SSBU.png',
  'Wario': 'https://www.ssbwiki.com/images/thumb/0/04/Wario_SSBU.png/200px-Wario_SSBU.png',
  'Snake': 'https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/164px-Snake_SSBU.png',
  'Ike': 'https://www.ssbwiki.com/images/thumb/8/86/Ike_SSBU.png/200px-Ike_SSBU.png',
  'Pokemon Trainer': 'https://www.ssbwiki.com/images/thumb/2/28/Pok%C3%A9mon_Trainer_%28solo%29_SSBU.png/200px-Pok%C3%A9mon_Trainer_%28solo%29_SSBU.png',
  'Diddy Kong': 'https://www.ssbwiki.com/images/thumb/a/a7/Diddy_Kong_SSBU.png/193px-Diddy_Kong_SSBU.png',
  'Lucas': 'https://www.ssbwiki.com/images/thumb/8/81/Lucas_SSBU.png/200px-Lucas_SSBU.png',
  'Sonic': 'https://www.ssbwiki.com/images/thumb/b/ba/Sonic_SSBU.png/200px-Sonic_SSBU.png',
  'King Dedede': 'https://www.ssbwiki.com/images/thumb/f/f5/King_Dedede_SSBU.png/200px-King_Dedede_SSBU.png',
  'Olimar': 'https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/200px-Olimar_SSBU.png',
  'Lucario': 'https://www.ssbwiki.com/images/thumb/0/08/Lucario_SSBU.png/200px-Lucario_SSBU.png',
  'R.O.B.': 'https://www.ssbwiki.com/images/thumb/3/38/R.O.B._%28JPN%29_SSBU.png/200px-R.O.B._%28JPN%29_SSBU.png',
  'Toon Link': 'https://www.ssbwiki.com/images/thumb/5/56/Toon_Link_SSBU.png/190px-Toon_Link_SSBU.png',
  'Wolf': 'https://www.ssbwiki.com/images/thumb/8/8a/Wolf_SSBU.png/200px-Wolf_SSBU.png',
  'Villager': 'https://www.ssbwiki.com/images/thumb/a/ac/Villager_SSBU.png/200px-Villager_SSBU.png',
  'Mega Man': 'https://www.ssbwiki.com/images/thumb/4/46/Mega_Man_SSBU.png/200px-Mega_Man_SSBU.png',
  'Wii Fit Trainer': 'https://www.ssbwiki.com/images/thumb/f/ff/Wii_Fit_Trainer_SSBU.png/200px-Wii_Fit_Trainer_SSBU.png',
  'Rosalina & Luma': 'https://www.ssbwiki.com/images/thumb/1/16/Rosalina_%26_Luma_SSBU.png/200px-Rosalina_%26_Luma_SSBU.png',
  'Little Mac': 'https://www.ssbwiki.com/images/thumb/5/53/Little_Mac_SSBU.png/200px-Little_Mac_SSBU.png',
  'Greninja': 'https://www.ssbwiki.com/images/thumb/d/da/Greninja_SSBU.png/200px-Greninja_SSBU.png',
  'Palutena': 'https://www.ssbwiki.com/images/thumb/6/6b/Palutena_SSBU.png/190px-Palutena_SSBU.png',
  'Pac-Man': 'https://www.ssbwiki.com/images/thumb/0/03/Pac-Man_SSBU.png/200px-Pac-Man_SSBU.png',
  'Robin': 'https://www.ssbwiki.com/images/thumb/8/82/Robin_SSBU.png/200px-Robin_SSBU.png',
  'Shulk': 'https://www.ssbwiki.com/images/thumb/0/0f/Shulk_SSBU.png/200px-Shulk_SSBU.png',
  'Bowser Jr.': 'https://www.ssbwiki.com/images/thumb/2/2b/Bowser_Jr._SSBU.png/200px-Bowser_Jr._SSBU.png',
  'Duck Hunt': 'https://www.ssbwiki.com/images/thumb/d/d8/Duck_Hunt_SSBU.png/200px-Duck_Hunt_SSBU.png',
  'Ryu': 'https://www.ssbwiki.com/images/thumb/6/61/Ryu_SSBU.png/200px-Ryu_SSBU.png',
  'Ken': 'https://www.ssbwiki.com/images/thumb/f/f6/Ken_SSBU.png/200px-Ken_SSBU.png',
  'Cloud': 'https://www.ssbwiki.com/images/thumb/b/b3/Cloud_SSBU.png/200px-Cloud_SSBU.png',
  'Corrin': 'https://www.ssbwiki.com/images/thumb/c/c4/Corrin_SSBU.png/200px-Corrin_SSBU.png',
  'Bayonetta': 'https://www.ssbwiki.com/images/thumb/7/7c/Bayonetta_SSBU.png/200px-Bayonetta_SSBU.png',
  'Inkling': 'https://www.ssbwiki.com/images/thumb/2/2e/Inkling_SSBU.png/200px-Inkling_SSBU.png',
  'Ridley': 'https://www.ssbwiki.com/images/thumb/2/27/Ridley_SSBU.png/200px-Ridley_SSBU.png',
  'Simon': 'https://www.ssbwiki.com/images/thumb/9/95/Simon_SSBU.png/200px-Simon_SSBU.png',
  'Richter': 'https://www.ssbwiki.com/images/thumb/c/c2/Richter_SSBU.png/200px-Richter_SSBU.png',
  'King. K. Rool': 'https://www.ssbwiki.com/images/thumb/b/b6/King_K._Rool_SSBU.png/200px-King_K._Rool_SSBU.png',
  'Isabelle': 'https://www.ssbwiki.com/images/thumb/2/2b/Isabelle_SSBU.png/200px-Isabelle_SSBU.png',
  'Incineroar': 'https://www.ssbwiki.com/images/thumb/c/c4/Incineroar_SSBU.png/200px-Incineroar_SSBU.png',
  'Piranha Plant': 'https://www.ssbwiki.com/images/thumb/f/f0/Piranha_Plant_SSBU.png/200px-Piranha_Plant_SSBU.png',
  'Mii Brawler': 'https://www.ssbwiki.com/images/thumb/e/e4/Mii_Brawler_SSBU.png/200px-Mii_Brawler_SSBU.png',
  'Mii Swordfighter': 'https://www.ssbwiki.com/images/thumb/f/fa/Mii_Swordfighter_SSBU.png/200px-Mii_Swordfighter_SSBU.png',
  'Mii Gunner': 'https://www.ssbwiki.com/images/thumb/e/e5/Mii_Gunner_SSBU.png/200px-Mii_Gunner_SSBU.png',
};

const list = Object.keys(images);
for (let i = list.length - 1; i > 0; i--) {
  const rand = Math.floor(Math.random() * (i + 1));
  const temp = list[i];
  list[i] = list[rand];
  list[rand] = temp;
}

const ordered = [list.shift()];

let A;
let B;
let minIndex;
let maxIndex;
let currIndex;

function log() {
  console.log('list:', list.join(','));
  console.log('ordr:', ordered.join(','));
  console.log(minIndex, currIndex, maxIndex);
}

function setupNext() {
  if (ordered.length > 1) {
    resultsDiv.innerHTML = ordered.map((x, i) => `${i + 1}. ${x}`).join('<br >');
  }

  if (list.length === 0) {
    elA.remove();
    elB.remove();
    return;
  }

  currIndex = Math.floor(ordered.length / 2);

  A = ordered[currIndex];
  B = list.shift();

  minIndex = 0;
  maxIndex = ordered.length;

  elA.src = '';
  elB.src = '';
  elA.src = images[A];
  elB.src = images[B];

  log();
}

function chooseA() {
  minIndex = currIndex + 1;
  checkStuff();
}

function chooseB() {
  maxIndex = currIndex;
  checkStuff();
}

function checkStuff() {
  if (minIndex === maxIndex) {
    ordered.splice(minIndex, 0, B);
    setupNext();
    return;
  }

  currIndex = Math.floor((minIndex + maxIndex) / 2);
  A = ordered[currIndex];
  elA.src = '';
  elA.src = images[A];

  log();
}

setupNext();

elA.addEventListener('click', chooseA);
elB.addEventListener('click', chooseB);
