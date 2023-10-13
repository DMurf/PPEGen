import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GetHeader from './components/ui/navbarheader/navbar'
import GetHero from './components/ui/herobanner/hero'
import GetInput from './components/ui/input/input'
import GetTextArea from './components/ui/textarea/textarea'
import GetMandatoryBonusDuties from './components/logic/selectpopulators/mbd'
import GetInputNumber from './components/ui/input/inputNumber'

function App() {
    return (
      <div className="App">
        <GetHeader />
        <GetHero />
        <section className="section container" id="section-PII">
          <h1 className="container title">PII (Personally Identifiable Information)</h1>
          <h2 className="container subtitle">Personally Identifiable Information</h2>

          <div className="columns">
            <div className="column is-6">
              <div className="columns is-multiline">
                <div className="column is-6">
                  <GetInput id="charactername" placeholder="Character name" helpText="" label="Name" maxlength={50}></GetInput>
                </div>
                <div className="column is-2">
                  <GetInput id="clearance" placeholder="Red" helpText="" label="Clearance" maxlength={1}></GetInput>
                </div>
                <div className="column is-2">
                  <GetInput id="sector" placeholder="Sector" helpText="" label="Sector" maxlength={3}></GetInput>
                </div>
                <div className="column is-2">
                  <GetInput id="clonenumber" placeholder="Clone" helpText="" label="Clone" maxlength={2}></GetInput>
                </div>
                <div className="column is-6">
                  <GetInput id="teamname" placeholder="Team Name" helpText="" label="Team name" maxlength={50}></GetInput>
                </div>
                <div className="column is-6">
                  <GetMandatoryBonusDuties></GetMandatoryBonusDuties>
                </div>
                <div className="column is-6">
                  <GetTextArea id="treasonbutton" placeholder="Treasonous content!" helpText="" label="Treason button" rows={5}></GetTextArea>
                </div>
                <div className="column is-6">
                  <GetTextArea id="voilencebutton" placeholder="Violence button" helpText="" label="Violence button" rows={5}></GetTextArea>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <GetTextArea id="servicegroup" placeholder="Service group" helpText="" label="Service group" rows={13}></GetTextArea>
            </div>
          </div>
        </section>

        <section className="section container" id="section-PP">
          <h1 className="container title">Productivity Profile</h1>
          <div className="columns is-multiline">
            <div className="column">
              <div className="columns is-mobile">
                <div className="column is-6">
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      <GetInputNumber id="brains" placeholder="Brains" helpText="" label="Brains" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="alpha-complex" placeholder="Alpha Complex" helpText="" label="Alpha Complex" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="bureaucracy" placeholder="Bureaucracy" helpText="" label="Bureaucracy" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="psychology" placeholder="Psychology" helpText="" label="Psychology" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="science" placeholder="Science" helpText="" label="Science" maximum={5} minimum={-5}></GetInputNumber>
                      <div className='is-hidden-desktop pb-6'>
                </div>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      <GetInputNumber id="chutzpah" placeholder="Chutzpah" helpText="" label="Chutzpah" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="bluff" placeholder="Bluff" helpText="" label="Bluff" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      {" "}
                      <GetInputNumber id="charm" placeholder="Charm" helpText="" label="Charm" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="intimidate" placeholder="Intimidate" helpText="" label="Intimidate" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="stealth" placeholder="Stealth" helpText="" label="Stealth" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="columns is-mobile">
                <div className="column is-6">
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      <GetInputNumber id="mechanics" placeholder="Mechanics" helpText="" label="Mechanics" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="demolition" placeholder="Demolition" helpText="" label="Demolition" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="engineer" placeholder="Engineer" helpText="" label="Engineer" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="operate" placeholder="Operate" helpText="" label="Operate" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="program" placeholder="Program" helpText="" label="Program" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="columns is-multiline">
                    <div className="column is-12">
                      <GetInputNumber id="violence" placeholder="Violence" helpText="" label="Violence" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="athletics" placeholder="Athletics" helpText="" label="Athletics" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="guns" placeholder="Guns" helpText="" label="Guns" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="melee" placeholder="Melee" helpText="" label="Melee" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                    <div className="column is-6">
                      <GetInputNumber id="throw" placeholder="Throw" helpText="" label="Throw" maximum={5} minimum={-5}></GetInputNumber>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default App
