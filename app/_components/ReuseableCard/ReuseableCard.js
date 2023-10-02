import styles from './ReuseableCard.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import { Button } from '@mui/material';

const ReuseableCard = ({ property }) => {
  return (
    <>
      <div className={styles.card}>
        <div style={{ backgroundImage: "url(" + property.image + ")" }} className={styles.img_cont}>
          <p>For {property.purpose}</p>
          <div className={styles.like}>
            <FavoriteBorderIcon />
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.name}>
            <p><PlaceOutlinedIcon /> {property.location}</p>
            <h4>{property.name}</h4>
          </div>

          <div className={styles.details}>
            <div>
              <div>
                <OtherHousesOutlinedIcon />
                <p>{property.rooms} Rooms</p>
              </div>
            </div>
            <div>
              <div>
                <KingBedOutlinedIcon />
                <p>{property.beds} Beds</p>
              </div>
            </div>
            <div>
              <div>
                <BathtubOutlinedIcon />
                <p>{property.baths} Baths</p>
              </div>
            </div>
            <div>
              <div>
                <OpenWithOutlinedIcon />
                <p>{property.area} sft</p>
              </div>
            </div>
          </div>

          <div className={styles.bottom_content}>
            <p className={styles.price}>${property.price} <span>/month</span></p>

            <Button
              className={styles.btn}
              sx={{ borderRadius: '1000px' }}
              variant='outlined'>
              Read More
            </Button>
          </div>
        </div>

        {property.popular && <div className={styles.clip}>
          <div className={styles.popular}>Popular</div>
          <div className={styles.bg}></div>
        </div>}
      </div>
    </>
  )
}

export default ReuseableCard