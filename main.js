//  Staps
// Staps-1 -- create onload handler
// Staps-2 -- random color generator Function 
// Staps-3 -- Collector all necessary references
// Staps-4 -- Handle the click event

window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('Click-btn');

    btn.addEventListener('click', function() {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    });
}

function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 2565);

    return `rgb(${red}, ${green}, ${blue})`;
}