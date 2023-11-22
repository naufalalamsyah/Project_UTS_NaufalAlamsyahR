const Footer=()=>{
    return(
        <footer class="footer section">
            <div class="footer__container bd-grid">
                <div class="footerData">
                    <h2 class="footer__title">QUOTES</h2>
                    <p class="footer__text">“Success is no accident. It is hard work, perseverance, learning, studying, sacrifice,</p>
                    <p class="footer__text2">and most of all, love of what you are doing or learning to do.” – Pelé</p>
                </div>

                <div class="footerData">
                    <h2 class="footer__title">NAVIGATE</h2>
                    <ul>
                        <li><a href="/" class="footer__link">Home</a></li>
                        <li><a href="/about" class="footer__link">About</a></li>
                        <li><a href="/Contact" class="footer__link">Contact</a></li>
                    </ul>
                </div>
                
                
            </div>
        </footer>
    );
}

export default Footer;