// material-ui
import {
    Grid,
    FormControl,
    FormLabel,
    TextField,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormGroup,
    Checkbox,
    Button
} from '@mui/material';
import MUIDataTable from 'mui-datatables';
// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Resumen = () => (
    <MainCard title="Resumen de Pedidos">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MUIDataTable />
            </Grid>
        </Grid>
    </MainCard>
);

export default Resumen;
