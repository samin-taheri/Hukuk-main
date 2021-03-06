import { Link as RouterLink } from 'react-router-dom';
import { Type } from 'react-feather';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Link } from '@mui/material';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function DosyaTipi() {
  return (
    <RootStyle>
      <Link
        to="/dashboard/caseStatus"
        component={RouterLink}
        style={{ textDecoration: 'none', color: '#058' }}
      >
        <IconWrapperStyle>
          <Type width={24} height={24} />
        </IconWrapperStyle>
      </Link>
      <Typography variant="h3">
        <Link to="/" component={RouterLink} style={{ textDecoration: 'none', color: '#058' }}>
          Case Type
        </Link>
      </Typography>
      <Link to="/" component={RouterLink} style={{ textDecoration: 'none', color: '#058' }}>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Case Type
        </Typography>
      </Link>
    </RootStyle>
  );
}
