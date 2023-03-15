<template>
    <div>
        <Toast />
        <DataTable ref="dt" :value="products" responsiveLayout="scroll" :reorderable-columns="true" @columnReorder="onColReorder" @onRowReorder="onRowReorder">
            <template #header>
                <div style="text-align:left">
                    <div class="flex justify-between items-center">
                        <div class="flex-none">
                            <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                                placeholder="Select Columns" style="width: 23em"/>
                        </div>
                        <div class="flex-none">
                            
                        </div>
                        <div class="flex-none">
                            <Button class="btn dark:bg-blue-900" icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                        </div>
                    </div>

                </div>
            </template>
            <Column :rowReorder="false" field="code" header="Code" :reorderableColumn="false"/>
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProductService from '../../../service/ProductService';

export default {
    setup() {
        onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
        })
        const dt = ref({});
        const exportCSV = () => {
            dt.value.exportCSV();
        };
        const columns = ref([
            {field: 'name', header: 'Name'},
            {field: 'lastName', header: 'LastName'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'email', header: 'Email'},
            {field: 'country', header: 'Country'}
        ]);
        const onColReorder = () => {
            toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        };
        const onRowReorder = (event) => {
            products.value = event.value;
            toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
        };
        const selectedColumns = ref(columns.value);
        const products = ref();
        const productService = ref(new ProductService());
        const onToggle = (val) => {
            selectedColumns.value = columns.value.filter(col => val.includes(col));
        };

        return { onRowReorder, onColReorder, dt, exportCSV, columns, selectedColumns, products, productService, onToggle }
    }
}
</script>
<style>
/* Header */
.p-multiselect-header {
    border-radius: 10px;
}
.p-multiselect-item {
    font-size: 0.8rem;
    font-weight: 500;
    background: none;
}
.p-multiselect-label-container{
    height: 28px;
    font-size: 0.8rem;
    text-align: center;
}
.p-multiselect-label {
    padding: 5px 0 0px 0 !important;
}
.p-button{
    font-size: 0.8rem;
    padding: 0.5rem 0.5rem;
}

/* Table */
.p-column-header-content {
    width: auto;
}
.p-datatable .p-datatable-header{
    border: 0;
}
.p-datatable-thead{
    background-color: azure;
    font-size: 0.9rem;
    border: 0;
}
.columnheader{
    height: auto;
}
.p-column-header-content {
    justify-content: start;
    align-items: center;
}
.p-datatable .p-datatable-tbody > tr {
    font-size: 0.9rem;
}
.p-datatable .p-datatable-tbody > tr >td {
    border: 1px solid rgb(226 232 240);
    font-size: 0.9rem;
    padding: 0.6rem;
}
</style>