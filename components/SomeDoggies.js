import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function SomeDoggies({ doggies }) {
  const [randomArray, setRandomArray] = useState([]);

  useEffect(() => {
    const randomDog = [...doggies].sort(() => 0.5 - Math.random());
    setRandomArray(randomDog.slice(0, 3));
  }, []);

  return (
    <div className={styles.someDoggiesContainer}>
      {randomArray.map((d) => (
        <div key={d.id} className={styles.someDoggies}>
          <Link href={`doggies/${d.id}`}>
            <a>
              <Image
                src={d.foto.url}
                alt={d.nombre}
                width={300}
                height={300}
                className={styles.doggieImg}
              />
            </a>
          </Link>

          <h2 className={styles.someDoggiesName}>{d.nombre}</h2>
        </div>
      ))}
    </div>
  );
}
