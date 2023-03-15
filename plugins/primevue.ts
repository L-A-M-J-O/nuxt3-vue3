// Define Nuxt--App Global
import { defineNuxtPlugin } from "#app";
// Define Components-plugins Utilizaras
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import DataTable from 'primevue/datatable';
import Row from 'primevue/row';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import MultiSelect from 'primevue/multiselect';
import SplitButton from 'primevue/splitbutton';
import InputText from 'primevue/inputtext';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Skeleton from 'primevue/skeleton';
import Chip from 'primevue/chip';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('DataTable', DataTable);
    nuxtApp.vueApp.component('Column', Column);
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
    nuxtApp.vueApp.component('Row', Row);
    nuxtApp.vueApp.component('SplitButton', SplitButton);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('ProgressBar', ProgressBar);
    nuxtApp.vueApp.component('Tag', Tag);
    nuxtApp.vueApp.component('Skeleton', Skeleton);
    nuxtApp.vueApp.component('Chip', Chip);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('AvatarGroup', AvatarGroup);
    nuxtApp.vueApp.component('MultiSelect', MultiSelect);
    //other components that you need...
});