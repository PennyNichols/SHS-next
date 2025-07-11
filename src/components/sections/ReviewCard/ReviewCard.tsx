'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Rating, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { alpha } from '@mui/material/styles';
import { customBorderRadius } from '@/styles/theme/otherThemeConstants';
import theme from '@/styles/theme';

function ReviewCard({ rating = 5, review, platform }) {
  const words = review.split(' ');
  const isTruncated = words.length > 10;

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card className="review-card">
        <Box display="flex" alignItems="center">
          <Rating
            value={rating}
            precision={1}
            readOnly
            icon={
              <StarIcon
                sx={{
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
                }}
                fontSize="inherit"
                htmlColor={theme.palette.accent.primary}
              />
            }
            emptyIcon={
              <StarIcon
                sx={{
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
                }}
                fontSize="inherit"
                htmlColor={`${alpha(theme.palette.primary.main, 0.2)}`}
              />
            }
          />
        </Box>
        <CardContent sx={{ p: 0 }}>
          <Typography className="review-text">
            “{review}” <br />
            <Typography
              variant="body2"
              component="span"
              sx={{
                textDecoration: 'underline',
                textDecorationThickness: 1,
                textUnderlineOffset: '3px',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={handleOpen}
              tabIndex={0}
              role="button"
            >
              Expand
            </Typography>
          </Typography>
        </CardContent>
        {platform && (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: 2,
                flexGrow: 1,
                backgroundColor: 'primary.light',
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.primary.light,
                fontSize: '0.875rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.12)',
                fontWeight: 500,
              }}
            >
              {platform}
            </Typography>
            <Box
              sx={{
                height: 2,
                flexGrow: 1,
                backgroundColor: 'primary.light',
              }}
            />
          </Box>
        )}
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 3,
            top: 3,
            color: 'primary.light',
          }}
          size="large"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{
              fontStyle: 'italic',
            }}
          >
            “{review}”
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ReviewCard;
