const A = "https://s3.amazonaws.com/webflow-prod-assets/6799ccd170a8bb46165fbc41";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">QUIÉN ES BAMBÚ</a>
        <nav>
          <a href="#historia">Historia</a>
          <a href="#trabajo">Trabajo</a>
          <a href="#bitacora">Bitácora</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <img className="hero-bg" src={`${A}/6799ccd270a8bb46165fc09d_Hero%20Backround%20image.svg`} alt="" />
        <p className="values">LOYALTY, HONOR, TRUTH, RESPECT</p>
        <div className="hero-title" aria-label="Quién es Bambú">
          <span>QUIÉN</span><span>ES</span><span>BAMBÚ?</span>
        </div>
        <img className="decor decor-1" src={`${A}/6799ccd270a8bb46165fc0a0_Hero%20Decor%2001.svg`} alt="" />
        <img className="decor decor-2" src={`${A}/6799ccd270a8bb46165fc09f_Hero%20Decor%2002.svg`} alt="" />
      </section>

      <section className="manifesto paper-dark">
        <h2>“ONE WITHOUT PURPOSE IS LOST”</h2>
        <p>— O.W.P.I.L.</p>
      </section>

      <section id="historia" className="intro">
        <div className="intro-copy">
          <p className="eyebrow">HISTORIA</p>
          <h1>Hello I'm Bambu, a nomadic volunteer sworn to make the world look and work just a bit better than it was before me.</h1>
          <p className="placeholder">[Historia de Bambú — contenido pendiente]</p>
        </div>
        <div className="icon-stack">
          <img src={`${A}/6799ccd270a8bb46165fc0a3_Eye%20Icon.svg`} alt="" />
          <img src={`${A}/6799ccd270a8bb46165fc0a4_World%20Icon.svg`} alt="" />
          <img src={`${A}/6799ccd270a8bb46165fc0a5_Smile%20Icon.svg`} alt="" />
        </div>
      </section>

      <section className="ourdeas paper">
        <img className="rip rip-top" src={`${A}/6799ccd270a8bb46165fc0b4_White%20Paper%20Cut%20Decor%2001.svg`} alt="" />
        <p className="eyebrow dark">IDEAS + PERSONAS</p>
        <h2>“OUR-DEAS”</h2>
        <p className="lead">Nothing Significant Can be Done Alone. Magic Happens When “WE” Remove The “I”. Ideas Become “OUR-DEAS”.</p>
        <p className="placeholder dark">[Texto editorial sobre colaboración y las próximas siete generaciones — pendiente]</p>
      </section>

      <section id="trabajo" className="work">
        <p className="eyebrow">TRABAJO</p>
        <h2>Lo que hago no cabe en una sola caja.</h2>
        <div className="work-grid">
          {['APP','AI','ECOMMERCE','CRYPTO','PRINT','WEBSITES','PHOTOGRAPHY','INTERIOR DESIGN','BRAND'].map((x,i)=><div className={`work-card c${i%3}`} key={x}>{x}</div>)}
        </div>
        <p className="placeholder">[Proyectos reales y evidencia — pendiente]</p>
      </section>

      <section id="bitacora" className="bitacora paper">
        <img className="rip rip-blog" src={`${A}/6799ccd270a8bb46165fc0e0_Blog%20Gird%20Rip.svg`} alt="" />
        <p className="eyebrow dark">BITÁCORA</p>
        <h2>Notas que sobrevivieron la hoja arrugada.</h2>
        <div className="note-grid">
          <article><span>01</span><h3>[Entrada de Bitácora — pendiente]</h3><p>Ideas, observaciones y aprendizajes.</p></article>
          <article><span>02</span><h3>[Entrada de Bitácora — pendiente]</h3><p>Personas, lugares y proyectos.</p></article>
          <article><span>03</span><h3>[Entrada de Bitácora — pendiente]</h3><p>Trabajo en progreso y preguntas.</p></article>
        </div>
      </section>

      <section id="contacto" className="contact">
        <h2>I can help you elevate and empower your brand strategy today.</h2>
        <a className="cta" href="mailto:placeholder@quienesbambu.com">HABLEMOS →</a>
        <p className="placeholder">[Correo y formulario final — pendiente]</p>
      </section>

      <footer>
        <img src={`${A}/6799ccd270a8bb46165fc0c9_Footer%20Paper%20Cut.svg`} alt="" />
        <p>QUIÉN ES BAMBÚ</p>
      </footer>
    </main>
  );
}
