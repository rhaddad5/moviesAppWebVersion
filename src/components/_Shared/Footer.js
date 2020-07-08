import React from "react";
import "../../styles/footer.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

export default function Footer() {
  return(
    <div className="footer">
      <div className="footer-links">
        <a href="/"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>
      <div className="footer-copyright">
        This website functions thanks to the <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">The Movie Database API</a>
      </div>
    </div>

  )
}
