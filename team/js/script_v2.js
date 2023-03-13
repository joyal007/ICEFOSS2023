$(()=>{
    const Tech =[
        {
            name: "Nihal Ansar",
            img: 'nihal_updated.png',
            inst: "https://instagram.com/_nihal_2k",
            git: "https://github.com/nihalansar",
            link: "https://www.linkedin.com/in/nihalansar"
        },
        {
            name: "Joyal Raphel",
            img: "joyal_updated.jpg",
            inst: "https://instagram.com/_joyal_raphel",
            git: "https://github.com/joyal007",
            link: "https://www.linkedin.com/in/joyalraphel"
        },
        {
            name: "Jopaul Joy",
            img: "jopi.jpeg",
            inst: "https://instagram.com/jopaul.joy",
            git: "https://github.com/jopaul23",
            link: "https://www.linkedin.com/in/jopaul-joy"
        },
        {
            name: "Pranav V",
            img: "pranav.jpeg",
            inst: "https://instagram.com/im_17pranav",
            git: "https://github.com/Pranav2k02",
            link: "https://www.linkedin.com/in/pranav-v-6310941a5/"
        }
    ]
    Tech.map( e=>{
        $("#tech .teachers-pag .container .row").append(`
        <div class="col-md-4 col-sm-6 teachers-col">
                                            <div class="single-teacher mt-80 text-center">
                                                <div class="teacher-social">
                                                    <ul class="social">
                                                        <li><a target="_blank" href="${e.git}"><i class="fab fa-github"></i></a></li>
                                                        <li><a target="_blank" href="${e.inst}"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a target="_blank" href="${e.link}"><i class="fab fa-linkedin-in"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="teacher-image">
                                                    <a href="teacher-details.html">
                                                        <img src="images/${e.img}" width="266" height="359" alt="teacher">
                                                    </a>
                                                </div>
                                                <div class="teacher-content">
                                                    <h4 class="name">${e.name}</h4>
                                                </div>
                                            </div>
                                        </div>
        `)
    })
    
})