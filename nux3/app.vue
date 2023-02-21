<script setup>

</script>
<template>
  <div>
    <h1>PRIME VUE</h1>
    <Button label="Click" icon="pi pi-check"/>
    <DataTable :value="products" ref="dt" responsiveLayout="scroll">
            <template #header>
                <div style="text-align: left">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
            </template>
            <Column field="code" header="Code" exportHeader="Product Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    <NuxtWelcome />
  </div>
</template>
