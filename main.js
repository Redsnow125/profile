let views = {
    'link-about':`        <section id="about">
    <h2>
        About
    </h2>
</section>`,
    'link-skills': `        <section id="skills">
    <h2>
        Skills
    </h2>
</section>`,
    'link-projects': `        <section id="projects">
    <h2>
        Projects
    </h2>
</section>`,
    'link-contact': `        <section>
    <h2>
        Contact
    </h2>
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