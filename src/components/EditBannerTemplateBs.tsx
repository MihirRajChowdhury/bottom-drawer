import React, { useState, useEffect } from 'react';
import { Box, Modal, TextField, Button } from '@mui/material';
import { AdBanner } from '../utils/types';
{/* <TextField label="Image" name="image" value={updatedAd.image} onChange={handleChange} fullWidth margin="normal" /> */}
interface EditBannerTemplateBsProps {
  open: boolean;
  ad: AdBanner;
  onClose: () => void;
  onSave: (updatedAd: AdBanner) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ open, ad, onClose, onSave }) => {
  const [updatedAd, setUpdatedAd] = useState(ad);

  useEffect(() => {
    setUpdatedAd(ad);
  }, [ad]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedAd({ ...updatedAd, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedAd);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', padding: 2, background: 'white' }}>
        <TextField label="Title" name="title" value={updatedAd.title} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Description" name="description" value={updatedAd.description} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="CTA" name="cta" value={updatedAd.cta} onChange={handleChange} fullWidth margin="normal" />
        
        <TextField label="Background" name="background" value={updatedAd.background} onChange={handleChange} fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
      </Box>
    </Modal>
  );
};

export default EditBannerTemplateBs;
