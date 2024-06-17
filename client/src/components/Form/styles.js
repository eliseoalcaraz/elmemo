import { styled } from '@mui/system';

const RootContainer = styled('div')({
  '& .MuiTextField-root': {
    margin: (theme) => theme.spacing(1),
  },
});
const PaperStyled = styled('div')({
  padding: (theme) => theme.spacing(2),
});

const FormContainer = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const FileInput = styled('input')({
  width: '97%',
  margin: '10px 0',
});

const SubmitButton = styled('button')({
  marginBottom: 10,
});

export { RootContainer, PaperStyled, FormContainer, FileInput, SubmitButton };
