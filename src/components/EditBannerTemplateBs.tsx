import React, { useState, useEffect } from 'react';
import { Box, Modal, TextField, Button } from '@mui/material';
import { AdBanner } from '../utils/types';

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUpdatedAd({ ...updatedAd, image: imageUrl });
    }
  };

  const handleSave = () => {
    onSave(updatedAd);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', padding: 2, background: 'white' }}>
        <TextField
          label="Title"
          name="title"
          value={updatedAd.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={updatedAd.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CTA"
          name="cta"
          value={updatedAd.cta}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        
        <Button
          variant="contained"
          component="label"
          
          sx={{ marginY: 2 }}
        >
          Change Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>
        <TextField
          label="Background"
          name="background"
          value={updatedAd.background}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditBannerTemplateBs;
