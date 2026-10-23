import { SITE } from "../data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="foot-brand">
          <b>RhyVidya · Knowledge is Power</b>
          <br />
          Live online learning with experienced teachers, across many subjects.
          A product of{" "}
          <a href={SITE.parent.url} target="_blank" rel="noopener">
            Rhytech Global Solutions
          </a>
          .
        </div>
        <div className="footer-channels">
          <div className="channel-row" aria-label="Contact RhyVidya">
            <a className="channel-chip" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <a className="channel-chip" href={SITE.phoneHref}>
              {SITE.phoneDisplay}
            </a>
            <a className="channel-chip" href={SITE.whatsapp} target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
          <div className="channel-row" aria-label="Rhytech Global Solutions on social media">
            {SITE.socials.map((s) => (
              <a key={s.label} className="channel-chip" href={s.href} target="_blank" rel="noopener">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
