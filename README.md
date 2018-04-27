**COMPONENTS-JQUERY**
----------------------------------
## Components - jQuery

### Part 1 - The Dropdown
- [ ] Study the HTML in the index.html file that corresponds to the dropdown component
- [ ] Study the LESS file in the Dropdown folder
- [ ] Complete the `Dropdown.js` file using your HTML/CSS knowledge

### Part 2 - Tabs
- [ ] Study the HTML and LESS corresponding to the Tabs component
- [ ] Create the Tabs component
- [ ] Create the TabsLink component
- [ ] Create the TabsItem component
- [ ] Add some Tabs to the HTML to see how the components work!

### Stretch Goals
- [ ] Make the dropdown slide in/out, rather than just appearing and disappearing
- [ ] Get the TabsItem text to fade in/out OR slide in/out
- [ ] Look through the LESS code and refactor using jQuery
- [ ] Add styling using LESS files
- [ ] Remove the boxes on the top card and replace them using an image carousel

## Good Habits
- [ ] Pull Request title is your first and last name (add any notes in the comment field)
- [ ] Code has been committed regularly
- [ ] Commit comments are informative
- [ ] Code is organized in a logical way



Topics:
* jQuery 
* Constructors with ES6 class syntax
* `data` attributes

In this project, our design team has already built an HTML/CSS web page for us, our job is to add javascript functionality. You should be using jQuery wherever possible to achieve the effect requested. Here is a short demo video so you can see the expected interactions: https://youtu.be/CGCSNx-uCyk

## Description

#### Part One (The Dropdown):
* Once you load the page, you will notice a dropdown menu in the upper left side of the page. Currently when you click on it nothing happens. We will build out the functionality to allow a dropdown menu to open and close when a user clicks on the dropdown button.
  * Study the HTML in the index.html file corresponding to the dropdown component.
  * Study the LESS file in the Dropdown folder. 
  * With your knowledge of the HTML and CSS, complete the `Dropdown.js` file. You will be creating a dropdown component.

#### Part Two (Tabs):
* Now that we have an idea of how to create a component with a single class, we will be creating a complex component made up of two smaller components. The greater component wrapper will be called `Tabs` and the smaller component within it will be called `TabsLink` and `TabsItem`.
  * The `Tabs` component will be the overall wrapper of the sub components. This higher level component will find and create the sub components within it. This component will also keep track of which tab is currently selected, maintaining the state of the component as a whole. It will also act as liaison to the sub-components getting data from other sub-components for them. 
  * The `TabsLink` component will be on each of what we may consider the `tabs` on top of the box. These links will control the associated item, as well as selecting and deselecting themselves.
  * The `TabsItem` component will be the text displayed when a tab is selected. It will share a data attribute with it's corresponding tab, and should only show when it's tab has been selected.

* The `Tabs.js`  file should NOT be done in a linear top-to-bottom fashion. Study the corresponding HTML and LESS. Then look through the entire JS file and try to piece together what is happening. Once you have an idea of the flow of the component, start. You can start anywhere, but since the `Tabs` component will ultimately be controlling the other two (and there is more pre-done for you) that would be a good place to start. 

* Once you have completed the above, add a couple Tabs to the HTML in order to see first hand how great building webpages with components is!

#### Stretch Goals:
* jQuery animations.
  * Get the dropdown to slide in and out, rather than just appearing and disappearing
  * Get the TabsItem text to fade in and out, or slide in and out.
  * Look through the LESS code and see where you can refactor using jQuery to achieve similar results.
* Add styling using the LESS files.
* Remove the boxes on the top card and replace them with an image carousel. This will have to be done from scratch, and should be pretty difficult, but it uses the same techniques as the `Tabs` component. Give it a left and right button, and a number of images that scroll as the buttons are pressed.
  
