
<template>
	<div>
        <div class="card dark:bg-slate-900">
            <!--start---DataTable-->
            <DataTable :value="customers" ref="dt" :paginator="true" :rows="10" v-model:filters="filters1"
                v-model:selection="selectedCustomer1" selectionMode="single" dataKey="id"
                stateStorage="session" stateKey="dt-state-demo-session" responsiveLayout="scroll" class="dark:bg-slate-900">
                <!--start---header-DataTable-->
                <template #header>
                    <div style="text-align: left">
                        <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                    </div>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText class="dark:bg-slate-900 dark:text-white" v-model="filters1['global'].value" placeholder="Global Search" />
                    </span>
                </template>
                <!--end---header-DataTable-->

                <!--start---Column-DataTable-->
                <Column field="name" header="Name" :sortable="true" style="width:25%" class="dark:bg-slate-900">
                    <template #filter>
                        <InputText type="text" v-model="filters1['name']" class="p-column-filter" placeholder="Search by name"/>
                    </template>
                </Column>
                <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width:25%" class="dark:bg-slate-900">
                    <template #body="slotProps">
                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" />
                        <span class="image-text">{{slotProps.data.country.name}}</span>
                    </template>
                    <template #filter>
                        <InputText type="text" v-model="filters1['country.name']" class="p-column-filter" placeholder="Search by country"/>
                    </template>
                </Column>
                <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in" style="width:25%" class="dark:bg-slate-900">
                    <template #body="slotProps">
                        <img :alt="slotProps.data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                        <span class="image-text">{{slotProps.data.representative.name}}</span>
                    </template>
                        <template #filter>
                        <MultiSelect v-model="filters1['representative.name']" :options="representatives" optionLabel="name" optionValue="name" placeholder="All" class="p-column-filter">
                            <template #option="slotProps">
                                <div class="p-multiselect-representative-option">
                                    <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="20" style="vertical-align: middle" />
                                    <span class="image-text">{{slotProps.option.name}}</span>
                                </div>
                            </template>
                        </MultiSelect>
                    </template>
                </Column>
                <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="width:25%" class="dark:bg-slate-900">
                    <template #body="slotProps">
                        <span :class="'customer-badge status- dark:bg-slate-900' + slotProps.data.status">{{slotProps.data.status}}</span>
                    </template>
                    <template #filter>
                        <Dropdown v-model="filters1['status']" :options="statuses" placeholder="Select a Status" class="p-column-filter" :showClear="true">
                            <template #option="slotProps">
                                <span :class="'customer-badge status- dark:bg-slate-900' + slotProps.option">{{slotProps.option}}</span>
                            </template>
                        </Dropdown>
                    </template>
                </Column>
                <!--end---Column-DataTable-->
                <template #empty>
                    No customers found.
                </template>
            </DataTable>
            <!--end---DataTable-->
        </div>
	</div>
</template>

<script>
    // Utilizaremos El Compasition Api en components
    // Import Vue3 Start
    import { ref, onMounted } from 'vue';
    // Import Vue3 End
    // Import Components Start
    import CustomerService from '../../service/CustomerService';
    // Import Components End
    // Import de Activations PrimeVue Start
    import { FilterMatchMode } from 'primevue/api';
    // Import de Activations PrimeVue End
    export default {
        setup() {       
            // initialize components based on data attribute selectors
            onMounted(() => {
                customerService.value.getCustomersMedium().then(data => customers.value = data);
            })
            const dt = ref();
            const customers = ref();
            const customerService = ref(new CustomerService());
            const selectedCustomer1 = ref();
            const selectedCustomer2 = ref();
            const filters1 = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});
            const filters2 = ref({'global': {value: null, matchMode: FilterMatchMode.CONTAINS}});
            const loading = ref(true);
            const representatives = ref([
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ]);
            const statuses = ref([
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ]);
            
            const exportCSV = () => {
                dt.value.exportCSV();
            };
            return { dt, exportCSV, customers, customerService, selectedCustomer1, selectedCustomer2, filters1, filters2, loading, representatives, statuses }
        },
}
</script>                  
