import React, { useState } from 'react';
import { TextField, Typography, Box, Grid } from '@mui/material';
import ActionButton from '../../common/ActionButton/ActionButton';
import { useFirebaseCollections } from '../../../contexts/FirebaseCollectionContext/FirebaseCollectionContext';
import CustomTextField from '@/components/common/CustomTextField';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { addSubscriber } = useFirebaseCollections();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultMessage = await addSubscriber(email);
    setMessage(resultMessage);
    if (resultMessage === 'Thank you for subscribing!') {
      setEmail('');
    }
  };

  return (
    <Grid
      container
      component="form"
      onSubmit={handleSubmit}
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: { xxs: 'column', sm: 'row' },
        alignItems: { xxs: 'stretch', md: 'center' },
      }}
    >
      <Grid item xxs={12} sm={6} md={8} sx={{ display: 'flex' }}>
        <CustomTextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          label="Email"
          color="secondary"
        />
      </Grid>
      <Grid item xxs={12} sm={6} md={4} sx={{ display: 'flex' }}>
        <ActionButton type="submit" variant="contained" color="secondary" text="Subscribe" />
        {message && <Typography variant="body1">{message}</Typography>}
      </Grid>
    </Grid>
  );
};

export default SubscribeForm;
