import styles from './MenuMobile.module.css'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// const options = [
//   'sobreNos',
//   'Atria',
//   'Callisto',
//   'Dione',
// ];

const ITEM_HEIGHT = 48;

export default function MenuMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.divMenu}>
      <IconButton className={styles.IconButton}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className={styles.iconSvg}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
       
        <MenuItem onClick={handleClose}>
            <li>
                <a className={styles.opçao}  href='#sobreNos'>Sobre nós</a>
            </li>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <li>
                <a className={styles.opçao} href='#produtos'>Produtos</a>
            </li>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <li>
                <a className={styles.opçao} href='#contatos'>Contatos</a>
            </li>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <li>
                <a className={styles.opçao} href='#parcerias'>Parcerias</a>
            </li>
          </MenuItem>
      </Menu>
    </div>
  );
}