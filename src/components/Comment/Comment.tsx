import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../Comment/Comment.module.css";
import { Avatr } from "../Avatar/Avatar";
import { useState } from "react";

interface ComentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: ComentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    console.log("deletar");
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatr
        hasBorder={false}
        src="https://github.com/Luanrodrigues07.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Rodrigues</strong>
              <time title="04/09/2023 as 22:37" dateTime="2023-09-04 22:37:38">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            {" "}
            <ThumbsUp size={20} /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
