import React from 'react';

const Imprint: React.FC = () => {
  return (
    <section>
      <h1><i className="bi bi-fingerprint"></i> Imprint</h1>
        <p className="lead" style={{padding: "50px"}}>Philipp Seidel<br/>
            Yorckstraße 11<br/>
            79110 Freiburg<br/>
            Germany<br/><br/>
            If you wish to contact me, please do so via <a href="mailto:mail@philipp-seidel.de">E-Mail</a>
        </p>
        <figure className='text-center'>
          <figcaption className="blockquote-footer">
          Mit Urteil vom 12. Mai 1998 - 312 O 85/98 - 'Haftung für Links' hat das Landgericht (LG) Hamburg entschieden, dass man durch das Setzen eines Links, die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann - so das LG - nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert. Hiermit distanziere ich mich ausdrücklich von den verlinkten Seiten.
          </figcaption>
        </figure>
    </section>
  );
};

export default Imprint;
