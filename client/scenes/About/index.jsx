import React from 'react'
import { Helmet } from 'react-helmet'
import { ExternalLink } from '../../components/links'

function About() {
  return (
    <div>
      <Helmet>
        <title>Ismay Wolff</title>
        <meta name="description" content="About me" />
      </Helmet>
      <p>
        I&#39;m an artist, a social scientist and a programmer. My work is a combination of
        these fields and an exploration of the most inspiring parts of each discipline.
        I was born 1983 in Heerde and live and work in Groningen in the Netherlands.
      </p>
      <p>
        I&#39;ve obtained a master in social psychology from the University of Groningen, and a
        bachelor&#39;s degree in fine art from Academie Minerva of Groningen. A lot of my work can
        be found on <ExternalLink href="https://github.com/ismay">github</ExternalLink> and my public keys are
        on <ExternalLink href="https://keybase.io/ismay">keybase</ExternalLink>.
      </p>
    </div>
  )
}

export default About
