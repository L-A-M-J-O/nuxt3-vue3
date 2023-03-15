<template>
    <div>
        <!--tart---DataTable-->
        <DataTable :value="products" ref="dt" responsiveLayout="scroll">
            <!--start---header-DataTable-->
            <template #header>
                <div style="text-align: left">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
            </template>
            <!--end---header-DataTable-->

            <!--start---Column-DataTable-->
            <Column field="code" header="Code" exportHeader="Product Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <!--end---Column-DataTable-->
        </DataTable>
        {{ /* end---DataTable */ }}
    </div>
</template>

<script>
    // Import Vue3 Start
    import { ref, onMounted } from 'vue';
    // Import Vue3 End

    // Import Components Start
    import ProductService from '../../../service/ProductService';
    // Import Components End

    export default {
        setup() {
            // initialize components based on data attribute selectors
            onMounted(() => {
            productService.value.getProductsSmall().then(data => products.value = data);
            })

            const dt = ref();
            const products = ref();
            const productService = ref(new ProductService());
            const exportCSV = () => {
                dt.value.exportCSV();
            };
            return { dt, products, exportCSV }
        }
    }
</script>