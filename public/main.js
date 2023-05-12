let views = {
    'link-about':`        <section id="about">
    <h2>
        About Me
    </h2>
    <p class="maintxt"> My name Tristan Johnson</p>
    <p class="maintxt">A bit about me is I am a 25 year old Full stack webdev</p>
    <p class="maintxt">I have a wonderful wife and 2 dogs (Nikita and Yuna).</p>
    <p class="maintxt">My hobbies include travling, gaming, <br>renovation, and working on our cars.</p>
    <p class="maintxt">And if you are  seeing this I think you are cool enough</p>
    <p class="maintxt">to see my personal website!</p>
</section>`,
    'link-skills': `        <section id="skills">
    <h2>
        My Skills
    </h2>
    <p class="maintxt">My skills include the full tec stack of:</p>
    <ul>
        <li class="maintxt">JavaScript</li>
        <li class="maintxt">Html</li>
        <li class="maintxt">SQL</li>
        <li class="maintxt">Css</li>
    </ul>
</section>`,
    'link-projects': `        <section id="projects">
    <h2>
        Projects
    </h2>
    <a href="http://13.57.47.60" class="maintxt"> RedSouls</a>
</section>`,
    'link-contact': `        <section>
    <h2>
        Contact
    </h2>
    <p class="maintxt" id = "email">ContactTristanJohnsonToday@gmail.com</p>
</section>`
}

const links = document.querySelectorAll('a')
const main = document.querySelector('main')

const changeView = evt =>{
    main.innerHTML = ''
    let section = evt.target.id
    main.innerHTML = views[section]
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',changeView)
}

const pageload = () =>{
    main.innerHTML = views['link-about']
}
pageload()