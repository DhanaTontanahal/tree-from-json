let data = [
    {
        productTitle: "Product 1",
        productName: "Base Instance",
        quantity: 1,
        startDate: "3/1/21",
        endDate: "2/28/24",
        productClass: "PC-A",
        region: "AMS",
        security: "Y",
        type: "Shared",
        children: [
            {
                productTitle: "Product 2a",
                productName: "Software A",
                quantity: 1,
                startDate: "3/1/21",
                endDate: "2/28/22",
                productClass: "PC-B",
                children: [
                    {
                        productTitle: "Product 3a",
                        productName: "Plugin 1",
                        quantity: 1,
                        children: []

                    },
                    {
                        productTitle: "Product 3b",
                        productName: "Plugin 2",
                        quantity: 1,
                        children: []

                    }
                ]
            },
            {

                productTitle: "Product 2b",
                productName: "Software B",
                quantity: 1,
                startDate: "3/1/21",
                endDate: "2/28/23",
                productClass: "PC-Q",
                children: [
                    {
                        productTitle: "Product 3c",
                        productName: "Plugin 3",
                        quantity: 1,
                        children: []

                    }
                ]

            }
        ]
    }
];

function setDisplay(toHide, item) {
    toHide ? item.className = 'hide' : item.className = '';
}

function displayData(data, el, isChild) {

    var par = document.createElement('ul');

    for (var i = 0; i < data.length; i++) {
        
        var item = document.createElement('li');
        
		var li = par.appendChild(item);

        var table = document.createElement('table');
        //var newDiv = document.createElement('div');
        
        //newDiv.appendChild(table);
        li.addEventListener('click', function(e){
            var child = e.target.children[1];

            if(child && child.classList.value == 'hide') {
                setDisplay(false, child);
              } else {
                setDisplay(true, child);
              }
            e.stopPropagation();
            })

        li.appendChild(table);
        if (isChild) {

            table.classList.add("child-table");
            //newDiv.classList.add("child-div")
            setDisplay(false, item.parentNode);
            
        }

        el.appendChild(par);
        var objKeys = Object.keys(data[i]);

        var trow = document.createElement('tr');

        var tableHeader = document.createElement('p');
        tableHeader.classList.add('spanHeader');

        table.appendChild(tableHeader);
        tableHeader.innerHTML="header"
        //Add the header
        for (var j = 0; j < objKeys.length - 1; j++) {
            var theader = document.createElement('th');
            
            theader.innerHTML = objKeys[j];
            trow.appendChild(theader);
            table.appendChild(trow)
        }

        var trow1 = document.createElement('tr');
        tableHeader.innerHTML = data[i][objKeys[0]]
        //Add the data
        for (var k = 0; k < objKeys.length - 1; k++) {
            var tdata = document.createElement('td');
           
            tdata.innerHTML = data[i][objKeys[k]];
            trow1.appendChild(tdata);
            table.appendChild(trow1)
        }

        if (data[i].children) {
            displayData(data[i].children, li, true);
        }
    }
}


window.onload = function () {

    var root = document.getElementById('app');
    displayData(data, root, false);

}
