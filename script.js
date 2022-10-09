const advice = {
    'Napoleon Hills': "If you don't conquer self you will be conquer by self.",

    'Aldous Huxley': "Experience is not what happens to a man, but is it what a man does from what happens to him.",

    'Roberts Schuller': "Today's accomplishment were yesterday's impossibilities",

    Rumi: "Don't be satified with stories, how things have gone with olders. Unfold your own myth.",

    'Swami Vivekananda': "Arise, awake and stop not till the goal is reached.",

    'Charles Bukowski': "Find what you love and let it kill you.",

    'Alan Kay': "The best way to predict the future is to invent it",

    'Vince Lombardi': "It's not whelther you get knocked down, it's whelther you get up.",

    'Salvador Dali': "Have no fear for perfection_ you will never reach. ",

    'Anais Nin': "Life shrinks or expand in proportion to one's courage.",

    'Albert Einstein': "Play is the highest form of research."


};

let adviceAR=document.querySelector(".advice");
let writer=document.querySelector(".author");
let authors=Object.keys(advice);
console.log(authors);

function generateAd(){
let Num= Math.floor(Math.random()*authors.length);
let author=authors[Num];
    
let words=advice[author];
    
    
    adviceAR.innerHTML='"'+words+'"';
    writer.innerHTML='-'+author


}

















