import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Do back ao mobile: de onde surgiu a programação fullstack</strong>
            <p>O  mercado da programação é bastante exigente no que se refere às novas  tecnologias e conhecimentos em termos de carreiras e experiências. A  comunidade é extremamente apaixonada no que faz e precisa,  constantemente, se manter atualizada nas tendências do mercado.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Do back ao mobile: de onde surgiu a programação fullstack</strong>
            <p>O  mercado da programação é bastante exigente no que se refere às novas  tecnologias e conhecimentos em termos de carreiras e experiências. A  comunidade é extremamente apaixonada no que faz e precisa,  constantemente, se manter atualizada nas tendências do mercado.</p>
          </a>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>Do back ao mobile: de onde surgiu a programação fullstack</strong>
            <p>O  mercado da programação é bastante exigente no que se refere às novas  tecnologias e conhecimentos em termos de carreiras e experiências. A  comunidade é extremamente apaixonada no que faz e precisa,  constantemente, se manter atualizada nas tendências do mercado.</p>
          </a>
        </div>
      </main>
    </>
  )
}