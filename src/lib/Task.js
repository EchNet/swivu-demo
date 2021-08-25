/**
 * Custom Task model
 *
 * Taken from the vanilla dragfromgrid example
 */
// we import scheduler.umd for IE11 compatibility only. If you don't use IE import:
// import { EventModel } from '@bryntum/scheduler';
import { EventModel } from '@bryntum/scheduler/scheduler.umd';

export default class Task extends EventModel {
    static get defaults() {
        return {
            // in this demo, default duration for tasks will be hours (instead of days)
            durationUnit : 'h'
        };
    }
}
