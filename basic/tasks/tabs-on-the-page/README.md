Module which change tabs in menu on the page 
place the file to our project
plug the file to main index html file use construct

<script src="main.js"></script>

Our structure

/*<div id="mainWrapper">
     <div id="menuItems">    
      <ul>
            <li>1</li>
            <li>2</li>  
            <li>3</li>
            <li>4</li>
        </ul>   
    <div/>
    <div id="tabsContent">
        <p>Content</p>
    </div>
    <div id="tabsContent">
        <p>Content</p>
    </div>
    <div id="tabsContent">
        <p>Content</p>
    </div>
    <div id="tabsContent">
        <p>Content</p>
    </div>
<div>*/

Write here our classes on our page

1. mainWrapper - class wrapper our a tabs and content for a tabs
2. menuItems - classes items our the main menu which you are ckicking
3. tabsContent - class content our tabs

In our js file write and all will be works

changeTabs(
 document.querySelector('our class'), 
 document.querySelectorAll('our class'),  
 document.querySelectorAll('our class')
);