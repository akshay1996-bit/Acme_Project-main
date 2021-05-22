import React from 'react'
import styles from './CategoryMenu.module.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function CategoryMenu() {
  return (
  
    <div className={styles.shopCategoryMenu}>
      <h2 className={styles.heading}>Shop By Category</h2>
      <div>
        <div className={styles.menuItem}>
          <Link to="/category/gift-cards" className={styles.menuBtn+" btn btn-outline"} >
            Gift Cards
          </Link>
        </div>

        <div className={styles.menuItem} >
          <Link to="/category/tents" className={"btn btn-outline "+styles.menuBtn} >
            Tents
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link to="/category/accessories" className={"btn btn-outline "+styles.menuBtn} >
            Accessories
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link to="/category/packs" className={styles.menuBtn+" btn btn-outline"} >
            Packs
          </Link>
        </div>
      </div>
    </div>
  
  )
}
