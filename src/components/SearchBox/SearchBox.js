import { Stack,Box,Container, Button, TextField } from '@mui/material'; 
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react'; 
import CopyToClipboard from "react-copy-to-clipboard";
import axios from 'axios';

const SearchBox = ({ className }) => { 
    const [search, setSearch] = useState('');
    const [error, setError] = useState({ isError: false, message: '' });
    const [shortenedLink, setShortenedLink] = useState("") 
    const [loading, setLoading] = React.useState(false); 

    const fetchData = async () => { 
        try {

          const response = await axios(
            `https://api.shrtco.de/v2/shorten?url=${search}`
          );
          console.log(response);
          setShortenedLink(response.data.result.full_short_link);
          setLoading(false);
        } catch (e) {
          console.log(e);
          setShortenedLink(e);
          setLoading(false);
        }
      };

    const handleSubmit = (e) => {
        // REMOVE FORM DEFAULT BEHAVIOR
        e.preventDefault();

        setLoading(true);
        // VALIDATE SEARCH
        if (search.length) {
            fetchData();
        } else {
            setLoading(false);
            setError({
                isError: true,
                message: 'Shortener link cannot empty',
            });
        }
    };

    return (  
            <form onSubmit={handleSubmit} className={className}> 
               <Container>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        padding: '30px',
                        margin: '5px',
                        borderRadius: '10px',
                        backgroundColor: 'hsl(257, 27%, 26%)'   
                    }} >
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 1, md: 0 }}
                        backgroundColor={{backgroundColor: 'white'}}
                        borderRadius={{borderRadius:'10px' }} 
                        margin={{margin:'10px'}} 
                        padding={{padding:'10px'}} 
                     >
                     
                        <TextField 
                            fullWidth  
                            variant="filled" 
                            label="Shortener a link here."
                            name="search"
                            value={search}
                            placeholder="Shortener a link here ..."
                            onChange={(e) =>  setSearch(e.target.value)}
                            error={error.isError}
                            helperText={error.isError && error.message} 
                        />
                            
                            <LoadingButton
                                variant="contained" color="success"
                                onClick={handleSubmit}
                                loading={loading}
                                loadingIndicator="Loading..." >
                                Shortener
                            </LoadingButton>  

                          
                     </Stack>  
                     <div className="mt-5">
                     <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                color: "white",  
                                padding: '10px',
                                borderRadius: '10px',
                                backgroundColor: 'hsl(257, 27%, 26%)'   
                            }} >
 
                            <span style={{ marginRight: '1.5rem' }}>
                                {shortenedLink} 
                            </span>  
                            <CopyToClipboard 
                                padding="10px"
                                text={shortenedLink}> 
                                    <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md">
                                        Copy to Clipboard
                                    </Button>
                            </CopyToClipboard> 
                        </Box>
                      </div> 
                    </Box>     
                </Container>
                </form>  
    );
};

export default SearchBox;