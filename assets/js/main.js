const logoContainer = document.querySelector('.svg-logo-container');
const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.06 75.06">
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <path fill='rgb(0, 0, 0)'
                    d="M28.31,41.58c-4.29,0-6.93,3.51-6.93,8.19s2.69,8.29,6.93,8.29,7-3.46,7-8.29S32.5,41.58,28.31,41.58Z" />
                <path fill='rgb(0, 0, 0)'
                    d="M0,0V75.06H75.06V0ZM47.44,29.25a8.74,8.74,0,0,1-7.61-3.8l0,45H35.23V58.35a8.72,8.72,0,0,1-7.6,3.8c-6.88,0-10.93-5.41-10.93-12.38s3.76-12.24,10.78-12.24a8.64,8.64,0,0,1,7.85,4.2l0-4.2,0-32.37h4.43V8.82a8.65,8.65,0,0,1,7.85-4.19c7,0,10.78,5.41,10.78,12.24S54.31,29.25,47.44,29.25Z" />
                <path fill='rgb(0, 0, 0)'
                    d="M46.76,8.67c-4.2,0-7,3.51-7,8.2s2.78,8.28,7,8.28,6.92-3.46,6.92-8.28S51.05,8.67,46.76,8.67Z" />
            </g>
        </g>
    </svg>`;

function insertSVG() {
    logoContainer.innerHTML = svg;
}
function bgChanger() {
    if (!(logoContainer.style.backgroundColor = 'rgb(0, 0, 0)')) {
        logoContainer.style.backgroundColor = 'rgb(0, 0, 0)';
    } else { logoContainer.style.backgroundColor = 'rgb(255, 255, 255)' };
}
function fillChanger(element) {
    if ((element.style.fill = 'rgb(255, 255, 255)')) {
        element.style.fill = 'rgb(0 ,0 ,0)'
    } else {
        element.style.fill = 'rgb(255, 255, 255)';
    };
}
logoContainer.addEventListener('click', function () {
    bgChanger();
    document.querySelectorAll('path').forEach(function (path) {
        fillChanger(path);
    })
    //insertSVG();
})

insertSVG();