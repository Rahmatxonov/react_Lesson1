import React, { useState } from "react";
import "./random.css";

const Random = () => {
  const imageLinks = [
    "https://image.cnbcfm.com/api/v1/image/105427259-1535730447635gettyimages-810877128.jpeg?v=1535730503&w=1600&h=900",
    "https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png",
    "https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJL4ZBunBcppCWRpIIyq4v0jfd6QPnF8t5D6mCdi1ivbY-GRY2NZtwJ5mbp_j-bhHfoVs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtns1em5jyusiJbbgaFtHxo7Hp1YND9542sv5_g4AWLtacCcEwezM1DxnT4T6Td6e2j8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sMxk_nlEsa4opwQowumjvf6fOvyoA6h2kQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3B0FcyYNGMdt5RM3Vve7R3gul85nwbbfssP2s4AK2rjnWoRJQuM2_WMit72Frn9t0xPY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZEzgdfsc7LH4VB9sCW1FaNNIPUNnVnby5quBqvmh4F9wuzhygpDb7T-ooe5xgGslkJI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UU7SKb09BXhpXW9GL9ReVTYHtMnEhmqXdg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROA8N5cnAI98B3uT55I4YpdMndi1UZGF-D4Q&usqp=CAU",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    const newSelectedImage = imageLinks[randomIndex];
    setSelectedImage(newSelectedImage);
  };

  return (
    <div className="image-container">
      <button className="randomBtn" onClick={handleButtonClick}>
        Yangi Rasm
      </button>
      {selectedImage && <img src={selectedImage} alt="Random Image" />}
    </div>
  );
};

export default Random;
