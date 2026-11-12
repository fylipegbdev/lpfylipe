import Image from "next/image";

export default function Home() {
  return (
    <div className="wrap">
      <header className="top">
        <span className="logo"><i aria-hidden="true"></i>Fylipe Gabriel</span>
      </header>

      <main className="grade">
        <section className="apresentacao" aria-label="Apresentação">
          <div className="fundo" aria-hidden="true"><div className="formas"><b></b><b></b><b></b><b></b></div></div>
          <div className="foto"><Image src="/images/fylipe-recorte.webp" alt="Retrato de Fylipe Gabriel" width={1050} height={1024} priority /></div>
          <div className="apresentacao-texto">
            <p className="cargo">Designer gráfico</p>
            <h1>Fylipe Gabriel</h1>
            <p className="frase">Crio conteúdo e identidades visuais que fazem a sua marca ser reconhecida e lembrada.</p>
          </div>
        </section>

        <a className="bloco whats" href="https://wa.me/5583993272491?text=Ol%C3%A1%2C%20Fylipe!%20Vim%20pelo%20seu%20link%20da%20bio." target="_blank" rel="noopener">
          <div className="capa" aria-hidden="true"><b></b><b></b><b></b></div>
          <div className="whats-texto">
            <h2>Vamos criar juntos?</h2>
            <p>(83) 99327-2491</p>
            <span className="btn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.250-1.38A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 1 1 6.96 3.86Zm4.5-6.14c-.25-.12-1.460-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.770 0 0 0-.86 2.06 4.8 4.8 0 0 0 1 2.56 11 11 0 0 0 4.22 3.73c1.57.68 2.19.74 2.98.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.17-.47-.29Z"/></svg>
              Chamar no WhatsApp
            </span>
          </div>
        </a>

        <a className="bloco portfolio" href="https://[PREENCHER]" target="_blank" rel="noopener">
          <div className="capa" aria-hidden="true"><b></b><b></b><b></b>
            <div className="desktop">
              <div className="tela"><div className="barra"><i></i><i></i><i></i></div><Image src="/images/expo.webp" alt="" width={1348} height={552} /></div>
              <div className="pe"></div>
              <div className="base"></div>
            </div>
          </div>
          <div className="legenda">
            <div><h2>Portfólio</h2><small>Identidade visual, carrosséis e conteúdo</small></div>
            <span className="seta" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9 9 3M4 3h5v5"/></svg></span>
          </div>
        </a>
      </main>

      <footer className="rodape">
        <span>© 2026 Fylipe Gabriel</span>
        <span>Criação de conteúdo e ID visual</span>
      </footer>
    </div>
  );
}
