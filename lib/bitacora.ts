/** Public editorial projection only: private Caelo drafts never belong in this module. */
export type SourceKind = "nota_de_voz" | "nota_de_campo" | "conversacion" | "proyecto" | "investigacion" | "observacion";

export type PublishedBitacoraPost = Readonly<{
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  language: "es" | "en";
  publishedAt: string;
  sourceKind: SourceKind;
  relatedProjectIds: readonly string[];
  /** Public-safe description, NOT a private email, transcript link, or Drive path. */
  publicProvenance: string;
  editorialState: "published";
  approvedByOwner: true;
}>;

/**
 * The source of truth for publications will be a reviewed, redacted Caelo
 * export/feed. Empty until the first real post has owner approval.
 * Never import unpublished content into this public static build.
 */
export const publishedBitacoraPosts: readonly PublishedBitacoraPost[] = [];

export function isApprovedPublicPost(post: PublishedBitacoraPost): boolean {
  return post.editorialState === "published" && post.approvedByOwner === true;
}
