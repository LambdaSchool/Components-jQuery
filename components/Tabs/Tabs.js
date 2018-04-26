class TabsItem {
  constructor(element) {
    // Attach dom element to object. Example in Tabs class
    this.element = $(element);
  }

  select() {
    // Selects the item by adding a class
    this.element.addClass('tabs-item-selected');
    /* Stretch goal: use a built in jQuery method to show the item */
  }

  deselect() {
    // Deselects the item by removing a class
    /* Stretch goal: use a built in jQuery method to hide the item */
    this.element.removeClass('tabs-item-selected');
  }
}

class TabsLink {
  constructor(element, parent) {
    // Attach the element to this instance of the TabsLink class
    this.element = $(element);
    // Attach Tabs (parent) to this instance of the TabsLink class
    this.tabs = parent;
    /* Use the getTab method on the parent to find the corresponding TabItem for this link
       hint: use the data-tab attribute */
    this.tabsItem = parent.getTab(element[0].dataset.tab);
    // console.log(this.tabsItem.dataset);
    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem = new TabsItem(this.tabsItem);
    /* Add an click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click( () => {
      this.tabs.updateActive(this);
    });
  };

  selectMethodFromTabsLink() {
    // add selected class to this link
    this.element.addClass('tabs-link-selected');
    // select the associated tab item
    this.tabsItem.select();
    // console.log(this.tabItems);
  }

  deselect() {
    // deselect this link
    this.element.removeClass('tabs-link-selected');
    // deselect the associated tab item
    this.tabsItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = $(element);

    // Using jQuery's .find method, get an array of all links on the element
    this.links = $(this.element).find('.tabs-link');

    // This step will map over the array creating new TabsLink class isntances of each link.
    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });

    // console.log(this.links)

    // Select the first Link and set it to the activeLink
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    // Select the first link and tab upon ititialization
    this.activeLink.selectMethodFromTabsLink();
  }

  updateActive(newActive) {
    // Deselect the old active link
    this.links.map(function(index, element) {
      element.deselect()
    });
    // Assign the new active link
    newActive.selectMethodFromTabsLink();
  }

  getTab(data) {
    // Use the tab item classname and the data attribute to select the proper item
    return $('.tabs-items').find(`[data-tab='${data}']`);
  }

}

/* Using jQuery, select all instances of the class tabs, map over it and create new instances 
   of the Tabs class with the element */
let tabs = $('.tabs');
tabs = tabs.map(function(index, element) {
   new Tabs(element);
  });
