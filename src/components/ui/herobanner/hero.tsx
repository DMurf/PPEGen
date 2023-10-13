function GetHero(){
    return (
        <>
<section className="hero is-danger">
  <div className="hero-body container">
    <h1 className="title">
    Paranoia Perfect Edition
    </h1>
    <h2 className="subtitle">
    Character Generator
    </h2>
  </div>
  <div className="hero-foot">
      <div className="tabs is-centered">
        <ul>
          <li><a href="#section-PII">PII</a></li>
          <li><a href="#section-PP">Productivity Profile</a></li>
          <li><a href="#section-wellness">Wellness</a></li>
          <li><a href="#section-mission">Mission</a></li>
          <li><a href="#section-secret">Secret side</a></li>
        </ul>
      </div>
  </div>
</section>   
        </>
    )
}

export default GetHero;