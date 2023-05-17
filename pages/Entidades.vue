<script setup>
// Imports Components Start
import Select from "~~/components/Selects/Select.vue";
import DataTable from "~~/components/Tables/DataTable.vue";
import TableDynamic from "~~/components/Tables/AllTables/TableDynamic.vue";
import TableEdit from "~~/components/Tables/AllTables/TableEdit.vue";
import TableScrollLoading from "~~/components/Tables/AllTables/TableScrollLoading.vue";
import TableToggleColumn from "~~/components/Tables/AllTables/TableToggleColumn.vue";
// Imports Components End
// Dinamic
useHead({
  title: "Entidades",
});
</script>
<template>
  <div>
    <h1
      class="mb-4 text-left text-2xl text-slate-900 dark:text-white font-bold"
    >
      Entidades
    </h1>
    <Select />
    <!-- <DataTable/> -->
    <!-- <TableDynamic/> -->
    <!-- <TableEdit/> -->
    <!-- <TableScrollLoading/> -->
    <!-- <TableToggleColumn/> -->
  </div>
</template>
