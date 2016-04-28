import { Template } from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Days} from '../both/collections.js';
import {getTodaysDate, updateTodaysState, updateTodaysComment} from '../both/helpers.js';

Template.today.onCreated(function todayTemplateCreated() {
    this.viewState = new ReactiveVar(true);
});

Template.today.helpers({
    today() {
        return Template.instance().viewState.get();
    },
    todaysInfo() {
        return Days.findOne({ 'date': getTodaysDate() });
    }
});

Template.today.events({
    'click #yes-button': function clickYesHandler(event, template) {
        updateTodaysState(true);
    },
    'click #no-button': function clickNoHandler(event, template) {
        updateTodaysState(false);
    },
    'input #comment-textarea': function changeInput(event, template) {
        let comment = template.find('#comment-textarea').value;
        updateTodaysComment(comment);
    },
    'click #toggle-overview': function handleViewStateChanged(event, template) {
        template.viewState.set(!template.viewState.get());
    }
});