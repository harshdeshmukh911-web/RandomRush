function random(arr){

return arr[Math.floor(Math.random()*arr.length)];

}

const adjectives=[
"Cool","Epic","Silent","Crazy","Flying","Dark","Bright","Neon","Cyber","Rapid",
"Shadow","Magic","Wild","Smart","Urban","Electric","Cosmic","Iron","Golden",
"Frozen","Stormy","Atomic","Legendary","Mystic","Turbo","Quantum","Royal",
"Hyper","Stealth","Crimson"
];

const nouns=[
"Tiger","Rocket","Ninja","Wizard","Falcon","Storm","Dragon","Knight","Hunter",
"Legend","Phantom","Blade","Galaxy","Pixel","Coder","Warrior","Samurai",
"Panther","Shark","Phoenix","Comet","Gamer","Builder","Pilot","Explorer",
"Viking","Gladiator","Guardian","Sniper","Rider"
];

const businesses=[
"Labs","Studios","Solutions","Tech","Works","Systems","Hub","Factory",
"Media","Enterprises","Digital","Networks","Group","Industries","Ventures"
];

const youtubeTopics=[
"Hidden Tricks","Secret Hacks","Things You Didn't Know",
"Crazy Experiments","Internet Mysteries","Tech Reviews",
"Gaming Challenge","Life Hacks","Speed Test","Ultimate Guide",
"Top 10 Facts","Unbelievable Discoveries"
];

const subjects=[
"Smartphones","Gaming","Space","Artificial Intelligence","The Internet",
"Programming","Robots","History","The Future","Science","Cars","Social Media"
];

const startupIdeas=[
"AI Homework Assistant","Virtual Study Planner","Smart Grocery App",
"AI Resume Builder","Online Skill Marketplace","AI Travel Planner",
"Virtual Interior Designer","Fitness Tracking AI","Pet Care App",
"Local Service Finder","Micro Learning Platform","Digital Habit Tracker"
];

const storyIdeas=[
"A robot secretly living inside a school",
"A mysterious door appears in a classroom",
"A boy finds a hidden universe in his phone",
"A time traveler stuck in the wrong century",
"A city where nobody can lie",
"A game that predicts the future",
"A forgotten planet suddenly sends signals",
"A student discovers they can pause time",
"A secret society controlling dreams",
"A library containing books of the future"
];

function generate(){

let category=document.getElementById("category").value;

let result="";

if(category==="username"){

result=random(adjectives)+random(nouns)+Math.floor(Math.random()*9999);

}

if(category==="business"){

result=random(adjectives)+" "+random(nouns)+" "+random(businesses);

}

if(category==="youtube"){

result=random(youtubeTopics)+" about "+random(subjects);

}

if(category==="startup"){

result=random(startupIdeas);

}

if(category==="story"){

result=random(storyIdeas);

}

document.getElementById("result").innerText=result;

}

function copyText(){

let text=document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Copied!");

}

function shareText(){

let text=document.getElementById("result").innerText;

if(navigator.share){

navigator.share({

title:"RandomRush Idea",
text:text

});

}else{

alert("Sharing not supported");

}

}

tsParticles.load("particles",{

particles:{

number:{value:70},

size:{value:3},

move:{speed:1},

links:{enable:true},

opacity:{value:0.4}

}

});