window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    function changeTabs(mainWrapper, menuItems, tabsContent){
        function hideInfoTabsContent(n){
            for(let i = n; i < tabsContent.length; i++){
                tabsContent[i].classList.remove('show');
                tabsContent[i].classList.add('hide');
            }
        }

        function showInfoTabsContent(n){
            hideInfoTabsContent(0);
            tabsContent[n].classList.add('show');
        }

        hideInfoTabsContent(1);

        mainWrapper.addEventListener('click', function(event){
            for (let i = 0; i < menuItems.length; i++){
                if(event.target && event.target == menuItems[i]){
                    showInfoTabsContent(i);
                }
            }
        });
    }

    let tabsContent = document.querySelectorAll('.info-tabcontent'),
        tabsHeader = document.querySelectorAll('.info-header-tab'),
        infoContent = document.querySelector('.info');

});