import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from '../../components/link'

function About() {
  return (
    <div>
      <Helmet>
        <title>Ismay Wolff</title>
        <meta name="description" content="About me" />
      </Helmet>
      <p>
        I{"'"}m an artist, a social scientist and a programmer. My work is a combination of
        these fields and an exploration of the most inspiring parts of each discipline.
        I was born 1983 in Heerde and live and work in Groningen in the Netherlands.
      </p>
      <p>
        I{"'"}ve graduated with a Masters degree in Social Psychology from the University of
        Groningen, and a Bachelors degree in Fine Art from Academie Minerva of Groningen. A lot of
        my code can be found on
        {' '}
        <Link href="https://github.com/ismay">github</Link>
        {' '}
        and my public keys are
        on <Link href="https://keybase.io/ismay">keybase</Link>.
      </p>
      <p>
        If you{"'"}d like to get in touch feel free to email me
        at
        {' '}
        <Link href="mailto:hello@ismaywolff.nl">hello@ismaywolff.nl</Link>
        {' '}
        and I
        {"'"}
        ll get back to
        you as soon as possible.
      </p>
    </div>
  )
}

export default About
