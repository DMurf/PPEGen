import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GetHeader from './components/ui/navbar/navbar'
import GetHero from './components/ui/hero/hero'
import GetInput from './components/ui/input/input'
import GetTextArea from './components/ui/textarea/textarea'
import GetMandatoryBonusDuties from './components/logic/selectpopulators/mbd'

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
                  <GetInput id="clonenumber" placeholder="Clone" helpText="" label="Clone" maxlength={50}></GetInput>
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
      </div>
    );
}

export default App
