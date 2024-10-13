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

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Registro = () => (
    <MainCard title="Registrar Medicamento">
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <FormControl>
                    <FormLabel>Medicamento</FormLabel>
                    <TextField />
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl>
                    <FormLabel>Tipo de Medicamento</FormLabel>
                    <Select>
                        <MenuItem>Analgesico</MenuItem>
                        <MenuItem>Analéptico</MenuItem>
                        <MenuItem>Anestesico</MenuItem>
                        <MenuItem>Antiacido</MenuItem>
                        <MenuItem>Antidepresivo</MenuItem>
                        <MenuItem>Antibiotico</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl>
                    <FormLabel>Cantidad</FormLabel>
                    <TextField />
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl>
                    <FormLabel>Distribuidor</FormLabel>
                    <RadioGroup row>
                        <FormControlLabel value="cofarma" control={<Radio />} label="Cofarma" />
                        <FormControlLabel value="empsephar" control={<Radio />} label="Empsephar" />
                        <FormControlLabel value="cemefar" control={<Radio />} label="Cemefar" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl>
                    <FormLabel>Sucursal</FormLabel>
                    <FormGroup>
                        <FormControlLabel value="principal" control={<Checkbox />} label="Principal" />
                        <FormControlLabel value="secundaria" control={<Checkbox />} label="Secundaria" />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid item xs={5}>
                <Button variant="contained" color="success">
                    Guardar
                </Button>
            </Grid>
        </Grid>
    </MainCard>
);

export default Registro;
