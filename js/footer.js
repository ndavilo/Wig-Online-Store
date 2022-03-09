const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
    <img src="" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">hairs</li>
            <li><a href='#' class="footer-link">Bob Wig</a></li>
            <li><a href='#' class="footer-link">Curly Wig</a></li>
            <li><a href='#' class="footer-link">Cornrow Wig</a></li>
            <li><a href='#' class="footer-link">Straight Wig</a></li>
            <li><a href='#' class="footer-link">Braided Wig</a></li>
            <li><a href='#' class="footer-link">Afro Wig</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
    <p class="info">David has more than 10years experience in computer programming language and also a strong experience in Python programming and System administration. He also has varieties of experiences in working with Django, Flask, AWS, Heroku https://bit4blog.herokuapp.com, Linux and is competent in Ethical Hacking and phone forensic analysis. He has installed, configured and maintained Computer software and hardwares for Windows, Mac and Linux systems. He has equally developed a handful of projects ranging from web development, data analysis and automating repetitive processes. He has used raspberry pi and other microcontrollers for the automation of processes, Designed and printed PCB with Eagle Software. Presently, He is looking for a remote job for the role of Python Developer, Back End Developer, Embedded Software Engineer, Automation Engineer or Electronic Engineer.
    </p>
    <p class="info">Support emails - nonsoilonze@gmail.com</p>
    <p class="info">Telephone - 08161417166</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="socail-link">terms & services</a>
            <a href="#" class="socail-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="socail-link">instagram</a>
            <a href="#" class="socail-link">facebook</a>
            <a href="#" class="socail-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Wig, Best online store</p>
    `;
}

createFooter();