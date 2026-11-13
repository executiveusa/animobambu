import type { Metadata } from "next";

export const metadata: Metadata = { title: "Future | QUIÉN ES BAMBÚ", description: "A space for what comes next." };

export default function FuturePage() {
  return <main><header className="nav"><a className="brand" href="/">QUIÉN ES BAMBÚ</a><nav aria-label="Main navigation"><a href="/#historia">Past</a><a href="/#trabajo">Present</a><a href="/future" aria-current="page">Future</a><a href="/blog">Blog</a><a href="/#contacto">Contact Me</a></nav></header><section className="bitacora paper bitacora-page"><p className="eyebrow dark">FUTURE</p><h1>WHAT COMES NEXT</h1><p className="bitacora-lead">This section is being prepared.</p><a className="journal-home" href="/">← Back home</a></section></main>;
}
