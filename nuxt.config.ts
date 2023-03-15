import { defineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
      ],
      noscript: [
        // <noscript>JavaScript is required.</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: 
  [
    '~/assets/css/global.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  modules: 
  [ 
    'nuxt-icon',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: {
      legacy: true,
      locale: 'es',
      messages: {
        en: {
          /* sing in start*/
          logIn: 'Sign in your account',
          subLogIn: 'or Welcome Sea&Ports',
          emailLabel: 'Email address',
          passLabel: 'Password',
          rember: 'Remember me',
          passRember: 'PassWord Forgotten?',
          signBtn: 'Sign in',
          /* sing in end*/
          /* SideBar start*/
          home: 'Home',
          general: 'General',
              /* SideBar General start */
              gCountry: 'Countrys',
              gUsers: 'Users',
              gEntities: 'Entities',
              gCatalogs: 'Catalogs',
              /* SideBar General end */
          maritimeAgency: 'Maritime agency',
              /* SideBar General start */
              maFiles: 'Maritime Records',
              maBilling: 'Billing',
              /* SideBar General end */
          ftf: 'Freight forwarder',
              /* SideBar ftf start */
              ftfOfferts: 'Offers',
              ftfOffert: 'Offer',
              /* SideBar ftf end */
          rates: 'Rates',
              /* SideBar rates start */
              rFee: 'Fee Criteria Table',
              rFeeC: 'Fee criteria',
              rC: 'Cost',
              rS: 'Sales',
              rQ: 'Quotes',
              rMC:'Manage Quotes',
              rMO: 'Manage Offers',
              /* SideBar rates end */
          crm: 'CRM',
              /* Sidebar CRM start */
              crCM: 'Commercial management',
              /* Sidebar CRM end */
          chat: 'Chat',
                /* Sidebar chat start */
                chM: 'Message',
                /* Sidebar chat end */
          maintenance: 'Maintenance',
                /* Sidebar Maintenance start */
                mPM: 'Messaging Dashboard',
                mMC: 'Container movements',
                /* Sidebar Maintenance end */
          settings: 'Settings',
          /* SideBar end*/

          /* Navbar Users start */
          dnGU: 'General description',
          pGU: 'Preferences',
          dGU: 'Disconnect',
          /* Navbar Users end */ 
          /* content start */
          welcome: 'Dashboard',
          /* content end */
        },
        es: {
          /* sing in start*/
         welcome: 'Panel',
         logIn: 'Iniciar sesión en tu cuenta',
         subLogIn: 'y Bienvenido A Sea&Ports',
         emailLabel: 'Correo electronico',
         passLabel: 'Contraseña' ,        
         rember: 'Recordarme',
         passRember: '¿Has olvidado la contraseña?',
         signBtn: 'Inicia sesión',
         /* sing in end*/
          /* SideBar start*/
          home: 'Inicio',
          general: 'General',
              /* SideBar General start */
              gCountry: 'Empresas',
              gUsers: 'Usuarios',
              gEntities: 'Entidades',
              gCatalogs: 'Catalogos',
              /* SideBar General end */  
          maritimeAgency: 'Agencia Marítima',
              /* SideBar General start */
              maFiles: 'Agencia Maritima',
              maBilling: 'Facturacion',
              /* SideBar General end */
          ftf: 'Transitario',
              /* SideBar ftf start */
              ftfOfferts: 'Ofertas',
              ftfOffert: 'Oferta',
              /* SideBar ftf end */
          rates: 'Tarifas',
                /* SideBar rates start */
                rFee: 'Tablas De Criterios de Tarifas',
                rFeeC: 'Criterios de Tarifas',
                rC: 'Coste',
                rS: 'Venta',
                rQ: 'Cotizaciones',
                rMC:'Gestionar Cotizaciones',
                rMO: 'Gestionar Ofertas',
                /* SideBar rates end */
          crm: 'CRM',
              /* Sidebar CRM start */
              crCM: 'Gestion Comercial',
              /* Sidebar CRM end */
          chat: 'Mensajes',
              /* Sidebar chat start */
              chM: 'Mensaje Interno',
              /* Sidebar chat end */
          maintenance: 'Mantenimiento',
              /* Sidebar Maintenance start */
              mPM: 'Panel de Mensajeria',
              mMC: 'Movimientos de Contenedores',
              /* Sidebar Maintenance end */
          settings: 'Configuracion',
          /* SideBar end*/
          /* Navbar Users start */
          dnGU: 'Descripción General',
          pGU: 'Preferencias',
          dGU: 'Desconectar'
          /* Navbar Users end */ 
        },
        fr: {
           /* sing in start*/
          welcome: "Tableau d'information",
          logIn: '',
          subLogIn: '',
          emailLabel: '',
          passLabel: '',  
          /* sing in end*/
          /* SideBar start*/
          home: 'Home',
          general: 'General',
          /* SideBar end*/
        },
        pt: {
           /* sing in start*/
          welcome: 'Painel',
          logIn: '',
          subLogIn: '',
          emailLabel: '',
          passLabel: '',  
          /* sing in end*/
          /* SideBar start*/
          home: 'Home',
          general: 'General',
          /* SideBar end*/
        }
      }
    }
  },
  build: {
		transpile: ['primevue']
	},
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },
})
 