import { styled } from '@mui/system';

const MainContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const SmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const ActionDiv = styled('div')({
  textAlign: 'center',
});

export { MainContainer, SmMargin, ActionDiv };
