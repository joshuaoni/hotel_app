"use client";

import {
  useClick,
  useCurrentData,
  useDispatch,
  useError,
  useLayout,
  useLoading,
  useProperty,
  useSetClick
} from '../../_contexts/PropertyProvider';
import { ReuseableCard } from '../index';
import styles from './PropertyComponent.module.css';
import { Button } from '@mui/material';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { ACTIONS } from '../../_actions/propertyActions';
import Link from 'next/link';

const PropertyComponent = () => {
  const currentCityProperties = useCurrentData();
  const dispatch = useDispatch();
  const layout = useLayout();
  const properties = useProperty();
  const clicked = useClick();
  const setClicked = useSetClick();
  const isLoading = useLoading();
  const error = useError();

  return (
    <>
      <main className={styles.container}>
        <div className={styles.cards}>
          {isLoading ?
            <p>Loading..</p> :
            error ?
              <p>{error === 'Failed to fetch' ? 'Failed to fetch properties. Check that the server is running and try again' : 'An Error Occurred'}</p> :
              currentCityProperties.length ?
                currentCityProperties.map(property => (
                  <Link
                    key={property.id}
                    href={`/property/${property.id}`}
                  >
                    <ReuseableCard property={property} />
                  </Link>
                )) :
                <p>No properties available</p>}
        </div>

        <div className={styles.btn_cont}>
          {!clicked && !error &&
            <Button
              className={styles.btn}
              sx={{ borderRadius: '1000px', color: 'white', bgcolor: '#373ae1' }}
              variant='outlined'
              onClick={() => {
                dispatch({
                  type: ACTIONS.SHOW_MORE, payload: { layout, properties }
                })
                setClicked(!false);
              }}
              startIcon={<HourglassTopIcon />}>
              Show More
            </Button>}
        </div>
      </main>
    </>
  )
}

export default PropertyComponent