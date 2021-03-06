/**
 * Unplanned grid component
 *
 * Taken from the vanilla dragfromgrid example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
// import { Grid } from '@bryntum/scheduler';
import { Grid } from '@bryntum/scheduler/scheduler.umd';

export default class UnplannedGrid extends Grid {

    /**
     * Original class name getter. See Widget.$name docs for the details.
     * @return {string}
     */
    static get $name() {
        return 'UnplannedGrid';
    }

    static get defaultConfig() {
        return {
            features : {
                stripe : true,
                sort   : 'name'
            },

            columns : [{
                text       : 'Unassigned tasks',
                flex       : 1,
                field      : 'name',
                htmlEncode : false,
                renderer   : (data) => `<i class="${data.record.iconCls}"></i>${data.record.name}`
            }, {
                text     : 'Duration',
                width    : 100,
                align    : 'right',
                editor   : false,
                field    : 'duration',
                renderer : (data) => `${data.record.duration} ${data.record.durationUnit}`
            }],

            rowHeight : 50
        };
    }

    construct(config) {
        super.construct(config);

        this.eventStore.on({
            // When a task is updated, check if it was unassigned and if so - move it back to the unplanned tasks grid
            update  : ({ record, changes }) => {
                if ('resourceId' in changes && !record.resourceId) {
                    this.eventStore.remove(record);
                    this.store.add(record);
                }
            },
            thisObj : this
        });
    }
};
