import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        menu: {
            home: 'Home',
            profile: 'Profile',
            profileEdit: 'Edit Profile',
            payment: 'Payment Method',
            procedure: 'Procedures',
            procedureW: 'My Procedures',
            search: 'Search Locals',
            exit:'Log Out'
        }
    },
    es: {
        menu: {
            home: 'Inicio',
            profile: 'Perfil',
            profileEdit: 'Editar Perfil',
            payment: 'Medios de Pago',
            procedure: 'Tramites',
            procedureW: 'Ver mis tramites',
            search: 'Buscar Local',
            exit:'Cerrar Sesion'
        }
    }
}

const i18n = createI18n({
    legacy:false,
    locale:'es',
    fallbackLocale: 'en',
    messages,
})

export  default  i18n;