import { ReuseableCard } from '@/app/_components';
import styles from '../../page.module.css';
import { getProperty } from '@/app/_utils/propertyUtils';
import { notFound } from 'next/navigation';

const PropertyDetails = async ({ params }) => {
  const id = params.id;
  console.log({ id })

  if (Number(id) > 36 || Number(id) < 1 || isNaN(Number(id))) {
    notFound();
  }

  const [property, error] = await getProperty(id);

  return (
    <>
      <section className={styles.property_page}>
        <h1>Property Details</h1>

        <div className={styles.content}>
          <div>
            {error === null ?
              <ReuseableCard property={property} /> :
              <p className={styles.error}>{error.message === 'fetch failed' ?
                'Failed to fetch property. Check that the server is running and try again' :
                'An Error Occurred'}</p>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default PropertyDetails