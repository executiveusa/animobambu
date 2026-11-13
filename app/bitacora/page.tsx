import type { Metadata } from "next";
import { publishedBitacoraPosts, isApprovedPublicPost } from "../../lib/bitacora";

export const metadata: Metadata = {
  title: "Bitácora | QUIÉN ES BAMBÚ",
  description: "Observaciones, historias y aprendizajes de Bambu. Solo publicaciones revisadas y aprobadas.",
};

const PAPER = "https://s3.amazonaws.com/webflow-prod-assets/6799ccd170a8bb46165fbc41/6799ccd270a8bb46165fc0e0_Blog%20Gird%20Rip.svg";

export default function BitacoraPage() {
  const posts = publishedBitacoraPosts.filter(isApprovedPublicPost);
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/">QUIÉN ES BAMBÚ</a>
        <nav aria-label="Main navigation">
          <a href="/#historia">Past</a>
          <a href="/#trabajo">Present</a>
          <a href="/future">Future</a>
          <a href="/blog" aria-current="page">Blog</a>
          <a href="/#contacto">Contact Me</a>
        </nav>
      </header>
      <section className="bitacora paper bitacora-page" aria-labelledby="bitacora-title">
        <img className="rip rip-blog" src={PAPER} alt="" />
        <p className="eyebrow dark">UNA VIDA EN CONSTRUCCIÓN</p>
        <h1 id="bitacora-title">BITÁCORA</h1>
        <p className="bitacora-lead">
          Historias, observaciones y aprendizajes del camino.
          Aquí quedarán las ideas que valga la pena compartir.
        </p>
        {posts.length === 0 ? (
          <div className="empty-journal" role="status">
            <p className="eyebrow dark">EN PREPARACIÓN</p>
            <h2>Aquí empieza la historia.</h2>
            <p>Las primeras entradas se publicarán cuando sus fuentes y su contenido estén revisados.</p>
          </div>
        ) : (
          <div className="note-grid">
            {posts.map((post) => (
              <article key={post.id}>
                <span>{new Date(post.publishedAt).toLocaleDateString("es-MX")}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <small>{post.publicProvenance}</small>
              </article>
            ))}
          </div>
        )}
        <a className="journal-home" href="/">← Volver al inicio</a>
      </section>
      <footer><p>QUIÉN ES BAMBÚ</p></footer>
    </main>
  );
}
