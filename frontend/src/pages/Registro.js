import { useState, useEffect } from 'react';

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
import  axios  from 'axios';
// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Registro = () => {
    const [tipos, setTipos] = useState([]);
    const [sucursales, setSucursales] = useState([]);
    const [distribuidores, setDistribuidores] = useState([]);
    const [cantidad, setCantidad] = useState();
    const [medicamento, setMedicamento] = useState();
    const [tipoSeleccionado, setTipoSeleccionado] = useState()
    const [sucursalSeleccionada, setSucursalSeleccionada] = useState()
    const [distribuidorSeleccionado, setDistribuidorSeleccionado] = useState()

    const getTipos = async () => {
        await axios.post('http://127.0.0.1:8000/api/tipoMedicamento',
            {
                'content-type':'application/json'
            })
            .then((response) => {
                const data = response.data;
                setTipos(data.tipos);
            });
    };

    const getSucursales = async () => {
        await axios.post('http://127.0.0.1:8000/api/sucursales',
            {
                'content-type':'application/json'
            })
            .then((response) => {
                const data = response.data;
                setSucursales(data.sucursales);
            });
    };

    const getDistribuidores = async () => {
        await axios.post('http://127.0.0.1:8000/api/distribuidores',
            {
                'content-type':'application/json'
            })
            .then((response) => {
                const data = response.data;
                setDistribuidores(data.distribuidores);
            })
    };

    const guardarPedido = async (medicamento, cantidad, tipoMedicamento, sucursal, distribuidor) => {
        await axios.post('http://127.0.0.1:8000/api/guardarPedido',
            {
                medicamento,
                cantidad,
                tipoMedicamento,
                sucursal, 
                distribuidor
            },
            {
                'content-type':'application/json'
            })
            .then((response)=>{
                const data = response.data;
                console.log(data);
            })
    }
    useEffect(()=>{
        getTipos();
        getSucursales();
        getDistribuidores();
    },[]);
    return (
        <MainCard title="Registrar Medicamento">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <FormControl>
                        <FormLabel>Medicamento</FormLabel>
                        <TextField 
                            value={medicamento}
                            onChange={(e)=>{setMedicamento(e.target.value)}}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl>
                        <FormLabel>Tipo de Medicamento</FormLabel>
                        <Select
                            value={tipoSeleccionado}
                            onChange={(e)=>{setTipoSeleccionado(e.target.value)}}
                        >
                            {tipos.map((item)=>(

                                <MenuItem value={item.id}>{item.tipoMedicamento}</MenuItem>
                            )
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl>
                        <FormLabel>Cantidad</FormLabel>
                        <TextField
                            value={cantidad}
                            onChange={(e)=>{setCantidad(e.target.value)}}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl>
                        <FormLabel>Distribuidor</FormLabel>
                        <RadioGroup 
                            row
                            value={distribuidorSeleccionado}
                            onChange={(e)=>{setDistribuidorSeleccionado(e.target.value)}}
                        >
                            {distribuidores.map((item)=>(
                                <FormControlLabel value={item.id} control={<Radio />} label={item.distribuidor} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl>
                        <FormLabel>Sucursal</FormLabel>
                        <RadioGroup
                            value={sucursalSeleccionada}
                            onChange={(e)=>{setSucursalSeleccionada(e.target.value)}}
                        >
                            {sucursales.map((item)=>(
                               <FormControlLabel value={item.id} control={<Radio />} label={item.sucursal} /> 
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <Button variant="contained" color="success" onClick={()=>{guardarPedido(medicamento,cantidad,tipoSeleccionado,sucursalSeleccionada,distribuidorSeleccionado)}}>
                        Guardar
                    </Button>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Registro;
