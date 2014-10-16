'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;

var $ = require('../shims/jquery');
var _ = require('lodash');

var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,
  
  events: {
    'click a[href]:not([rel="download"])': 'handleLinkClick',
  },

  render: function () {
    var self = this;
    this.$el.append(this.template());

    this.pageSwitcher = new ViewSwitcher(this.$('[role="page-container"]')[0], {
      show: function (newView) {
        document.title = newView.pageTitle || 'Balul Bobocilor';
        window.scrollTo(0, 0);
        var html = $('html');
        _.each(self.documentClasses, function (c) {
          html.removeClass(c);
        });

        self.documentClasses = getClasses(newView);
        _.each(self.documentClasses, function (c) {
          html.addClass(c);
        });

        window.app.currentPage = newView;
      }
    });
    return this;
  },

  setPage: function (view) {
    this.pageSwitcher.set(view);
  },

  handleLinkClick: function (e) {
    var t = $(e.target);
    var aEl = t.is('a') ? t[0] : t.closest('a')[0];
    var local = window.location.host === aEl.host;
    var path = aEl.pathname.slice(1);

    // If the window location host and target host are the
    // same it's local, else, leave it alone.
    if (local) {
      e.preventDefault();
      window.app.navigate(path);
    }
  }
});
