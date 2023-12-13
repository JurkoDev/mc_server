onEvent('jei.information', event => {
    jei.base.items.disabled.forEach((item) => {
        if (item !== air) {
            console.log(`Disabled: ${item}`);
            event.addItem(item, disabled_item_message);
        }
    });
});
