<template>
    <div class="p-fluid">
        <div class="card">
            <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Row Editing</h5>
            <DataTable :value="products2" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
                <Column field="code" header="Code" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
                <Column field="name" header="Name" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" style="width:20%">
                    <template #editor="{ data, field }">
                        <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                            <template #option="slotProps">
                                <span :class="'product-badge status-' + slotProps.option.value.toLowerCase()">{{slotProps.option.label}}</span>
                            </template>
                        </Dropdown>
                    </template>
                    <template #body="slotProps">
                        {{getStatusLabel(slotProps.data.inventoryStatus)}}
                    </template>
                </Column>
                <Column field="price" header="Price" style="width:20%">
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" />
                    </template>
                </Column>
                <Column :rowEditor="true" style="width:10%; min-width:8rem" bodyStyle="text-align:center"></Column>
            </DataTable>
        </div>

        <div class="card">
            <h5>Cell Editing with Sorting and Filter</h5>
            <DataTable :value="products3" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" filterDisplay="row" v-model:filters="filters" responsiveLayout="scroll">
                <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field" style="width:25%" sortable filter>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" v-tooltip.top.focus="'Hit enter key to filter'"/>
                    </template>
                    <template #editor="{ data, field }">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from '../../../service/ProductService';
import {FilterMatchMode} from 'primevue/api';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products1.value = data);
            productService.value.getProductsSmall().then(data => products2.value = data);
            productService.value.getProductsSmall().then(data => products3.value = data);
        });

        const productService = ref(new ProductService());
        const editingRows = ref([]);
        const columns = ref([
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ]);
        const products1 = ref(null);
        const products2 = ref(null);
        const products3 = ref(null);
        const statuses = ref([
            {label: 'In Stock', value: 'INSTOCK'},
            {label: 'Low Stock', value: 'LOWSTOCK'},
            {label: 'Out of Stock', value: 'OUTOFSTOCK'}
        ]);
        const filters = ref({
            'code': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            'quantity': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
            'price': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
        });

        const onCellEditComplete = (event) => {
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
                    if (isPositiveInteger(newValue))
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;

                default:
                    if (newValue.trim().length > 0)
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;
            }
        };
        const isPositiveInteger = (val) => {
            let str = String(val);
            str = str.trim();
            if (!str) {
                return false;
            }
            str = str.replace(/^0+/, "") || "0";
            var n = Math.floor(Number(str));
            return n !== Infinity && String(n) === str && n >= 0;
        };
        const onRowEditSave = (event) => {
            let { newData, index } = event;

            products2.value[index] = newData;
        };
        const getStatusLabel = (status) => {
            switch(status) {
                case 'INSTOCK':
                    return 'In Stock';

                case 'LOWSTOCK':
                    return 'Low Stock';

                case 'OUTOFSTOCK':
                    return 'Out of Stock';

                default:
                    return 'NA';
            }
        };

        return { productService, editingRows, columns, products1, products2, products3, statuses, filters, onCellEditComplete,
            isPositiveInteger, onRowEditSave, getStatusLabel }
    }
}
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
    .p-datatable-header {
        padding: 1rem 0rem;
        text-align: left;
        font-size: 1rem;
    }

    .p-paginator {
        padding: 0.9rem;
    }
    .p-column-header-content{
        display: flex;
        align-items: center;
    }
    .p-datatable-tbody > tr:hover {
        border: 1px solid #cfcfcf;
    }
    .p-column-filter-menu {
        margin-left: 0;
    }
    .p-datatable-thead > tr > th {
        background-color: #E6E6E6;
        text-align: left;
        font-size: 0.8rem;
    }

    .p-datatable-tbody > tr > td {
        cursor: auto;
        font-size: 0.8rem;
        padding: 0.5rem;
    }
    .p-dropdown-label:not(.p-placeholder) {
        text-transform: uppercase;
    }
}
</style> -->