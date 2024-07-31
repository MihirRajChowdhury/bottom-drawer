import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { AdBanner } from '../utils/types';

interface AdBannerProps extends AdBanner {
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<AdBannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <Box sx={{ background: background, padding: 2, margin: 1, borderRadius: 2, position: 'relative' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h6" color="primary">{title}</Typography>
      <Typography variant="body1" color="primary">{description}</Typography>
      <Button variant="contained" color="primary">{cta}</Button>
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => onEdit(id)} 
        style={{ position: 'absolute', top: 10, right: 10 }}
      >
        Edit
      </Button>
    </Box>
  );
}

export default BannerImageComp;
