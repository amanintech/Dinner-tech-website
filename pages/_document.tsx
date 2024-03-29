import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>

             <script

              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */


;(function () {
  document.body.classList.remove('light-mode')
  document.body.classList.add('dark-mode')
  localStorage.setItem('darkMode', 'false')

  // var storageKey = 'darkMode'
  // var classNameDark = 'dark-mode'
  // var classNameLight = 'light-mode'

  // function setClassOnDocumentBody(darkMode) {
  //   document.body.classList.remove('light-mode')
  //   document.body.classList.add('dark-mode')
  // }
  // var preferDarkQuery = '(prefers-color-scheme: dark)'
  // var mql = window.matchMedia(preferDarkQuery)
  // // var supportsColorSchemeQuery = mql.media === preferDarkQuery
  // const supportsColorSchemeQuery ='false'
  // const localStorageTheme = 'false'
  // try {
  //   localStorageTheme = localStorage.getItem(storageKey)
  // } catch (err) {}
  // var localStorageExists = localStorageTheme !== null
  // if (localStorageExists) {
  //   localStorageTheme = JSON.parse(localStorageTheme)
  // }
  // // Determine the source of truth
  // if (localStorageExists) {
  //   // source of truth from localStorage
  //   setClassOnDocumentBody(localStorageTheme)
  // } else if (supportsColorSchemeQuery) {
  //   // source of truth from system
  //   setClassOnDocumentBody(mql.matches)
  //   localStorage.setItem(storageKey, mql.matches)
  // } else {
  //   // source of truth from document.body
  //   var isDarkMode = document.body.classList.contains(classNameDark)
  //   localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  // }


})();
`
              }}
            />
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
