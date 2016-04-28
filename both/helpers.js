import {Days} from './collections.js'

export function getTodaysDate() {
    return getDate(new Date());
}

function getDate(date) {
    let dd = date.getDate();
    let MM = date.getMonth() + 1; //zero based
    let yyyy = date.getFullYear();

    return `${dd}/${MM}/${yyyy}`;
}

export function updateTodaysState(state) {
    var todayDateString = getTodaysDate();

    let knownDay = Days.findOne({ 'date': todayDateString });
    if (knownDay) {
        Days.update(knownDay._id, { $set: { 'state': state } });
    } else {
        Days.insert({ 'date': todayDateString, 'state': state });
    }
}

export function updateTodaysComment(comment) {
    var todayDateString = getTodaysDate();

    let knownDay = Days.findOne({ 'date': todayDateString });
    if (knownDay) {
        Days.update(knownDay._id, { $set: { 'comment': comment } });
    } else {
        Days.insert({ 'date': todayDateString, 'comment': comment });
    }
}
