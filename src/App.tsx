import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GetHeader from './components/ui/navbarheader/navbar'
import GetHero from './components/ui/herobanner/hero'
import GetInput from './components/ui/input/input'
import GetTextArea from './components/ui/textarea/textarea'
import GetMandatoryBonusDuties from './components/logic/selectpopulators/mbd'
import GetInputNumber from './components/ui/input/inputNumber'
import GetWounds from './components/logic/selectpopulators/wounds'
import GetFlags from './components/logic/selectpopulators/flags'

function App() {
    return (
      <div className="App">
        <GetHeader />
        <GetHero />
        <div className="container">
          <section className="section container" id="section-PII">
            <h1 className="container title">PII (Personally Identifiable Information)</h1>
            <h2 className="container subtitle">It's all about you</h2>
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
                    <GetTextArea id="violencebutton" placeholder="Violence button" helpText="" label="Violence button" rows={5}></GetTextArea>
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
            <h2 className="container subtitle">Excellence is not a skill, it's an attitude</h2>
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
                        <div className="is-hidden-desktop pb-6"></div>
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

          <section className="section container" id="section-wellness">
            <h1 className="container title">Wellness</h1>
            <h2 className="container subtitle">Get busy living, or get busy dying</h2>
            <div className="columns">
              <div className="column is-3">
                <GetWounds></GetWounds>
              </div>
              <div className="column is-3">
                <GetFlags></GetFlags>
              </div>
              <div className="column is-3">
                <GetInputNumber id="xp" placeholder="XP" helpText="" label="XP" maximum={1000000} minimum={-1000000}></GetInputNumber>
              </div>
              <div className="column is-3">
                <GetInputNumber id="moxie" placeholder="Moxie" helpText="" label="Moxie" maximum={8} minimum={1}></GetInputNumber>
              </div>
            </div>
          </section>

          <section className="section container" id="section-mission">
            <h1 className="container title">Mission/Role in society</h1>
            <h2 className="container subtitle">Alpha Complex, we've had a problem.</h2>
            <div className="columns">
              <div className="column">
                <GetTextArea id="missionobjectives" placeholder="The best laid plans of clones and droids" helpText="" label="Mission objectives" rows={20}></GetTextArea>
              </div>
              <div className="column">
                <GetTextArea id="assignedgear" placeholder="- A level of optimism surpassed only by a dog with a squeaky toy" helpText="" label="Assigned Gear" rows={20}></GetTextArea>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}

export default App
