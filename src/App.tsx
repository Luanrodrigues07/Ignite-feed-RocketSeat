import { Post } from "./components/Post/Post.jsx";
import "./global.css";
import { Header } from "./components/Header/Header.jsx";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Luanrodrigues07.png",
      name: "Luan Rodrigues",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É umprojeto que fiz no",
      },
      {
        type: "paragraph",
        content:
          "NLW Return, evento da Rocketseat. O nome do projetoé DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    pusblishedAt: new Date("2023-09-06 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/joaoVitorLima242.png",
      name: "Joao",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É umprojeto que fiz no",
      },
      {
        type: "paragraph",
        content:
          "NLW Return, evento da Rocketseat. O nome do projetoé DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    pusblishedAt: new Date("2023-12-02 16:12:34"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                pusblishedAt={post.pusblishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
