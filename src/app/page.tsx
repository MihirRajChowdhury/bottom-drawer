"use client"
import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import ads from '../data/ads.json';
import { AdBanner } from '../utils/types';

const Home: React.FC = () => {
  const [adList, setAdList] = useState<AdBanner[]>(ads);
  const [selectedAd, setSelectedAd] = useState<AdBanner | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEdit = (id: number) => {
    const ad = adList.find(ad => ad.id === id);
    if (ad) {
      setSelectedAd(ad);
      setIsEditOpen(true);
    }
  };

  const handleSave = (updatedAd: AdBanner) => {
    setAdList(adList.map(ad => ad.id === updatedAd.id ? updatedAd : ad));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {adList.map(ad => (
          <Grid item xs={12} md={6} key={ad.id}>
            <BannerImageComp {...ad} onEdit={handleEdit} />
          </Grid>
        ))}
      </Grid>
      {selectedAd && (
        <EditBannerTemplateBs 
          open={isEditOpen} 
          ad={selectedAd} 
          onClose={() => setIsEditOpen(false)} 
          onSave={handleSave} 
        />
      )}
    </Container>
  );
};

export default Home;
