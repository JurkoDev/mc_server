onEvent('jei.hide.items', event => {
    jei.base.items.hidden.forEach((hiddenItem) => {
        event.hide(hiddenItem);
    });

    jei.base.items.disabled.forEach((disabledItem) => {
        event.hide(disabledItem);
    });
});
