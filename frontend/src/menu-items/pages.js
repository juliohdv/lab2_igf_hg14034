// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Medicamentos',
    type: 'group',
    children: [
        {
            id: 'registro',
            title: 'Registrar Medicamento',
            type: 'item',
            url: '/registro',
            icon: icons.LoginOutlined
        },
        {
            id: 'resumen',
            title: 'Resumen de Pedidos',
            type: 'item',
            url: '/resumen',
            icon: icons.ProfileOutlined
        }
    ]
};

export default pages;
