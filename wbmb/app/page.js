import styles from './page.module.css';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Gamepad2 } from 'lucide-react'; // icones

// componente para a avaliaçao com pontos
const SkillRating = ({ level }) => {
  return (
    <div className={styles.dots}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`${styles.dot} ${i < level ? styles.filled : ''}`}></span>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.resumeContainer}>
      {/* coluna da esquerda */}
      <aside className={styles.sidebar}>
        <img
          src="/fotoperfil.jpeg"
          alt="foto de perfil"
          className={styles.profileImage}
        />
        <div className={styles.sidebarContent}>
          <h1 className={styles.name}>João Vitor Carneiro Guerra</h1>
          <p className={styles.title}>Programador FullStack</p>

          <section className={styles.sidebarSection}>
            <h2>Sobre Mim</h2>
            <p>
              Sou um profissional dedicado e apaixonado por tecnologia, atualmente cursando Ciência da Computação. 
              Busco constantemente aprimorar minhas habilidades para enfrentar os desafios em um ambiente dinâmico,
              com uma mentalidade orientada para resultados e estou ansioso para contribuir com minha experiência.
            </p>
          </section>

          <section className={styles.sidebarSection}>
            <h2>Contato</h2>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} />
                <span>Rua Manoel Borba, 72, Itapissuma - PE</span>
              </li>
              <li>
                <Phone size={18} />
                <span>(81) 98546-4487</span>
              </li>
              <li>
                <Mail size={18} />
                <span>joaovcarneirog@gmail.com</span>
              </li>
            </ul>
          </section>

          <section className={styles.sidebarSection}>
            <h2>Redes Sociais</h2>
            <ul className={styles.socialList}>
              <li>
                <a href="https://www.linkedin.com/in/joão-vitor-carneiro-guerra-788877231" target="_blank">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/joaovcguerra" target="_blank">
                  <Github size={20} /> Github
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/joaov_guerra" target="_blank">
                  <Instagram size={20} /> Instagram
                </a>
              </li>
            </ul>

          </section>
          <section className={styles.sidebarSection}>
            <h2>Projetos</h2>
            <ul className={styles.socialList}>
              <li><a href="/jogoforca"><Gamepad2 size={20} /> Jogo da Forca</a></li>
            </ul>
          </section>
        </div>
      </aside>

      {/* coluna da direita */}
      <main className={styles.mainContent}>
        <section>
          <h2>Formação Acadêmica</h2>
          <div className={styles.infoBlock}>
            <h3>Ciência da Computação (Cursando)</h3>
            <p className={styles.infoSubtext}>Universidade Católica de Pernambuco</p>
          </div>
        </section>

        <section>
          <h2>Certificados</h2>
          <div className={styles.infoBlock}>
            <h3>Curso de Desenvolvimento Web</h3>
            <p className={styles.infoSubtext}>Udemy - Conclusão: 2025</p>
          </div>
        </section>

        <section>
          <h2>Habilidades</h2>
          <ul className={styles.skillsList}>
            <li><span>React</span> <SkillRating level={3} /></li>
            <li><span>Next.js</span> <SkillRating level={3} /></li>
            <li><span>JavaScript & TypeScript</span> <SkillRating level={4} /></li>
            <li><span>Node.js</span> <SkillRating level={3} /></li>
            <li><span>Java</span> <SkillRating level={4} /></li>
            <li><span>Python</span> <SkillRating level={4} /></li>
            <li><span>C</span> <SkillRating level={3} /></li>
            <li><span>Css</span> <SkillRating level={2} /></li>
            <li><span>Comunicação</span> <SkillRating level={5} /></li>
            <li><span>Trabalho em Equipe</span> <SkillRating level={5} /></li>
          </ul>
        </section>

        <section>
          <h2>Idiomas</h2>
          <ul className={styles.skillsList}>
            <li><span>Português</span> <SkillRating level={5} /></li>
            <li><span>Inglês</span> <SkillRating level={3} /></li>
          </ul>
        </section>
      </main>
    </div>
  );
}