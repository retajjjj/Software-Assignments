var inventory = [], typeFeature = [], category = [], featureDone = {};

//Add Item to the inventory
function addItem(product){
    var item = { name: product[0], category: product[1], 
        quantity: product[2], price: product[3], unit: product[4], 
        addedDate: new Date(), customer: product[5] || {} };

    inventory.push(item);

    if (!category.includes(product[1])) {
        category.push(product[1]);
    } 
    featureDone.push({ type: "add", item });
}

//Edit Item
function editItem(product){
    if (inventory[product[0]]) {
        featureDone.push({ type: "edit", old: inventory[product[0]], 
            new: product.slice(1) });

        inventory[product[0]] = { ...inventory[product[0]], name: product[1], 
            category: product[2], quantity: product[3], price: product[4], 
            unit: product[5], customer: product[6] || {} };
    }
}

//remove Item from the inventory
function removeItem(product){
    if (inventory[product[0]]) {
        featureDone.push({ type: "delete", item: inventory[product[0]] });
        inventory.splice(product[0], 1);
    }
}

//sell item
function sellItem(product){
    for (let itemSale of inventory) {
        if (itemSale.name === product[0]) {
            if (itemSale.quantity >= product[1]) {
                itemSale.quantity -= product[1];

                if(itemSale.quantity <= 10)
                {
                    console.log(`** ALERT ${itemSale.name} is below 10 units! 
                        Current quantity: ${itemSale.quantity}**`)
                }

                featureDone.push({ type: "sale", item: itemSale, 
                    quantitySold: product[1], dateSold: new Date() });

                console.log(`Sold ${product[1]} ${itemSale.unit} of ${itemSale.name}`);
            
            break;
            }
        }
    }
}

//restock item
function restockItem(product){
    for (let itemRestock of inventory) {
        if (itemRestock.name === product[0]) {
                itemRestock.quantity += product[1];
                featureDone.push({ type: "restock", item: itemRestock, 
                    quantityRestock: product[1], dateRestock: new Date() });
                console.log(`Restocked ${product[1]} ${itemRestock.unit} of ${itemRestock.name}`);
            
            break;
        }
    }
}

product=["Equipment" , "kitchen" , 4 , 50 ,6 , 16 , "retaj" ]

//test addItem
addItem(product);

//test edit item
editItem(product);

// test delete item
removeItem(product);

//test sell item
sellItem(product);

//test resock item
restockItem(product);




