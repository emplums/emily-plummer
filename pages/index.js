import Head from 'next/head'
import React, {useState} from 'react'
import { ThemeProvider} from 'styled-components'
import  {ContentWrapper, Wrapper, Blurb, Header, Intro, Button, ButtonLink} from './components'
import { cowboy, primary, lisaFrank, halloween } from './theme'
import { Normalize } from 'styled-normalize'

const themeMap = {
  cowboy: cowboy,
  primary: primary,
  lisaFrank: lisaFrank,
  halloween: halloween
}

export default function Home() {
  const [theme, setTheme] = useState('primary')

  return (
    <>
      <Head>
        <title>Emily Plummer</title>
      </Head>
      <ThemeProvider theme={themeMap[theme]}>
        <Normalize/>
        <Wrapper>
          <main>
            <Header>
              <ButtonLink onClick={() => setTheme('primary')}>default theme</ButtonLink>
              <ButtonLink onClick={() => setTheme('cowboy')}>cowboy theme</ButtonLink>
              <ButtonLink onClick={() => setTheme('lisaFrank')}>lisa frank theme</ButtonLink>
              <ButtonLink onClick={() => setTheme('halloween')}>halloween (limited edition!)</ButtonLink>
            </Header>
            <ContentWrapper>
              <Intro>
                <h1>Hey there, I&apos;m Emily {themeMap[theme].welcomeEmoji}</h1>
              </Intro>
              <Blurb themeName={theme}/>
            </ContentWrapper>
          </main>

          <footer>
          </footer>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}
