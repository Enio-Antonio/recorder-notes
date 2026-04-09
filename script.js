const fluteData = [
    { en: "C", pt: "Dó", fing: "01234567", octave: "Grave" },
    { en: "C#", pt: "Dó#", fing: "0123456 7-", octave: "Grave" },
    { en: "D", pt: "Ré", fing: "0123456", octave: "Grave" },
    { en: "D#", pt: "Ré#", fing: "012345 6-", octave: "Grave" },
    { en: "E", pt: "Mi", fing: "012345", octave: "Grave" },
    { en: "F", pt: "Fá", fing: "012346", octave: "Grave" },
    { en: "F#", pt: "Fá#", fing: "012356", octave: "Grave" },
    { en: "G", pt: "Sol", fing: "0123", octave: "Grave" },
    { en: "G#", pt: "Sol#", fing: "01245 6-", octave: "Grave" },
    { en: "A", pt: "Lá", fing: "012", octave: "Grave" },
    { en: "A#", pt: "Lá#", fing: "01356", octave: "Grave" },
    { en: "B", pt: "Si", fing: "01", octave: "Grave" },
    { en: "C", pt: "Dó", fing: "02", octave: "Média" },
    { en: "C#", pt: "Dó#", fing: "12", octave: "Média" },
    { en: "D", pt: "Ré", fing: "2", octave: "Média" },
    { en: "D#", pt: "Ré#", fing: "23456", octave: "Média" },
    { en: "E", pt: "Mi", fing: "0- 12345", octave: "Aguda" },
    { en: "F", pt: "Fá", fing: "0- 12346", octave: "Aguda" },
    { en: "F#", pt: "Fá#", fing: "0- 123 5", octave: "Aguda" },
    { en: "G", pt: "Sol", fing: "0- 123", octave: "Aguda" },
    { en: "G#", pt: "Sol#", fing: "0- 124", octave: "Aguda" },
    { en: "A", pt: "Lá", fing: "0- 12", octave: "Aguda" },
    { en: "A#", pt: "Lá#", fing: "0- 1256 7-", octave: "Aguda" },
    { en: "B", pt: "Si", fing: "0- 1245", octave: "Aguda" },
    { en: "C", pt: "Dó", fing: "0- 145", octave: "Aguda" }
];

let usePortuguese = false;
const grid = document.getElementById('noteGrid');
const toggleBtn = document.getElementById('toggleNames');

function renderButtons() {
    grid.innerHTML = '';
    fluteData.forEach((note, index) => {
        const btn = document.createElement('button');
        btn.className = 'note-btn';
        const name = usePortuguese ? note.pt : note.en;
        btn.innerHTML = `${name}<br><small>${note.octave}</small>`;
        
        btn.onclick = () => showNote(index, btn);
        grid.appendChild(btn);
    });
}

function showNote(index, btn) {
    const note = fluteData[index];
    
    // Atualiza destaque dos botões
    document.querySelectorAll('.note-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Atualiza textos
    const name = usePortuguese ? note.pt : note.en;
    document.getElementById('currentNoteName').innerText = `${name} (${note.octave})`;
    document.getElementById('fingeringNumbers').innerText = note.fing;

    // Atualiza imagem (Caminho dinâmico baseado no nome e oitava)
    const fileName = `${note.en.replace('#', 's')}_${note.octave.toLowerCase()}.png`;
    document.getElementById('fingeringImage').src = `caminho/nota/${fileName}`;
}

toggleBtn.onclick = () => {
    usePortuguese = !usePortuguese;
    toggleBtn.innerText = usePortuguese ? "Mudar para: C, D, E" : "Mudar para: Dó, Ré, Mi";
    renderButtons();
};

// Inicialização
renderButtons();
