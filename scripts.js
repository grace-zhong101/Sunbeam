const encounter = {
    text: "Welcome to the bakery!",
    text: "Unfortunately, it's my first day on the job so all I have is moldy bagels. Would help me learn to make a cake?",
    choices: [
        {
            text: "Sure, I'd love to help!",
            result: "Great! let's get started. What do we need first?"
        },
        {
            text: "Sorry, I'm not interested.",
            result: "Wrong answer pal! You're helping me make a cake."
        },
    ]
}
const stages = ['solve the recipe scramble', 'supermarket fridge', 'shelf', 'smtidk', 'measure', 'whip', 'iceing', 'decorate'];
//SCRAMBELLLLLLLLLLLO//
const solverecipe = [
    'EGGS','MILK','BUTTER','HEAVY CREAM','HALF-AND-HALF',
    'FLOUR','SUGAR','BAKING POWDER','VANILLA EXTRACT','POWDERED SUGAR','STRAWBERRIES'  
];
function lettersOnly(w){ return w.replace(/[^A-Z]/gi,'').toUpperCase(); }
function shuffleStr(s){
  const a = s.split('');
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  if(a.join('')===s) return shuffleStr(s);
  return a;
}
function renderscram (){
    const words = [...RECIPE_WORDS].sort(()=>Math.random()-0.5).slice(0,4);
    let wi = 0;
    document.body.style.backgroundImage = "url('scramble.png')"
    document.body.style.backgroundSize = "cover"

    function renderWord(){
        const word = words[wi];
        const letters = shuffleStr(word);
        let answer = [];
        screen.innerHTML = `
          <p class="lead">Unscramble the recipe card</p>
          <p class="sub">Word ${wi+1} of ${words.length} — tap the letters in order to type.</p>
          <div class="stage-body">
            <div class="answer-slots" id="slots"></div>
            <div class="letters" id="tiles"></div>
            <div class="hint">${word.length} letters</div>
          </div>`;
        const slotsEl = document.getElementById('slots');
        const tilesEl = document.getElementById('tiles');
        slotsEl.innerHTML = word.split('').map(()=>`<div class="slot"></div>`).join('');
        tilesEl.innerHTML = letters.map((l,i)=>`<div class="tile" data-i="${i}">${l}</div>`).join('');

        tilesEl.querySelectorAll('.tile').forEach(tile=>{
            tile.addEventListener('click', ()=>{
              if(tile.classList.contains('used')) return;
              answer.push(tile.textContent);
              tile.classList.add('used');
              const slots = slotsEl.querySelectorAll('.slot');
              slots[answer.length-1].textContent = tile.textContent;
              if(answer.length === word.length){
                if(answer.join('') === word){
                  toast('Nice! ' + word);
                  setTimeout(()=>{
                    wi++;
                    if(wi < words.length) renderWord();
                    else next();
                  }, 500);
                } else {
                  setTimeout(()=>{
                    answer = [];
                    tilesEl.querySelectorAll('.tile').forEach(t=>t.classList.remove('used'));
                    slotsEl.querySelectorAll('.slot').forEach(s=>s.textContent='');
                    toast('Not quite — try again');
                  }, 400);
                }
              }
            });
          });
        }
    renderWord();
}
