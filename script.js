// Anti-Close Protection
function toggleAntiClose() {
    const toggle = document.getElementById('anti-close-toggle');
    window.onbeforeunload = toggle.checked ? () => "Are you sure you want to leave? Your progress may be lost." : null;
}

// About:Blank Cloaker
function cloakAboutBlank() {
    const newWindow = window.open('about:blank', '_blank');
    const iframe = newWindow.document.createElement('iframe');
    iframe.style.cssText = 'width: 100%; height: 100%; border: none;';
    iframe.src = window.location.href;
    newWindow.document.body.appendChild(iframe);
    newWindow.document.body.style.margin = '0';
    window.close();
}

// Tab Cloaker
function updateTabTitle() {
    const titleInput = document.getElementById('tab-title').value;
    document.title = titleInput || 'Luffy';
}

function updateFavicon() {
    const faviconSelect = document.getElementById('favicon-select').value;
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconSelect || '';
    document.head.appendChild(link);
}

// Clock Functionality
function updateTime() {
    document.getElementById('current-time').textContent = new Date().toLocaleTimeString();
    requestAnimationFrame(updateTime);
}
requestAnimationFrame(updateTime);

// Game Data (Full List Restored)
const games = [
    { id: 'basketbros', title: 'Basket Bros', url: 'https://bluwarp-is-terrible.netlify.app/games/basketbros/', preview: 'https://media-hosting.imagekit.io//bcf89a0410b6477f/basket-bros%20(1)-modified.png', desc: 'Two-player basketball madness!' },
    { id: 'tabs', title: 'Tabs', url: 'https://bluwarp-is-terrible.netlify.app/games/tabs/', preview: 'https://media-hosting.imagekit.io//36d76c91cc1a4465/TABS-1.0%20Cropped-modified.png', desc: 'Totally Accurate Battle Simulator' },
    { id: 'crossy', title: 'Crossy', url: 'https://bluwarp-is-terrible.netlify.app/games/crossy/', preview: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/76fc1b000203faf71b77a75b10022142.png', desc: 'Cross the road if you dare!' },
    { id: 'cookieclicker', title: 'Cookie Clicker', url: 'https://bluwarp-is-terrible.netlify.app/games/cookieclicker/', preview: 'https://www.blackflix.com/wp-content/uploads/cookie-clicker-logo.webp', desc: 'Click to bake cookies!' },
    { id: 'clusterrush', title: 'Cluster Rush', url: 'https://bluwarp-is-terrible.netlify.app/games/clusterrush/', preview: 'https://pixiapi.com/wp-content/uploads/2023/04/cluster-rush-game-icon-1.jpg', desc: 'Jump across trucks!' },
    { id: 'drifthunters', title: 'Drift Hunters', url: 'https://bluwarp-is-terrible.netlify.app/games/drifthunters/', preview: 'https://www.yoosfuhl.com/wp-content/uploads/2024/11/Drift-Hunters-game.jpg', desc: 'Drift like a pro!' },
    { id: 'dinogame', title: 'Dino Game', url: 'https://bluwarp-is-terrible.netlify.app/games/dinogame/', preview: 'https://miro.medium.com/v2/resize:fit:1200/1*-BQdHzQDa52LzlsSBGQp8Q.jpeg', desc: 'Jump over cacti!' },
    { id: 'fnf', title: "Friday Night Funkin'", url: 'https://bluwarp-is-terrible.netlify.app/games/fnf/', preview: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/7e/f1/ce/7ef1cee7-542e-b6f8-5201-e7c5f9b60894/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png', desc: 'Rhythm battle!' },
    { id: 'fruitninja', title: 'Fruit Ninja', url: 'https://bluwarp-is-terrible.netlify.app/games/fruitninja/', preview: 'https://preteen-ministry.net/cdn/shop/products/Fruit_Ninja_-_Cover_1024x.jpg?v=1507262323', desc: 'Slice some fruit!' },
    { id: 'gdlite', title: 'Geometry Dash', url: 'https://bluwarp-is-terrible.netlify.app/games/gdlite/', preview: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/12/cach-tai-geometry-dash-15.jpg', desc: 'Jump and dash!' },
    { id: 'happywheels', title: 'Happy Wheels', url: 'https://bluwarp-is-terrible.netlify.app/games/happywheels/', preview: 'https://happy-wheels.co/data/image/game/happy-wheels1.jpg', desc: 'Chaotic fun!' },
    { id: 'infiltratingtheairship', title: 'Infiltrating The Airship', url: 'https://bluwarp-is-terrible.netlify.app/games/infiltratingtheairship/', preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gL4hsOM-WhnBcI7coqctCkERZojeSPrUkw&s', desc: 'Stealth adventure!' },
    { id: 'infinitecraft', title: 'Infinite Craft', url: 'https://bluwarp-is-terrible.netlify.app/games/infinitecraft/', preview: 'https://images.immediate.co.uk/production/volatile/sites/3/2024/03/Infinite-Craft-Whole-List-21882d0.jpg', desc: 'Create anything!' },
    { id: 'monkeymart', title: 'Monkey Mart', url: 'https://bluwarp-is-terrible.netlify.app/games/monkeymart/', preview: 'https://play-lh.googleusercontent.com/rWReIdyvDaYJPeOxn7hbC0b-96ixGpQKM_EndiQa3SUME8TtI_rNUcI4qsw5teK9mqk', desc: 'Run a monkey supermarket!' },
    { id: 'driftboss', title: 'Drift Boss', url: 'https://bluwarp-is-terrible.netlify.app/games/driftboss/', preview: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/baf55f009fd63dd63c760a5dcfe79615.png', desc: 'Master the art of drifting!' },
    { id: 'superhot', title: 'Super Hot', url: 'https://bluwarp-is-terrible.netlify.app/games/superhot/', preview: 'https://www.pjsgames.com/cdn/shop/products/SUPERHOT-PC-Game-Steam-Digital-Download-Screenshot-3.jpg?v=1568953045&width=1080', desc: 'Time moves when you move!' },
    { id: 'tetris', title: 'Tetris', url: 'https://bluwarp-is-terrible.netlify.app/games/tetris/', preview: 'https://m.media-amazon.com/images/I/61M3rDwh4qL.png', desc: 'Stack the blocks!' },
    { id: 'rooftop', title: 'Rooftop Snipers', url: 'https://bluwarp-is-terrible.netlify.app/games/rooftop/', preview: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/c127771edb0e821e4109b7058ae3f094.jpeg', desc: 'Snipe from the rooftops!' },
    { id: 'rooftop2', title: 'Rooftop Snipers 2', url: 'https://bluwarp-is-terrible.netlify.app/games/rooftop2/', preview: 'https://static.gogy.com/ogimages/rooftop-snipers-2.jpg', desc: 'More rooftop action!' },
    { id: 'recoil', title: 'Recoil', url: 'https://bluwarp-is-terrible.netlify.app/games/recoil/', preview: 'https://23azostore.github.io/img/recoil.png', desc: 'Physics-based shooter!' },
    { id: 'backrooms2d', title: 'Backrooms 2D', url: 'https://bluwarp-is-terrible.netlify.app/games/backrooms2d/', preview: 'https://play-lh.googleusercontent.com/qsajZ3WxItUCjA08_AaZyxbmRpPT87uHiYOyDU-e5444ALBZe23nPZYi7pTU5nFCOPk', desc: 'Escape the eerie maze!' },
    { id: 'changinmath', title: 'Smash Karts', url: 'https://channginmathisfun.netlify.app/', preview: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4CSkYGqKz1TcPzd-VHfg75djXz7yWLzLhj3myMPmN3hMS5dRbRnQDyOoxuhH9K9LAIC95', desc: 'Kart combat chaos!' },
    { id: 'rocketscience', title: 'Blumgi Rocket', url: 'https://rocketscience123.netlify.app/', preview: 'https://hyhygames.com/thumbs/blumgi-rocket-game-blumgi-rocket-1.webp', desc: 'Rocket through obstacles!' },
    { id: 'run3plus', title: 'Run 3 Plus', url: 'https://bluwarp-is-terrible.netlify.app/games/run3plus/', preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93c_LkpCb0ysBZOUQ_JW7qbH85r95LTLm_T4VgT87htxUkYU_BzDdN3w2K-M4XiS6xGk&usqp=CAU', desc: 'Run through space!' },
    { id: 'funnyshooter2', title: 'Funny Shooter 2', url: 'https://bluwarp-is-terrible.netlify.app/games/funnyshooter2/', preview: 'https://www.virlan.co/unblocked-games/wp-content/uploads/2024/01/Funny-Shooter.jpg', desc: 'Quirky shooting fun!' },
    { id: 'doom', title: 'Doom', url: 'https://bluwarp-is-terrible.netlify.app/games/doom/', preview: 'https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg', desc: 'Classic demon slaying!' },
    { id: 'fnfmidfight', title: 'FNF Midfight', url: 'https://bluwarp-is-terrible.netlify.app/games/fnfmidfight/', preview: 'https://i1.sndcdn.com/artworks-bBQQ5CszW1bbOxNn-R2xnNA-t500x500.jpg', desc: 'More funky rhythms!' },
    { id: 'slope2', title: 'Slope 2', url: 'https://bluwarp-is-terrible.netlify.app/games/slope2/', preview: 'https://slope-2.io/cache/data/image/game/slope-game-f220x175.webp', desc: 'Roll down the slopes!' },
    { id: 'stack', title: 'Stack', url: 'https://bluwarp-is-terrible.netlify.app/games/stack/', preview: 'https://play-lh.googleusercontent.com/WRlGQXa9Pav7YZPW-P5X8PAga0lF2T1BAzmasxB9qV_1_om5DgmMbxOFo2SK8ZN5K5k', desc: 'Build the tallest tower!' },
    { id: 'bloxors', title: 'Bloxors', url: 'https://bluwarp-is-terrible.netlify.app/games/bloxors/', preview: 'https://www.coolmathgames.com/sites/default/files/Bloxorz_OG-logo.jpg', desc: 'Roll the block to victory!' },
    { id: 'stickmanhook', title: 'Stickman Hook', url: 'https://bluwarp-is-terrible.netlify.app/games/stickmanhook/', preview: 'https://external-preview.redd.it/1fD-ztKuJnE4obadBwtDp7xpaDPE9CSVIr0wRXCpVfI.jpg?auto=webp&s=85fde16a0d50d4578b778fd910ccdbff6a86aede', desc: 'Swing to the finish!' },
    { id: 'fnaf2', title: 'FNAF', url: 'https://bluwarp-is-terrible.netlify.app/games/fnaf2/', preview: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_FiveNightsAtFreddys_image1600w.jpg', desc: 'Survive the night!' },
    { id: 'bitlife', title: 'BitLife', url: 'https://bluwarp-is-terrible.netlify.app/games/bitlife/', preview: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64', desc: 'Live a virtual life!' },
    { id: 'flappy', title: 'Flappy', url: 'https://bluwarp-is-terrible.netlify.app/games/flappy/', preview: 'https://techcrunch.com/wp-content/uploads/2014/02/flappy.jpeg', desc: 'Fly through pipes!' },
    { id: 'scienceisfundamental', title: 'Tomb Of The Mask', url: 'https://scienceisfundamental.netlify.app/', preview: 'https://play-lh.googleusercontent.com/ATGr-U4JBK2VjFzKGK9eMMkrDxJaazadOUoz_7Yl0U5NrWSFcFUzEtNurWXYzVWc8uOO', desc: 'Navigate the maze!' },
    { id: 'worldshardestgame2', title: "World's Hardest Game 2", url: 'https://bluwarp-is-terrible.netlify.app/games/worldshardestgame2/', preview: 'https://1.bp.blogspot.com/-DPDDWvTtF7w/Tc-2W5cJ67I/AAAAAAAAABE/iNJox3CMCI4/s1600/Worlds-hardest-game-2.gif', desc: 'Challenge accepted?' },
    { id: 'stickmanclimb', title: 'Stickman Climb', url: 'https://bluwarp-is-terrible.netlify.app/games/stickmanclimb/', preview: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/77e18f5c999b56d24ca7ebfa493cac98.png', desc: 'Climb to the top!' },
    { id: 'amongus', title: 'Among Us', url: 'https://bluwarp-is-terrible.netlify.app/games/amongus/', preview: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg', desc: 'Find the impostor!' },
    { id: '1v1lol', title: '1v1 LOL', url: 'https://bluwarp-is-terrible.netlify.app/games/1v1lol/', preview: 'https://assets.about.me/background/users/u/n/b/unblockedgame1v1lol_1722245404_678.jpg', desc: 'Battle it out!' },
    { id: 'precisionclient', title: 'Precision Client', url: 'https://bluwarp-is-terrible.netlify.app/games/precisionclient/', preview: 'https://w0.peakpx.com/wallpaper/653/217/HD-wallpaper-minecraft-logo-minecraft-minecraft-landscape-minecraft-logo-minecraft.jpg', desc: 'Minecraft with a twist!' },
    { id: 'ovo', title: 'Ovo', url: 'https://bluwarp-is-terrible.netlify.app/games/ovo/', preview: 'https://www.coolmathgames.com/sites/default/files/OvO_OG-logo.jpg', desc: 'Platformer precision!' },
    { id: 'polytrack', title: 'Poly Track', url: 'https://scienceisfun-shelbyco.netlify.app/', preview: 'https://i.ytimg.com/vi/wXsG1d9TzdI/maxresdefault.jpg', desc: 'Race in style!' },
    { id: 'pakohighway', title: 'Pako Highway', url: 'https://bluwarp-is-terrible.netlify.app/games/pakohighway/', preview: 'https://i.ytimg.com/vi/UCw2KU5R9N8/maxresdefault.jpg', desc: 'High-speed chase!' },
    { id: 'retrobowl', title: 'Retro Bowl', url: 'https://bluwarp-is-terrible.netlify.app/games/retrobowl/', preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRA6pJrqYZqAE_rrIY5mr_-ZJMcJGIheNIneIPyue_kpwBsF07aRfj2k_Izo612U2FkQ&usqp=CAUQ', desc: 'Football nostalgia!' },
    { id: 'rocketsoccer', title: 'Rocket Soccer', url: 'https://bluwarp-is-terrible.netlify.app/games/rocketsoccer/', preview: 'https://play-lh.googleusercontent.com/uadUpjhejn15mV1wGur0E52IX_WySHkuD5RI8Bw4bKDMYVNH4A1gVSP4ZSSvY3QitbA=w526-h296-rw', desc: 'Soccer with rockets!' },
    { id: 'skibidi1v100', title: 'Skibidi 1v100', url: 'https://bluwarp-is-terrible.netlify.app/games/skibidi1v100/', preview: 'https://images.crazygames.com/you-vs-100-skibidi-toilets/20230731115530/you-vs-100-skibidi-toilets-cover?auto=format,compress&q=75&cs=strip', desc: 'Epic toilet showdown!' },
    { id: 'subwaysurfers', title: 'Subway Surfers', url: 'https://bluwarp-is-terrible.netlify.app/games/subwaysurfers/', preview: 'https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/9521345384e4406473b46d69d29abe3c.png', desc: 'Run from the cops!' },
    { id: 'timeshooter3', title: 'Time Shooter 3', url: 'https://bluwarp-is-terrible.netlify.app/games/timeshooter3/', preview: 'https://images.crazygames.com/time-shooter-3-swat_16x9/20241113103402/time-shooter-3-swat_16x9-cover?auto=format,compress&q=75&cs=strip', desc: 'Time-bending action!' },
    { id: 'tanukisunset', title: 'Tanuki Sunset', url: 'https://bluwarp-is-terrible.netlify.app/games/tanukisunset/', preview: 'https://i.ytimg.com/vi/AOAYVgm_V_4/maxresdefault.jpg', desc: 'Skate into the sunset!' },
    { id: 'tunnelrush', title: 'Tunnel Rush', url: 'https://bluwarp-is-terrible.netlify.app/games/tunnelrush/', preview: 'https://i.ytimg.com/vi/AaaXNVdIFFU/hqdefault.jpg', desc: 'Race through tunnels!' },
    { id: 'templerun2', title: 'Temple Run 2', url: 'https://bluwarp-is-terrible.netlify.app/games/templerun2/', preview: 'https://cdn2.omg.rocks/i/fEyiXkUvc5f/temple-run-2.png', desc: 'Escape the temple!' },
    { id: 'bindingofisaac', title: 'The Binding of Isaac', url: 'https://bluwarp-is-terrible.netlify.app/games/bindingofisaac/', preview: 'https://i.ytimg.com/vi/oG1CC8x873M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCUaGamzfGamm5L_on8J25hlK_JOQ', desc: 'Roguelike adventure!' },
    { id: 'jetpackjoyride', title: 'Jetpack Joyride', url: 'https://bluwarp-is-terrible.netlify.app/games/jetpackjoyride/', preview: 'https://imgs.crazygames.com/jetpack-joyride-pcp_16x9/20250121090354/jetpack-joyride-pcp_16x9-cover?metadata=none&quality=40&width=1200&height=630&fit=crop', desc: 'Fly with a jetpack!' },
    { id: 'yohoho', title: 'Yohoho', url: 'https://bluwarp-is-terrible.netlify.app/games/yohoho/', preview: 'https://images.crazygames.com/games/yohoho-io/cover-1585071171896.jpg?auto=format,compress&q=75&cs=strip', desc: 'Pirate battle royale!' }
];

// Movie/TV Show Data (Example Google Drive Links)
const movies = [
    { id: 'movie1', title: 'The Matrix', url: 'https://drive.google.com/file/d/1EXAMPLE_MATRIX_ID/preview', preview: 'https://via.placeholder.com/260x150?text=The+Matrix', desc: 'Reality is a simulation.' },
    { id: 'movie2', title: 'Inception', url: 'https://drive.google.com/file/d/1EXAMPLE_INCEPTION_ID/preview', preview: 'https://via.placeholder.com/260x150?text=Inception', desc: 'Dream within a dream.' },
    { id: 'show1', title: 'Stranger Things S1E1', url: 'https://drive.google.com/file/d/1EXAMPLE_STRANGER_ID/preview', preview: 'https://via.placeholder.com/260x150?text=Stranger+Things', desc: '80s sci-fi horror.' }
];

// Page Navigation Functions
function hideAllSections() {
    document.querySelectorAll('.welcome, .page-section').forEach(section => section.style.display = 'none');
}

function showHome() {
    hideAllSections();
    const homeSection = document.getElementById('home');
    homeSection.style.display = 'block';
    homeSection.innerHTML = `
        <img src="https://media-hosting.imagekit.io/72c1e26f18b8417e/one-piece-luffy-straw-hat-doodle%20(1).gif?Expires=1837700705&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hDSMpgI-VaQEh~I~KOGOBWrUCntOnm2rLA5r44kZ50oeaSYgNc7Z2IR~qRWXR2-LRhtevyhwjYeOrZl1GeBQzzLeZuNJxp3P4D1QlMWbbJ9scjdsvHLPh7iiowuNS4wfn6qORGUMyOcup63G~QMh8sncqsq68B56kjWcqq72WASPUxB-uNei8ggQGDgBD0BN4-HQhrDT52U8Tb2j4vcHsC7jBhFPR6Iek9ix7R7UqqBXtnn84bwnD7HVZ~QY-mVtN07WbCLPslBnDAfOPrJKC3vmgIINBJ0FJ-DWi1Qr9Xe8D95PJiQKpfS9Ohuj4YOTE8c2-FhSqamlsSSEkgttfg__" alt="Luffy Logo" class="welcome-logo">
        <div class="search-container">
            <input type="text" id="search-bar" placeholder="Search games..." aria-label="Search">
            <button id="search-btn" aria-label="Search"><i class="fas fa-search"></i> Search</button>
        </div>
    `;
    attachSearchListeners();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showGames() {
    hideAllSections();
    const gamesSection = document.getElementById('games');
    gamesSection.style.display = 'block';
    const gamesContainer = document.getElementById('games-container');
    gamesContainer.innerHTML = games.map(game => `
        <div class="game-container" onclick="showGame('${game.id}')">
            <div class="game-preview" style="background-image: url('${game.preview}');"></div>
            <h3>${game.title}</h3>
            <p>${game.desc}</p>
        </div>
    `).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMovies() {
    hideAllSections();
    const moviesSection = document.getElementById('movies');
    moviesSection.style.display = 'block';
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = movies.map(movie => `
        <div class="movie-container" onclick="showMovie('${movie.id}')">
            <div class="movie-preview" style="background-image: url('${movie.preview}');"></div>
            <h3>${movie.title}</h3>
            <p>${movie.desc}</p>
        </div>
    `).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSettings() {
    hideAllSections();
    document.getElementById('settings').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPartners() {
    hideAllSections();
    document.getElementById('partners').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dynamic Embed Functions
function showGame(gameId) {
    hideAllSections();
    const embedSection = document.getElementById('embed');
    embedSection.style.display = 'block';
    const game = games.find(g => g.id === gameId);
    if (game) {
        embedSection.innerHTML = `
            <div class="embed-container">
                <iframe id="${game.id}-iframe" class="embed-iframe" src="${game.url}" allowfullscreen onload="onIframeLoad('${game.id}')"></iframe>
                <div class="embed-controls">
                    <h2>${game.title}</h2>
                    <div class="control-buttons">
                        <button onclick="reloadEmbed('${game.id}-iframe')"><i class="fas fa-redo"></i> Restart</button>
                        <button onclick="toggleFullscreen('${game.id}-iframe')"><i class="fas fa-expand"></i> Fullscreen</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        embedSection.innerHTML = `<div class="error-message">Game not found!</div>`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMovie(movieId) {
    hideAllSections();
    const embedSection = document.getElementById('embed');
    embedSection.style.display = 'block';
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        embedSection.innerHTML = `
            <div class="embed-container">
                <iframe id="${movie.id}-iframe" class="embed-iframe" src="${movie.url}" allowfullscreen onload="onIframeLoad('${movie.id}')"></iframe>
                <div class="embed-controls">
                    <h2>${movie.title}</h2>
                    <div class="control-buttons">
                        <button onclick="reloadEmbed('${movie.id}-iframe')"><i class="fas fa-redo"></i> Restart</button>
                        <button onclick="toggleFullscreen('${movie.id}-iframe')"><i class="fas fa-expand"></i> Fullscreen</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        embedSection.innerHTML = `<div class="error-message">Movie not found!</div>`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Helper Functions for Embed Controls
function onIframeLoad(iframeId) {
    const iframe = document.getElementById(iframeId);
    iframe.onerror = () => {
        document.getElementById('embed').innerHTML = `<div class="error-message">Failed to load content. Please try again later.</div>`;
    };
}

function reloadEmbed(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (iframe) iframe.src = iframe.src;
}

function toggleFullscreen(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) iframe.requestFullscreen();
        else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
        else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
    }
}

// Search Bar Functionality (Games Only for Now)
function attachSearchListeners() {
    const searchBtn = document.getElementById('search-btn');
    const searchBar = document.getElementById('search-bar');
    if (searchBtn && searchBar) {
        const performSearch = () => {
            const query = searchBar.value.trim().toLowerCase();
            if (query) {
                const game = games.find(g => g.title.toLowerCase().includes(query));
                if (game) showGame(game.id);
                else alert('Game not found!');
            }
        };
        searchBtn.addEventListener('click', performSearch);
        searchBar.addEventListener('keypress', e => { if (e.key === 'Enter') performSearch(); });
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', showHome);
