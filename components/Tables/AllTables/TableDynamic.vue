
<template>
    <div class="w-full 2xl:ml-36 dark:bg-slate-900 static">
        <DataTable :value="customers" ref="dt" :paginator="true" class="dark:bg-slate-900 p-datatable-customers " :rows="10"
            dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" v-model:filters="filters" filterDisplay="menu" :loading="loading"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            :globalFilterFields="['name','country.name','representative.name','status']" responsiveLayout="scroll">
            <template class="dark:bg-slate-900" #header>
                <div class="flex justify-center align-items-center">
                    <div style="text-align: left">
                        <Button class=" dark:bg-blue-900" icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                    </div>
                    <span class="p-input-icon-left  dark:bg-slate-900 ml-2">
                        <i class="pi pi-search" />
                        <InputText class="dark:bg-slate-900" v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty>
                No customers found.
            </template>
            <Column class="dark:bg-slate-900 dark:text-white" selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column class="dark:bg-slate-900 dark:text-white dark:border border-blue-900" field="name" header="Name" sortable style="min-width: auto">
                <template #body="{data}">
                    {{data.name}}
                </template>
                <template #filter="{filterModel}">
                    <InputText type="text" v-model="filterModel.value" class="p-column-filter text-xs dark:bg-slate-900 dark:text-white" placeholder="Search by name"/>
                </template>
            </Column>
            <Column class="dark:bg-slate-900 dark:text-white" field="country.name" header="Country" sortable filterMatchMode="contains" style="min-width: 10rem">
                <template #body="{data}">
                    <img src="https://www.defensa.gob.es/guardiareal/Galerias/multimedia/fotos/escudos/BANDERA_ESPANAmed.jpg" :class="'flag flag-' + data.country.code" width="30" />
                    <span class="image-text">{{data.country.name}}</span>
                </template>
                <template #filter="{filterModel}">
                    <InputText  type="text" v-model="filterModel.value" class="p-column-filter dark:bg-slate-900 dark:text-white" placeholder="Search by country"/>
                </template>
            </Column>
            <Column class="dark:bg-slate-900 dark:text-white" header="Agent" sortable filterField="representative" sortField="representative.name" :showFilterMatchModes="false" :filterMenuStyle="{'width':'10rem'}" style="min-width: 10rem">
                <template #body="{data}">
                    <img :alt="data.representative.name" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" width="32" style="vertical-align: middle" />
                    <span class="image-text">{{data.representative.name}}</span>
                </template>
                <template #filter="{filterModel}">
                    <div class="mb-3 font-bold dark:bg-slate-900 dark:text-white">Agent Picker</div>
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="p-multiselect-representative-option">
                                <img :alt="slotProps.option.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                <span class="image-text">{{slotProps.option.name}}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column class="dark:bg-slate-900 dark:text-white" field="date" header="Date" sortable dataType="date" style="min-width: 8rem">
                <template #body="{data}">
                    {{formatDate(data.date)}}
                </template>
                <template #filter="{filterModel}">
                    <Calendar class="dark:bg-slate-900 dark:text-white" v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                </template>
            </Column>
            <Column class="dark:bg-slate-900 dark:text-white" field="balance" header="Balance" sortable dataType="numeric" style="min-width: 8rem">
                <template #body="{data}">
                    {{formatCurrency(data.balance)}}
                </template>
                <template #filter="{filterModel}">
                    <InputNumber class="dark:bg-slate-900 dark:text-white" v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column class="dark:bg-slate-900 dark:text-white" field="status" header="Status" sortable :filterMenuStyle="{'width':'10rem'}" style="min-width: 10rem">
                <template #body="{data}">
                    <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                </template>
                <template #filter="{filterModel}">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                        <template #value="slotProps">
                            <span :class="'customer-badge status-' + slotProps.value">{{slotProps.value}}</span>
                        </template>
                        <template #option="slotProps">
                            <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column class="dark:bg-slate-900 dark:text-white" field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 10rem">
                <template #body="{data}">
                    <ProgressBar :value="data.activity" :showValue="false" />
                </template>
                <template  #filter="{filterModel}">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-center px-2 dark:bg-slate-900 dark:text-white">
                        <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                        <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                    </div>
                </template>
            </Column>
            <Column class="dark:bg-slate-900 dark:text-white" headerStyle="width: 4rem; text-align: center font-size: 0.8rem" bodyStyle="text-align: center; overflow: visible font-size: 0.8rem">
                <template #body>
                    <Button type="button" icon="pi pi-cog"></Button>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script>
    import { ref, onMounted } from "vue";
    import CustomerService from "../../../service/CustomerService";
    import { FilterMatchMode, FilterOperator } from "primevue/api";
export default {
    setup() {
        onMounted(() => {
            customerService.value.getCustomersLarge().then((data) => {
                customers.value = data;
                customers.value.forEach(
                    (customer) => (customer.date = new Date(customer.date))
                );
                loading.value = false;
            });
        });
        const customers = ref();
        const selectedCustomers = ref();
        const customerService = ref(new CustomerService());
        const dt = ref();
        const filters = ref({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
            "country.name": {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
            },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
            },
            balance: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
            },
            status: {
                operator: FilterOperator.OR,
                constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
            },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS },
        });
        const loading = ref(false);
        const representatives = [
            { name: "Amy Elsner", image: "amyelsner.png" },
            { name: "Anna Fali", image: "annafali.png" },
            { name: "Asiya Javayant", image: "asiyajavayant.png" },
            { name: "Bernardo Dominic", image: "bernardodominic.png" },
            { name: "Elwin Sharvill", image: "elwinsharvill.png" },
            { name: "Ioni Bowcher", image: "ionibowcher.png" },
            { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
            { name: "Onyama Limba", image: "onyamalimba.png" },
            { name: "Stephen Shaw", image: "stephenshaw.png" },
            { name: "XuXue Feng", image: "xuxuefeng.png" },
        ];
        const statuses = ref([
            "unqualified",
            "qualified",
            "new",
            "negotiation",
            "renewal",
            "proposal",
        ]);
        const formatDate = (value) => {
            return value.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
        };
        const formatCurrency = (value) => {
            return value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        };
        const exportCSV = () => {
            dt.value.exportCSV();
        };
        return {
            dt,
            exportCSV,
            customers,
            filters,
            loading,
            representatives,
            formatCurrency,
            selectedCustomers,
            formatDate,
            statuses,
        };
    }
};
</script>
<!-- <style lang="scss" scoped>
::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
        font-size: 0.9rem;
    }
}

::v-deep(.p-progressbar) {
    height: .5rem;
    background-color: #D8DADC;

    .p-progressbar-value {
        background-color: #607D8B;
    }
}

::v-deep(.p-datepicker) {
    min-width: 25rem;

    td {
        font-weight: 400;
    }
}

::v-deep(.p-datatable.p-datatable-customers) {
    .p-datatable-table {
        background-color: rgb(15 23 42);
    }
    .p-datatable-header {
        padding: 1rem 0rem;
        text-align: left;
        font-size: 1rem;
        border: 0;
    }

    .p-paginator {
        padding: 0.9rem;
    }
    .p-column-header-content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .p-column-filter-menu {
        margin-left: 0;
    }
    .p-datatable-thead > tr > th {
        background-color: #F4F9F9;
        text-align: left;
        font-size: 0.8rem;
    }

    .p-datatable-tbody > tr > td {
        cursor: auto;
        font-size: 0.8rem;
        padding: 0.3rem;
    }
    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}
</style> -->