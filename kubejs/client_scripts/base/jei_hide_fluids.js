onEvent('jei.hide.fluids', event => {
    jei.base.fluids.hidden.forEach((hiddenFluid) => {
        event.hide(hiddenFluid);
    });
});
