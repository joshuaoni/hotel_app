"use client";

import { Button } from '@mui/material';
import styles from './Navbar.module.css';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { useDispatch, useLayout, useProperty, useSetClick, useSetLayout } from '@/app/_contexts/PropertyProvider';
import { ACTIONS } from '@/app/_actions/propertyActions';

const Navbar = () => {
  const layout = useLayout();
  const setLayout = useSetLayout();
  const dispatch = useDispatch();
  const properties = useProperty();
  const setClicked = useSetClick();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <h2>Featured Listed Property</h2>
          <p>Real estate can be bought, sold, leaded, or rented, and can be a
            valuable investment opportunity.</p>
        </div>

        <div className={styles.nav}>
          <div className={styles.tabs}>
            <p
              className={layout === 1 ? `${styles.active} ${styles.tab}` : `${styles.tab}`}
              onClick={() => {
                setLayout(1);
                dispatch({
                  type: ACTIONS.FILTER_PROPERTIES, payload: { layout: 1, properties }
                })
                setClicked(false);
              }}>
              Lagos
            </p>
            <p
              className={layout === 2 ? `${styles.active} ${styles.tab}` : `${styles.tab}`}
              onClick={() => {
                setLayout(2);
                dispatch({
                  type: ACTIONS.FILTER_PROPERTIES, payload: { layout: 2, properties }
                })
                setClicked(false);
              }}>
              Mumbai
            </p>
            <p
              className={layout === 3 ? `${styles.active} ${styles.tab}` : `${styles.tab}`}
              onClick={() => {
                setLayout(3);
                dispatch({
                  type: ACTIONS.FILTER_PROPERTIES, payload: { layout: 3, properties }
                })
                setClicked(false);
              }}>
              New York
            </p>
            <p
              className={layout === 4 ? `${styles.active} ${styles.tab}` : `${styles.tab}`}
              onClick={() => {
                setLayout(4);
                dispatch({
                  type: ACTIONS.FILTER_PROPERTIES, payload: { layout: 4, properties }
                })
                setClicked(false);
              }}>
              London
            </p>
          </div>

          <Button
            className={styles.btn}
            sx={{ borderRadius: '1000px' }}
            variant='outlined'
            endIcon={<EastOutlinedIcon />}>
            View All
          </Button>
        </div>
      </header>
    </>
  )
}

export default Navbar