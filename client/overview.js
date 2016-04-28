import { Template } from 'meteor/templating';
import {Days} from '../both/collections.js';

Template.overview.helpers({
    tableData () {
        return Days.find({},{sort: {date:-1}});
    }
});