var subjects=['Monkey','Mr.Nook','Spiderman','Princess Zela','Taylor Swift','Mulan','Queen Elsa','Gatsby','SuperMario','Cinderella','Santa'];
var preps=['inside','at','on','below','above','under','behind','by','throughout','in','near'];
var mods=['small','big','fat','fluffy','soft','orange','bitter','warm','horrible','sweating','smelly'];
var objects=['castle','milk','dog','lips','pool','chair','TV','table','boat','pig','room'];
var punctuations=['?','.',':3','!',',','/','!!!!!','-','...','~'];



function wordGenerator(){
    var subject = subjects[Math.floor(Math.random()* subjects.length)];
    var prep = preps[Math.floor(Math.random()* preps.length)];
    var mod = mods[Math.floor(Math.random()* mods.length)];
    var object = objects[Math.floor(Math.random()* objects.length)];
    var punctuation = punctuations[Math.floor(Math.random()* punctuations.length)];
    // console.log();
    var sentence=subject+' '+prep+' '+mod+' '+object+punctuation;
    document.getElementById('sentence').innerHTML = sentence;
    document.title = sentence;
    
}

window.setInterval(function() {
    wordGenerator();
}, 4000);

wordGenerator();
