


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import kfcImages from '../category.json';
import styles from './index.module.css';

function BasicExample() {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate('/menu');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <h3>BROWSE Categories</h3>
        <i className={styles.line}></i>
      </div>
      <div className={styles.items}>
        {kfcImages.images.map((image) => (
          <Card key={image.id} className={styles.eachCard}>
            <div className={styles.top}>
              <Card.Img variant="top" className={styles.image} src={image.src} alt={image.alt} style={{ height: '250px', cursor:"pointer"}}  />
            </div>
            <button style={{ width: '100%', height: '70px', border: 'none' }} onClick={handleBtn}>
              {image.alt}
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;
