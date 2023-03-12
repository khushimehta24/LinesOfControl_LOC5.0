import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardMedia, Grid } from '@mui/material';
import GetServices from 'src/services/GetServices';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box sx={{ width: '100%', padding: '0' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} sx={{ '& .Mui-selected': { color: '#EF60E5 !important' }, padding: '0', '& .MuiTabs-indicator': { backgroundColor: '#EF60E5' } }} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label='PortFolio'   {...a11yProps(0)} />
                    <Tab label='Events' {...a11yProps(1)} />
                    <Tab label='Rent' {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx={{ padding: '0' }}>
                <Grid container spacing={2}>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                            return <Grid item md={4}>
                                <CardMedia sx={{ width: '150px', height: '135px', borderRadius: '5px' }} component='img' image={`https://source.unsplash.com/random/${item}`} />
                            </Grid>
                        })
                    }
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                2
            </TabPanel>
            <TabPanel value={value} index={2}>
                3
            </TabPanel>
        </Box>
    );
}