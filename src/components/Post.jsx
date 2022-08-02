import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      {/** Cabeçalho */}
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/renansx.png"/>
          <div className={styles.authorInfo}>
            <strong>Renan Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio as 08:00" dateTime="2022-05-11 08:00:00">Publicado há 1h</time>
      </header>

      {/** Conteudo */}
      <div className={styles.content}>
        <p>Teste</p>
        <p>asdasdasdasdas</p>
        <p>hjghjghjghjghj</p>
        <p><a href="">sfsdgtyghjghk</a></p>
      </div>

      {/** Comentários */}
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe seu comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
  
}