import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, styled } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const FormContainer = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const FileInput = styled('div')({
  width: '97%',
  margin: '10px 0',
});

const SubmitButton = styled(Button)({
  marginBottom: 10,
});

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => currentId ? state.posts.find((p)  => p._id === currentId): null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(post){setPostData(post);}
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
        dispatch(updatePost(currentId, postData));
    }else{
        dispatch(createPost(postData));
    }
    clearForm();
  };

  const clearForm = () => {
    setCurrentId(null);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleInputChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };



  return (
    <PaperStyled>
      <FormContainer autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">{ currentId ? 'Editing' : 'Creating' } a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={handleInputChange} sx={{ marginBottom: 2, marginTop: 2 }} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={handleInputChange} sx={{ marginBottom: 2 }} />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={handleInputChange} sx={{ marginBottom: 2 }} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')}) }/>
        <FileInput>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </FileInput>
        <SubmitButton variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </SubmitButton>
        <Button variant="contained" color="secondary" size="small" onClick={clearForm} fullWidth>
          Clear
        </Button>
      </FormContainer>
    </PaperStyled>
  );
};

export default Form;