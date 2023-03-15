<template>
	<div>
        <div class="card">
            <div style="text-align: left">
                <Button class=" dark:bg-blue-900" icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
            </div>
            <h5>Loading 10000 rows</h5>
            <DataTable ref="dt" :value="virtualCars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
                <Column field="id" header="Id" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="vin" header="Vin" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="year" header="Year" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="30%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="brand" header="Brand" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="40%" height="1rem" />
                        </div>
                    </template>
                </Column>
                <Column field="color" header="Color" style="min-width: '200px'">
                    <template #loading>
                        <div class="flex align-items-center" :style="{height: '17px', 'flex-grow': '1', overflow: 'hidden'}">
                            <Skeleton width="60%" height="1rem" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CarService from '../../../service/CarServise';

export default {
    setup() {
        onMounted(() => {
            cars.value = Array.from({ length: 100000 }).map((_, i) => carService.value.generateCar(i + 1));
        })
        const exportCSV = () => {
            dt.value.exportCSV();
        };
        const dt = ref();
        const cars = ref(null);
        const virtualCars = ref(Array.from({ length: 100000 }));
        const lazyLoading = ref(false);
        const carService = ref(new CarService());
        const loadLazyTimeout = ref();

        const loadCarsLazy = (event) => {
            !lazyLoading.value && (lazyLoading.value = true);

            if (loadLazyTimeout.value) {
                clearTimeout(loadLazyTimeout.value);
            }

            //simulate remote connection with a timeout
            loadLazyTimeout.value = setTimeout(() => {
                let _virtualCars = [...virtualCars.value];
                let { first, last } = event;

                //load data of required page
                const loadedCars = cars.value.slice(first, last);

                //populate page of virtual cars
                Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

                virtualCars.value = _virtualCars;
                lazyLoading.value = false;
            }, Math.random() * 1000 + 250);
        }

        return { dt, exportCSV, cars, virtualCars, lazyLoading, loadCarsLazy };
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