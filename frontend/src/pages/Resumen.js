import {useState, useEffect} from 'react';
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
    Button,
    Stack,
    IconButton
} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import MUIDataTable from 'mui-datatables';
// project import
import MainCard from 'components/MainCard';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// ==============================|| SAMPLE PAGE ||============================== //

const Resumen = () => {
    const MySwal = withReactContent(Swal)
    const [pedidos, setPedidos] = useState([])
    
    const getPedidos = async () => {
        await axios.post('http://127.0.0.1:8000/api/pedidos',
            {
                'content-type':'application/json'
            })
            .then((response) => {
                const data = response.data;
                setPedidos(data.pedidos);
            });
    };

    const eliminar = async (id) => {
        await axios.post('http://127.0.0.1:8000/api/eliminarPedido',
            {
                id,
            },
            {
                'content-type' : 'application/json'
            })
            .then((response) => {
                const data = response.data;
                if(data.success){
                    MySwal.fire({

                        title: 'Eliminar Pedido',
                        text: 'Se ha eliminado el pedido de la base de datos',
                        icon: 'success'
                    })
                    getPedidos()
                }else{
                    MySwal.fire({

                        title: 'Eliminar Pedido',
                        text: 'Hubo un error al eliminar el pedido',
                        icon: 'success'
                    })
                }
            })
    }

    const columnas  = [
        {
         name: "id",
         label: "ID",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "medicamento",
         label: "MEDICAMENTO",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
            name: "cantidad",
            label: "CANTIDAD",
            options: {
             filter: true,
             sort: false,
            }
        },
        {
            name: "tipoMedicamentoId",
            label: "ID TIPO MEDICAMENTO",
            options: {
             filter: true,
             sort: false,
             display: false,
            }
        },
        {
            name: "tipoMedicamento",
            label: "TIPO MEDICAMENTO",
            options: {
             filter: true,
             sort: false,
            }
        },
        {
            name: "sucursalId",
            label: "ID SUCURSAL",
            options: {
             filter: true,
             sort: false,
             display: false,
            }
        },
        {
            name: "sucursal",
            label: "SUCURSAL",
            options: {
             filter: true,
             sort: false,
            }
        },
        {
            name: "direccion",
            label: "DIRECCION",
            options: {
             filter: true,
             sort: false,
            }
        },
        {
            name: "distribuidorId",
            label: "ID DISTRIBUIDOR",
            options: {
             filter: true,
             sort: false,
             display: false,
            }
        },
        {
            name: "distribuidor",
            label: "DISTRIBUIDOR",
            options: {
             filter: true,
             sort: false,
            }
        },
        {
            name: "acciones",
            label: "ACCIONES",
            options: {
             filter: true,
             sort: false,
             customBodyRender: (value, tableMeta) => {
                    return (
                        <>
                            <Stack direction="row">
                                <IconButton 
                                    color='error' 
                                    onClick={()=>{eliminar(tableMeta.rowData[0])}}
                                    >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton color='primary'> 
                                    <EditIcon />
                                </IconButton>
                            </Stack>
                        </>
                    );
                }
            },
        },
    ];
    useEffect(()=>{
        getPedidos();
    },[]);
    return (
        <MainCard title="Resumen de Pedidos">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <MUIDataTable
                    columns={columnas}
                    data={pedidos}
                />
                </Grid>
            </Grid>
        </MainCard>
    );
};
    


export default Resumen;
