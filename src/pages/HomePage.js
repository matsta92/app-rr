import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text: "111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis aspernatur laborum voluptas tenetur cumque repellat ex quaerat adipisci, omnis perferendis. Temporibus ut inventore, reprehenderit consectetur molestias laudantium omnis quidem.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Jan Kowalski",
    text: "222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis aspernatur laborum voluptas tenetur cumque repellat ex quaerat adipisci, omnis perferendis. Temporibus ut inventore, reprehenderit consectetur molestias laudantium omnis quidem.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Kwiatkowski",
    text: "333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis aspernatur laborum voluptas tenetur cumque repellat ex quaerat adipisci, omnis perferendis. Temporibus ut inventore, reprehenderit consectetur molestias laudantium omnis quidem.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
    // za pomocą {...article} przekazujemy wszysktie właściwości zamiast pojedynczo np title = {article.title}
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
